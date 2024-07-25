// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: tXkSR39sgCDWSitZxC5xFV
// Component: wNvxk7eOak

import * as React from "react";

import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  Flex as Flex__,
  hasVariant,
  renderPlasmicSlot,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  useDollarState,
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";

import ExpandButton from "../../components/widgets/ExpandButton"; // plasmic-import: JJhv0MV9DH/component
import IconButton from "../../components/widgets/IconButton"; // plasmic-import: LPry-TF4j22a/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_plasmic_kit_color_tokens_css from "../plasmic_kit_q_4_color_tokens/plasmic_plasmic_kit_q_4_color_tokens.module.css"; // plasmic-import: 95xp9cYcv7HrNWpFWWhbcv/projectcss
import projectcss from "../PP__plasmickit_design_system.module.css"; // plasmic-import: tXkSR39sgCDWSitZxC5xFV/projectcss
import sty from "./PlasmicListSectionHeader.module.css"; // plasmic-import: wNvxk7eOak/css

import VariantGroupIcon from "../plasmic_kit/PlasmicIcon__VariantGroup"; // plasmic-import: pyS6pK4Spx-QF/icon
import ChevronDownsvgIcon from "../q_4_icons/icons/PlasmicIcon__ChevronDownsvg"; // plasmic-import: xZrB9_0ir/icon
import PlusCirclesvgIcon from "../q_4_icons/icons/PlasmicIcon__PlusCirclesvg"; // plasmic-import: tPPI666-2/icon

createPlasmicElementProxy;

export type PlasmicListSectionHeader__VariantMembers = {
  collapseState: "collapsed" | "expanded";
  showActions: "showActions";
  showIcon: "showIcon";
};
export type PlasmicListSectionHeader__VariantsArgs = {
  collapseState?: SingleChoiceArg<"collapsed" | "expanded">;
  showActions?: SingleBooleanChoiceArg<"showActions">;
  showIcon?: SingleBooleanChoiceArg<"showIcon">;
};
type VariantPropType = keyof PlasmicListSectionHeader__VariantsArgs;
export const PlasmicListSectionHeader__VariantProps =
  new Array<VariantPropType>("collapseState", "showActions", "showIcon");

export type PlasmicListSectionHeader__ArgsType = {
  children?: React.ReactNode;
  actions?: React.ReactNode;
  icon?: React.ReactNode;
};
type ArgPropType = keyof PlasmicListSectionHeader__ArgsType;
export const PlasmicListSectionHeader__ArgProps = new Array<ArgPropType>(
  "children",
  "actions",
  "icon"
);

export type PlasmicListSectionHeader__OverridesType = {
  root?: Flex__<"div">;
  iconContainer?: Flex__<"div">;
  titleContainer?: Flex__<"div">;
  actionsContainer?: Flex__<"div">;
  collapseIndicator?: Flex__<"div">;
  expandButton?: Flex__<typeof ExpandButton>;
};

export interface DefaultListSectionHeaderProps {
  children?: React.ReactNode;
  actions?: React.ReactNode;
  icon?: React.ReactNode;
  collapseState?: SingleChoiceArg<"collapsed" | "expanded">;
  showActions?: SingleBooleanChoiceArg<"showActions">;
  showIcon?: SingleBooleanChoiceArg<"showIcon">;
  className?: string;
}

const $$ = {};

