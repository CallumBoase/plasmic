// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: tXkSR39sgCDWSitZxC5xFV
// Component: btpz7A3thO

import * as React from "react";

import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  Flex as Flex__,
  hasVariant,
  renderPlasmicSlot,
  SingleBooleanChoiceArg,
  Stack as Stack__,
  StrictProps,
  useDollarState,
  useTrigger,
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";

import Textbox from "../../components/widgets/Textbox"; // plasmic-import: pA22NEzDCsn_/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_plasmic_kit_color_tokens_css from "../plasmic_kit_q_4_color_tokens/plasmic_plasmic_kit_q_4_color_tokens.module.css"; // plasmic-import: 95xp9cYcv7HrNWpFWWhbcv/projectcss
import projectcss from "../PP__plasmickit_design_system.module.css"; // plasmic-import: tXkSR39sgCDWSitZxC5xFV/projectcss
import sty from "./PlasmicInlineEditable.module.css"; // plasmic-import: btpz7A3thO/css

import ClosesvgIcon from "../q_4_icons/icons/PlasmicIcon__Closesvg"; // plasmic-import: DhvEHyCHT/icon
import EditsvgIcon from "../q_4_icons/icons/PlasmicIcon__Editsvg"; // plasmic-import: _Qa2gdunG/icon
import SearchsvgIcon from "../q_4_icons/icons/PlasmicIcon__Searchsvg"; // plasmic-import: R5DLz11OA/icon

createPlasmicElementProxy;

export type PlasmicInlineEditable__VariantMembers = {
  editing: "editing";
  disabled: "disabled";
  medium: "medium";
};
export type PlasmicInlineEditable__VariantsArgs = {
  editing?: SingleBooleanChoiceArg<"editing">;
  disabled?: SingleBooleanChoiceArg<"disabled">;
  medium?: SingleBooleanChoiceArg<"medium">;
};
type VariantPropType = keyof PlasmicInlineEditable__VariantsArgs;
export const PlasmicInlineEditable__VariantProps = new Array<VariantPropType>(
  "editing",
  "disabled",
  "medium"
);

export type PlasmicInlineEditable__ArgsType = {
  placeholder?: string;
  value?: any;
  children?: React.ReactNode;
  icon?: React.ReactNode;
};
type ArgPropType = keyof PlasmicInlineEditable__ArgsType;
export const PlasmicInlineEditable__ArgProps = new Array<ArgPropType>(
  "placeholder",
  "value",
  "children",
  "icon"
);

export type PlasmicInlineEditable__OverridesType = {
  root?: Flex__<"div">;
  textbox?: Flex__<typeof Textbox>;
};

export interface DefaultInlineEditableProps {
  placeholder?: string;
  value?: any;
  children?: React.ReactNode;
  icon?: React.ReactNode;
  editing?: SingleBooleanChoiceArg<"editing">;
  disabled?: SingleBooleanChoiceArg<"disabled">;
  medium?: SingleBooleanChoiceArg<"medium">;
  className?: string;
}

const $$ = {};

function PlasmicInlineEditable__RenderFunc(props: {
  variants: PlasmicInlineEditable__VariantsArgs;
  args: PlasmicInlineEditable__ArgsType;
  overrides: PlasmicInlineEditable__OverridesType;
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
        path: "editing",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.editing,
      },
      {
        path: "disabled",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.disabled,
      },
      {
        path: "medium",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.medium,
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

  const [isRootHover, triggerRootHoverProps] = useTrigger("useHover", {});
  const triggers = {
    hover_root: isRootHover,
  };

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
          [sty.rootdisabled]: hasVariant($state, "disabled", "disabled"),
          [sty.rootediting]: hasVariant($state, "editing", "editing"),
          [sty.rootmedium]: hasVariant($state, "medium", "medium"),
        }
      )}
      data-plasmic-trigger-props={[triggerRootHoverProps]}
    >
      {(hasVariant($state, "editing", "editing") ? false : true)
        ? renderPlasmicSlot({
            defaultContents: "Enter some text",
            value: args.children,
            className: classNames(sty.slotTargetChildren, {
              [sty.slotTargetChildrendisabled]: hasVariant(
                $state,
                "disabled",
                "disabled"
              ),
              [sty.slotTargetChildrenediting]: hasVariant(
                $state,
                "editing",
                "editing"
              ),
              [sty.slotTargetChildrenmedium]: hasVariant(
                $state,
                "medium",
                "medium"
              ),
            }),
          })
        : null}
      {(hasVariant($state, "editing", "editing") ? true : false) ? (
        <Textbox
          data-plasmic-name={"textbox"}
          data-plasmic-override={overrides.textbox}
          className={classNames("__wab_instance", sty.textbox, {
            [sty.textboxdisabled]: hasVariant($state, "disabled", "disabled"),
            [sty.textboxediting]: hasVariant($state, "editing", "editing"),
          })}
          placeholder={args.placeholder}
          prefixIcon={
            <SearchsvgIcon
              className={classNames(projectcss.all, sty.svg__o9Tey)}
              role={"img"}
            />
          }
          styleType={["seamless"]}
          suffixIcon={
            <ClosesvgIcon
              className={classNames(projectcss.all, sty.svg__omIyo)}
              role={"img"}
            />
          }
          value={args.value}
        />
      ) : null}
      {(triggers.hover_root ? true : false)
        ? renderPlasmicSlot({
            defaultContents: (
              <EditsvgIcon
                className={classNames(projectcss.all, sty.svg__rbpDt)}
                role={"img"}
              />
            ),

            value: args.icon,
            className: classNames(sty.slotTargetIcon, {
              [sty.slotTargetIcondisabled]: hasVariant(
                $state,
                "disabled",
                "disabled"
              ),
              [sty.slotTargetIconediting]: hasVariant(
                $state,
                "editing",
                "editing"
              ),
              [sty.slotTargetIconmedium]: hasVariant(
                $state,
                "medium",
                "medium"
              ),
            }),
          })
        : null}
    </Stack__>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "textbox"],
  textbox: ["textbox"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  textbox: typeof Textbox;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicInlineEditable__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicInlineEditable__VariantsArgs;
    args?: PlasmicInlineEditable__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicInlineEditable__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicInlineEditable__ArgsType,
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
          internalArgPropNames: PlasmicInlineEditable__ArgProps,
          internalVariantPropNames: PlasmicInlineEditable__VariantProps,
        }),
      [props, nodeName]
    );
    return PlasmicInlineEditable__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicInlineEditable";
  } else {
    func.displayName = `PlasmicInlineEditable.${nodeName}`;
  }
  return func;
}

export const PlasmicInlineEditable = Object.assign(
  // Top-level PlasmicInlineEditable renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    textbox: makeNodeComponent("textbox"),

    // Metadata about props expected for PlasmicInlineEditable
    internalVariantProps: PlasmicInlineEditable__VariantProps,
    internalArgProps: PlasmicInlineEditable__ArgProps,
  }
);

export default PlasmicInlineEditable;
/* prettier-ignore-end */
