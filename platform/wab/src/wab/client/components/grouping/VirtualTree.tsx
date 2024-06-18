import { Matcher } from "@/wab/client/components/view-common";
import { ListSpace } from "@/wab/client/components/widgets/ListStack";
import * as React from "react";
import { FixedSizeList, areEqual } from "react-window";

export interface RenderElementProps<T> {
  value: T;
  /** Tree state for the rendered component */
  treeState: {
    matcher: Matcher;
    canOpen: boolean;
    isOpen: boolean;
  };
}

type Key = string;

type RenderElement<T> = React.FunctionComponent<RenderElementProps<T>>;

interface LinearTreeNode<T> {
  value: T;
  key: Key;
  level: number;
  parentKey?: Key;
  isOpen: boolean;
  canOpen: boolean;
}

interface TreeRowData<T> {
  treeData: {
    matcher: Matcher;
    nodes: LinearTreeNode<T>[];
    renderElement: RenderElement<T>;
    toggleExpand: (key: Key) => void;
  };
}

interface VirtualTreeProps<T> {
  rootNodes: T[];
  query?: string;
  getNodeKey: (node: T) => Key;
  getNodeChildren: (node: T) => T[];
  getNodeSearchText: (node: T) => string;
  renderElement: RenderElement<T>;
  rowHeight: number;
}

export function VirtualTree<T>(props: VirtualTreeProps<T>) {
  const {
    rootNodes,
    query,
    getNodeKey,
    getNodeChildren,
    getNodeSearchText,
    renderElement,
    rowHeight,
  } = props;

  const { nodeData, nodeKey } = useTreeData(
    rootNodes,
    query,
    renderElement,
    getNodeKey,
    getNodeChildren,
    getNodeSearchText
  );

  return (
    <ListSpace space={5000}>
      {({ height }) =>
        height > 0 && (
          <FixedSizeList
            width={"100%"}
            height={height}
            itemCount={nodeData.treeData.nodes.length}
            itemSize={rowHeight}
            overscanCount={2}
            itemData={nodeData}
            itemKey={nodeKey}
          >
            {Row}
          </FixedSizeList>
        )
      }
    </ListSpace>
  );
}
const genericMemo: <T>(
  component: T,
  propsAreEqual?: (
    prevProps: React.PropsWithChildren<T>,
    nextProps: React.PropsWithChildren<T>
  ) => boolean
) => T = React.memo;

const Row = genericMemo(
  <T,>({
    style,
    index,
    data,
  }: {
    style?: React.CSSProperties;
    index: number;
    data: TreeRowData<T>;
  }) => {
    const node = data.treeData.nodes[index];
    return (
      <TreeNodeRow
        key={node.key}
        style={style}
        nodeKey={node.key}
        value={node.value}
        level={node.level}
        parentKey={node.parentKey}
        canOpen={node.canOpen}
        isOpen={node.isOpen}
        matcher={data.treeData.matcher}
        toggleExpand={data.treeData.toggleExpand}
        renderElement={data.treeData.renderElement}
      />
    );
  },
  areEqual
);

interface TreeNodeRowProps<T> {
  style?: React.CSSProperties;
  nodeKey: Key;
  value: T;
  level: number;
  parentKey?: Key;
  isOpen: boolean;
  canOpen: boolean;
  matcher: Matcher;
  toggleExpand: (key: Key) => void;
  renderElement: RenderElement<T>;
}

const TreeNodeRow = <T,>(props: TreeNodeRowProps<T>) => {
  const {
    style,
    nodeKey,
    value,
    level,
    canOpen,
    isOpen,
    matcher,
    toggleExpand,
    renderElement,
  } = props;
  const onClickHandle = React.useMemo(() => {
    if (!canOpen) {
      return undefined;
    }
    return () => toggleExpand(nodeKey);
  }, [nodeKey, canOpen, toggleExpand]);
  const treeState = React.useMemo(() => {
    return {
      matcher,
      canOpen: canOpen,
      isOpen: isOpen,
    };
  }, [matcher, canOpen, isOpen]);
  return (
    <div
      key={nodeKey}
      style={{ paddingLeft: level * 12, ...style }}
      onClick={onClickHandle}
    >
      {renderElement({
        value,
        treeState,
      })}
    </div>
  );
};

function useTreeData<T>(
  nodes: T[],
  query: string = "",
  renderElement: RenderElement<T>,
  getNodeKey: (node: T) => Key,
  getNodeChildren: (node: T) => T[],
  getNodeSearchText: (node: T) => string
) {
  const matcher = React.useMemo(() => {
    return new Matcher(query?.trim() ?? "");
  }, [query]);
  const [expandedNodes, setExpandedNodes] = React.useState<Set<Key>>(new Set());
  const toggleExpand = React.useCallback(
    (key: Key) => {
      setExpandedNodes((set) => {
        if (set.has(key)) {
          set.delete(key);
        } else {
          set.add(key);
        }
        return new Set(set);
      });
    },
    [setExpandedNodes]
  );

  const visibleNodes = React.useMemo<LinearTreeNode<T>[]>(
    () =>
      buildVisibleNodes(
        nodes,
        matcher,
        expandedNodes,
        getNodeKey,
        getNodeChildren,
        getNodeSearchText
      ),
    [
      nodes,
      matcher,
      expandedNodes,
      getNodeKey,
      getNodeChildren,
      getNodeSearchText,
    ]
  );

  const nodeData: TreeRowData<T> = React.useMemo(
    () => ({
      treeData: {
        nodes: visibleNodes,
        matcher,
        renderElement,
        toggleExpand,
      },
    }),
    [visibleNodes, matcher, toggleExpand]
  );
  const nodeKey = React.useCallback(
    (index: number, data: TreeRowData<T>) =>
      getNodeKey(data.treeData.nodes[index].value),
    [getNodeKey]
  );

  return {
    nodeData,
    visibleNodes,
    nodeKey,
  };
}

function buildVisibleNodes<T>(
  rootNodes: T[],
  matcher: Matcher,
  expandedNodes: Set<Key>,
  getNodeKey: (node: T) => Key,
  getNodeChildren: (node: T) => T[],
  getNodeSearchText: (node: T) => string
): LinearTreeNode<T>[] {
  const visibleNodes: LinearTreeNode<T>[] = [];
  const hasQuery = matcher.hasQuery();

  const pushVisibleNodes = (
    node: T,
    parentKey: Key | undefined,
    depth: number
  ): boolean => {
    const key = getNodeKey(node);
    const children = getNodeChildren(node);
    const searchText = getNodeSearchText(node);
    visibleNodes.push({
      key,
      value: node,
      isOpen: hasQuery || expandedNodes.has(key),
      canOpen: !(children.length === 0),
      level: depth,
      parentKey: parentKey,
    });
    let shouldAddNode = !hasQuery || matcher.matches(searchText);
    if (expandedNodes.has(key) || hasQuery) {
      children.forEach((child) => {
        const pushedChildren = pushVisibleNodes(child, key, depth + 1);
        shouldAddNode = shouldAddNode || pushedChildren;
      });
    }
    if (!shouldAddNode) {
      visibleNodes.pop();
    }
    return shouldAddNode;
  };

  rootNodes.forEach((node) => pushVisibleNodes(node, undefined, 0));
  return visibleNodes;
}