function PlasmicListSectionHeader__RenderFunc(props: {
  variants: PlasmicListSectionHeader__VariantsArgs;
  args: PlasmicListSectionHeader__ArgsType;
  overrides: PlasmicListSectionHeader__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants,
  };

  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "collapseState",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.collapseState,
      },
      {
        path: "showActions",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.showActions,
      },
      {
        path: "showIcon",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.showIcon,
      },
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs,
  });

  return (
    <Stack__
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_plasmic_kit_color_tokens_css.plasmic_tokens,
        sty.root,
        {
          [sty.rootcollapseState_collapsed]: hasVariant(
            $state,
            "collapseState",
            "collapsed"
          ),
          [sty.rootcollapseState_expanded]: hasVariant(
            $state,
            "collapseState",
            "expanded"
          ),
          [sty.rootshowActions]: hasVariant(
            $state,
            "showActions",
            "showActions"
          ),
          [sty.rootshowIcon]: hasVariant($state, "showIcon", "showIcon"),
        }
      )}
    >
      {(hasVariant($state, "showIcon", "showIcon") ? true : false) ? (
        <div
          data-plasmic-name={"iconContainer"}
          data-plasmic-override={overrides.iconContainer}
          className={classNames(projectcss.all, sty.iconContainer, {
            [sty.iconContainercollapseState_collapsed]: hasVariant(
              $state,
              "collapseState",
              "collapsed"
            ),
            [sty.iconContainershowIcon]: hasVariant(
              $state,
              "showIcon",
              "showIcon"
            ),
          })}
        >
          {renderPlasmicSlot({
            defaultContents: (
              <VariantGroupIcon
                className={classNames(projectcss.all, sty.svg__yXeE)}
                role={"img"}
              />
            ),

            value: args.icon,
            className: classNames(sty.slotTargetIcon, {
              [sty.slotTargetIconshowIcon]: hasVariant(
                $state,
                "showIcon",
                "showIcon"
              ),
            }),
          })}
        </div>
      ) : null}
      <div
        data-plasmic-name={"titleContainer"}
        data-plasmic-override={overrides.titleContainer}
        className={classNames(projectcss.all, sty.titleContainer, {
          [sty.titleContainercollapseState_collapsed]: hasVariant(
            $state,
            "collapseState",
            "collapsed"
          ),
          [sty.titleContainershowActions]: hasVariant(
            $state,
            "showActions",
            "showActions"
          ),
        })}
      >
        {renderPlasmicSlot({
          defaultContents: "List Item Section",
          value: args.children,
          className: classNames(sty.slotTargetChildren, {
            [sty.slotTargetChildrenshowActions]: hasVariant(
              $state,
              "showActions",
              "showActions"
            ),
            [sty.slotTargetChildrenshowIcon]: hasVariant(
              $state,
              "showIcon",
              "showIcon"
            ),
          }),
        })}
      </div>
      {(hasVariant($state, "showActions", "showActions") ? true : false) ? (
        <div
          data-plasmic-name={"actionsContainer"}
          data-plasmic-override={overrides.actionsContainer}
          className={classNames(projectcss.all, sty.actionsContainer, {
            [sty.actionsContainershowActions]: hasVariant(
              $state,
              "showActions",
              "showActions"
            ),
          })}
        >
          {renderPlasmicSlot({
            defaultContents: (
              <IconButton
                children2={
                  <ChevronDownsvgIcon
                    className={classNames(projectcss.all, sty.svg__pXkgq)}
                    role={"img"}
                  />
                }
                className={classNames("__wab_instance", sty.iconButton__yhbTg)}
                size={"small"}
              >
                <PlusCirclesvgIcon
                  className={classNames(projectcss.all, sty.svg__priNb)}
                  role={"img"}
                />
              </IconButton>
            ),
            value: args.actions,
          })}
        </div>
      ) : null}
      {(
        hasVariant($state, "collapseState", "expanded")
          ? true
          : hasVariant($state, "collapseState", "collapsed")
          ? true
          : false
      ) ? (
        <div
          data-plasmic-name={"collapseIndicator"}
          data-plasmic-override={overrides.collapseIndicator}
          className={classNames(projectcss.all, sty.collapseIndicator, {
            [sty.collapseIndicatorcollapseState_collapsed]: hasVariant(
              $state,
              "collapseState",
              "collapsed"
            ),
            [sty.collapseIndicatorcollapseState_expanded]: hasVariant(
              $state,
              "collapseState",
              "expanded"
            ),
          })}
        >
          <ExpandButton
            data-plasmic-name={"expandButton"}
            data-plasmic-override={overrides.expandButton}
            className={classNames("__wab_instance", sty.expandButton, {
              [sty.expandButtoncollapseState_collapsed]: hasVariant(
                $state,
                "collapseState",
                "collapsed"
              ),
              [sty.expandButtoncollapseState_expanded]: hasVariant(
                $state,
                "collapseState",
                "expanded"
              ),
            })}
            isExpanded={
              hasVariant($state, "collapseState", "expanded") ? true : undefined
            }
            size={"small"}
          />
        </div>
      ) : null}
    </Stack__>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "iconContainer",
    "titleContainer",
    "actionsContainer",
    "collapseIndicator",
    "expandButton",
  ],
  iconContainer: ["iconContainer"],
  titleContainer: ["titleContainer"],
  actionsContainer: ["actionsContainer"],
  collapseIndicator: ["collapseIndicator", "expandButton"],
  expandButton: ["expandButton"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  iconContainer: "div";
  titleContainer: "div";
  actionsContainer: "div";
  collapseIndicator: "div";
  expandButton: typeof ExpandButton;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicListSectionHeader__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicListSectionHeader__VariantsArgs;
    args?: PlasmicListSectionHeader__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicListSectionHeader__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicListSectionHeader__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicListSectionHeader__ArgProps,
          internalVariantPropNames: PlasmicListSectionHeader__VariantProps,
        }),
      [props, nodeName]
    );
    return PlasmicListSectionHeader__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicListSectionHeader";
  } else {
    func.displayName = `PlasmicListSectionHeader.${nodeName}`;
  }
  return func;
}

export const PlasmicListSectionHeader = Object.assign(
  // Top-level PlasmicListSectionHeader renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    iconContainer: makeNodeComponent("iconContainer"),
    titleContainer: makeNodeComponent("titleContainer"),
    actionsContainer: makeNodeComponent("actionsContainer"),
    collapseIndicator: makeNodeComponent("collapseIndicator"),
    expandButton: makeNodeComponent("expandButton"),

    // Metadata about props expected for PlasmicListSectionHeader
    internalVariantProps: PlasmicListSectionHeader__VariantProps,
    internalArgProps: PlasmicListSectionHeader__ArgProps,
  }
);

export default PlasmicListSectionHeader;
/* prettier-ignore-end */
