// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: gYEVvAzCcLMHDVPvuYxkFh
// Component: fVzKJ6hzd6u

import * as React from "react";

import {
  Flex as Flex__,
  SingleBooleanChoiceArg,
  StrictProps,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  hasVariant,
  renderPlasmicSlot,
  useDollarState,
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";

import * as pp from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_plasmic_kit_design_system_deprecated_css from "../PP__plasmickit_design_system.module.css"; // plasmic-import: tXkSR39sgCDWSitZxC5xFV/projectcss
import plasmic_plasmic_kit_color_tokens_css from "../plasmic_kit_q_4_color_tokens/plasmic_plasmic_kit_q_4_color_tokens.module.css"; // plasmic-import: 95xp9cYcv7HrNWpFWWhbcv/projectcss
import sty from "./PlasmicStyleSelect__Option.module.css"; // plasmic-import: fVzKJ6hzd6u/css
import projectcss from "./plasmic_plasmic_kit_styles_pane.module.css"; // plasmic-import: gYEVvAzCcLMHDVPvuYxkFh/projectcss

import SUPER__PlasmicStyleSelect from "./PlasmicStyleSelect"; // plasmic-import: E0bKgamUEin/render

createPlasmicElementProxy;

export type PlasmicStyleSelect__Option__VariantMembers = {
  isSelected: "isSelected";
  isHighlighted: "isHighlighted";
  isDisabled: "isDisabled";
  isUnsetOption: "isUnsetOption";
};
export type PlasmicStyleSelect__Option__VariantsArgs = {
  isSelected?: SingleBooleanChoiceArg<"isSelected">;
  isHighlighted?: SingleBooleanChoiceArg<"isHighlighted">;
  isDisabled?: SingleBooleanChoiceArg<"isDisabled">;
  isUnsetOption?: SingleBooleanChoiceArg<"isUnsetOption">;
};
type VariantPropType = keyof PlasmicStyleSelect__Option__VariantsArgs;
export const PlasmicStyleSelect__Option__VariantProps =
  new Array<VariantPropType>(
    "isSelected",
    "isHighlighted",
    "isDisabled",
    "isUnsetOption"
  );

export type PlasmicStyleSelect__Option__ArgsType = {
  children?: React.ReactNode;
  value?: string;
  textValue?: string;
};
type ArgPropType = keyof PlasmicStyleSelect__Option__ArgsType;
export const PlasmicStyleSelect__Option__ArgProps = new Array<ArgPropType>(
  "children",
  "value",
  "textValue"
);

export type PlasmicStyleSelect__Option__OverridesType = {
  root?: Flex__<"div">;
};

export interface DefaultStyleSelect__OptionProps
  extends pp.BaseSelectOptionProps {
  isUnsetOption?: SingleBooleanChoiceArg<"isUnsetOption">;
}

const $$ = {};

function PlasmicStyleSelect__Option__RenderFunc(props: {
  variants: PlasmicStyleSelect__Option__VariantsArgs;
  args: PlasmicStyleSelect__Option__ArgsType;
  overrides: PlasmicStyleSelect__Option__OverridesType;
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
        path: "isSelected",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.isSelected,
      },
      {
        path: "isHighlighted",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.isHighlighted,
      },
      {
        path: "isDisabled",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.isDisabled,
      },
      {
        path: "isUnsetOption",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.isUnsetOption,
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

  const superContexts = {
    StyleSelect: React.useContext(SUPER__PlasmicStyleSelect.Context),
  };

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_plasmic_kit_design_system_deprecated_css.plasmic_tokens,
        plasmic_plasmic_kit_color_tokens_css.plasmic_tokens,
        sty.root,
        {
          [sty.rootisDisabled]: hasVariant($state, "isDisabled", "isDisabled"),
          [sty.rootisHighlighted]: hasVariant(
            $state,
            "isHighlighted",
            "isHighlighted"
          ),
          [sty.rootisSelected]: hasVariant($state, "isSelected", "isSelected"),
        }
      )}
    >
      {renderPlasmicSlot({
        defaultContents: "Option",
        value: args.children,
        className: classNames(sty.slotTargetChildren, {
          [sty.slotTargetChildrenisDisabled]: hasVariant(
            $state,
            "isDisabled",
            "isDisabled"
          ),
          [sty.slotTargetChildrenisHighlighted]: hasVariant(
            $state,
            "isHighlighted",
            "isHighlighted"
          ),
          [sty.slotTargetChildrenisSelected]: hasVariant(
            $state,
            "isSelected",
            "isSelected"
          ),
          [sty.slotTargetChildrenisUnsetOption]: hasVariant(
            $state,
            "isUnsetOption",
            "isUnsetOption"
          ),
        }),
      })}
    </div>
  ) as React.ReactElement | null;
}

function useBehavior<P extends pp.BaseSelectOptionProps>(
  props: P,
  ref: pp.SelectOptionRef
) {
  return pp.useSelectOption(
    PlasmicStyleSelect__Option,
    props,
    {
      isSelectedVariant: { group: "isSelected", variant: "isSelected" },
      isDisabledVariant: { group: "isDisabled", variant: "isDisabled" },
      isHighlightedVariant: {
        group: "isHighlighted",
        variant: "isHighlighted",
      },
      labelSlot: "children",
      root: "root",
      labelContainer: "labelContainer",
    },
    ref
  );
}

const PlasmicDescendants = {
  root: ["root"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicStyleSelect__Option__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicStyleSelect__Option__VariantsArgs;
    args?: PlasmicStyleSelect__Option__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicStyleSelect__Option__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicStyleSelect__Option__ArgsType,
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
          internalArgPropNames: PlasmicStyleSelect__Option__ArgProps,
          internalVariantPropNames: PlasmicStyleSelect__Option__VariantProps,
        }),
      [props, nodeName]
    );
    return PlasmicStyleSelect__Option__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicStyleSelect__Option";
  } else {
    func.displayName = `PlasmicStyleSelect__Option.${nodeName}`;
  }
  return func;
}

export const PlasmicStyleSelect__Option = Object.assign(
  // Top-level PlasmicStyleSelect__Option renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicStyleSelect__Option
    internalVariantProps: PlasmicStyleSelect__Option__VariantProps,
    internalArgProps: PlasmicStyleSelect__Option__ArgProps,

    useBehavior,
  }
);

export default PlasmicStyleSelect__Option;
/* prettier-ignore-end */
