// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: tXkSR39sgCDWSitZxC5xFV
// Component: W-rO7NZqPjZ

import * as React from "react";

import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  Flex as Flex__,
  hasVariant,
  PlasmicIcon as PlasmicIcon__,
  renderPlasmicSlot,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  useDollarState,
  useTrigger,
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";

import * as pp from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_plasmic_kit_color_tokens_css from "../plasmic_kit_q_4_color_tokens/plasmic_plasmic_kit_q_4_color_tokens.module.css"; // plasmic-import: 95xp9cYcv7HrNWpFWWhbcv/projectcss
import projectcss from "../PP__plasmickit_design_system.module.css"; // plasmic-import: tXkSR39sgCDWSitZxC5xFV/projectcss
import sty from "./PlasmicCheckbox.module.css"; // plasmic-import: W-rO7NZqPjZ/css

import CheckTrueIcon from "../plasmic_kit/PlasmicIcon__CheckTrue"; // plasmic-import: ckLkdbD6DMjvM/icon
import SquareMinussvgIcon from "../q_4_icons/icons/PlasmicIcon__SquareMinussvg"; // plasmic-import: 6a2Ojnos7/icon
import SquaresvgIcon from "../q_4_icons/icons/PlasmicIcon__Squaresvg"; // plasmic-import: zkj00JjZV/icon

createPlasmicElementProxy;

export type PlasmicCheckbox__VariantMembers = {
  noLabel: "noLabel";
  isDisabled: "isDisabled";
  isChecked: "isChecked";
  isIndeterminate: "isIndeterminate";
  medium: "medium";
  color: "red" | "green" | "blue" | "purple";
};
export type PlasmicCheckbox__VariantsArgs = {
  noLabel?: SingleBooleanChoiceArg<"noLabel">;
  isDisabled?: SingleBooleanChoiceArg<"isDisabled">;
  isChecked?: SingleBooleanChoiceArg<"isChecked">;
  isIndeterminate?: SingleBooleanChoiceArg<"isIndeterminate">;
  medium?: SingleBooleanChoiceArg<"medium">;
  color?: SingleChoiceArg<"red" | "green" | "blue" | "purple">;
};
type VariantPropType = keyof PlasmicCheckbox__VariantsArgs;
export const PlasmicCheckbox__VariantProps = new Array<VariantPropType>(
  "noLabel",
  "isDisabled",
  "isChecked",
  "isIndeterminate",
  "medium",
  "color"
);

export type PlasmicCheckbox__ArgsType = {
  children?: React.ReactNode;
  name?: string;
  value?: string;
  "aria-label"?: string;
  "aria-labelledby"?: string;
  onChange?: (isChecked: boolean) => void;
};
type ArgPropType = keyof PlasmicCheckbox__ArgsType;
export const PlasmicCheckbox__ArgProps = new Array<ArgPropType>(
  "children",
  "name",
  "value",
  "aria-label",
  "aria-labelledby",
  "onChange"
);

export type PlasmicCheckbox__OverridesType = {
  root?: Flex__<"div">;
  svg?: Flex__<"svg">;
  labelContainer?: Flex__<"div">;
};

export interface DefaultCheckboxProps extends pp.CheckboxProps {
  "aria-label"?: string;
  "aria-labelledby"?: string;
  onChange?: (isChecked: boolean) => void;
  medium?: SingleBooleanChoiceArg<"medium">;
  color?: SingleChoiceArg<"red" | "green" | "blue" | "purple">;
}

const $$ = {};

function PlasmicCheckbox__RenderFunc(props: {
  variants: PlasmicCheckbox__VariantsArgs;
  args: PlasmicCheckbox__ArgsType;
  overrides: PlasmicCheckbox__OverridesType;
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
        path: "noLabel",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.noLabel,
      },
      {
        path: "isDisabled",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.isDisabled,
      },
      {
        path: "isChecked",
        type: "writable",
        variableType: "boolean",

        valueProp: "isChecked",
        onChangeProp: "onChange",
      },
      {
        path: "isIndeterminate",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          $props.isIndeterminate,
      },
      {
        path: "medium",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.medium,
      },
      {
        path: "color",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.color,
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

  const [isRootFocusWithin, triggerRootFocusWithinProps] = useTrigger(
    "useFocusedWithin",
    {}
  );
  const [isRootNotFocusVisibleWithin, triggerRootNotFocusVisibleWithinProps] =
    useTrigger("useFocusVisibleWithin", {
      isTextInput: false,
    });
  const triggers = {
    focusWithinNotFocusVisibleWithin_root:
      isRootFocusWithin && !isRootNotFocusVisibleWithin,
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
          [sty.root___focusedWithin__notFocusVisibleWithin]:
            triggers.focusWithinNotFocusVisibleWithin_root,
          [sty.rootcolor_blue]: hasVariant($state, "color", "blue"),
          [sty.rootcolor_blue_medium]:
            hasVariant($state, "color", "blue") &&
            hasVariant($state, "medium", "medium"),
          [sty.rootcolor_blue_medium_isChecked]:
            hasVariant($state, "color", "blue") &&
            hasVariant($state, "medium", "medium") &&
            hasVariant($state, "isChecked", "isChecked"),
          [sty.rootcolor_blue_medium_isIndeterminate]:
            hasVariant($state, "color", "blue") &&
            hasVariant($state, "medium", "medium") &&
            hasVariant($state, "isIndeterminate", "isIndeterminate"),
          [sty.rootcolor_blue_medium_noLabel]:
            hasVariant($state, "color", "blue") &&
            hasVariant($state, "medium", "medium") &&
            hasVariant($state, "noLabel", "noLabel"),
          [sty.rootcolor_green]: hasVariant($state, "color", "green"),
          [sty.rootcolor_purple]: hasVariant($state, "color", "purple"),
          [sty.rootcolor_red]: hasVariant($state, "color", "red"),
          [sty.rootisChecked]: hasVariant($state, "isChecked", "isChecked"),
          [sty.rootisDisabled]: hasVariant($state, "isDisabled", "isDisabled"),
          [sty.rootisDisabled_color_blue_medium]:
            hasVariant($state, "color", "blue") &&
            hasVariant($state, "medium", "medium") &&
            hasVariant($state, "isDisabled", "isDisabled"),
          [sty.rootisDisabled_medium_color_green]:
            hasVariant($state, "color", "green") &&
            hasVariant($state, "medium", "medium") &&
            hasVariant($state, "isDisabled", "isDisabled"),
          [sty.rootisDisabled_medium_color_purple]:
            hasVariant($state, "color", "purple") &&
            hasVariant($state, "medium", "medium") &&
            hasVariant($state, "isDisabled", "isDisabled"),
          [sty.rootisDisabled_medium_color_red]:
            hasVariant($state, "color", "red") &&
            hasVariant($state, "medium", "medium") &&
            hasVariant($state, "isDisabled", "isDisabled"),
          [sty.rootisIndeterminate]: hasVariant(
            $state,
            "isIndeterminate",
            "isIndeterminate"
          ),
          [sty.rootmedium]: hasVariant($state, "medium", "medium"),
          [sty.rootmedium____focusedWithin__notFocusVisibleWithin]:
            hasVariant($state, "medium", "medium") &&
            triggers.focusWithinNotFocusVisibleWithin_root,
          [sty.rootmedium_color_green]:
            hasVariant($state, "color", "green") &&
            hasVariant($state, "medium", "medium"),
          [sty.rootmedium_color_green_isIndeterminate]:
            hasVariant($state, "color", "green") &&
            hasVariant($state, "medium", "medium") &&
            hasVariant($state, "isIndeterminate", "isIndeterminate"),
          [sty.rootmedium_color_green_noLabel]:
            hasVariant($state, "color", "green") &&
            hasVariant($state, "medium", "medium") &&
            hasVariant($state, "noLabel", "noLabel"),
          [sty.rootmedium_color_purple]:
            hasVariant($state, "color", "purple") &&
            hasVariant($state, "medium", "medium"),
          [sty.rootmedium_color_purple_isIndeterminate]:
            hasVariant($state, "color", "purple") &&
            hasVariant($state, "medium", "medium") &&
            hasVariant($state, "isIndeterminate", "isIndeterminate"),
          [sty.rootmedium_color_red]:
            hasVariant($state, "color", "red") &&
            hasVariant($state, "medium", "medium"),
          [sty.rootmedium_isChecked_color_green]:
            hasVariant($state, "color", "green") &&
            hasVariant($state, "medium", "medium") &&
            hasVariant($state, "isChecked", "isChecked"),
          [sty.rootmedium_isChecked_color_purple]:
            hasVariant($state, "color", "purple") &&
            hasVariant($state, "medium", "medium") &&
            hasVariant($state, "isChecked", "isChecked"),
          [sty.rootmedium_isChecked_color_red]:
            hasVariant($state, "color", "red") &&
            hasVariant($state, "medium", "medium") &&
            hasVariant($state, "isChecked", "isChecked"),
          [sty.rootmedium_isIndeterminate_color_red]:
            hasVariant($state, "color", "red") &&
            hasVariant($state, "medium", "medium") &&
            hasVariant($state, "isIndeterminate", "isIndeterminate"),
          [sty.rootmedium_noLabel_color_purple]:
            hasVariant($state, "color", "purple") &&
            hasVariant($state, "medium", "medium") &&
            hasVariant($state, "noLabel", "noLabel"),
          [sty.rootmedium_noLabel_color_red]:
            hasVariant($state, "color", "red") &&
            hasVariant($state, "medium", "medium") &&
            hasVariant($state, "noLabel", "noLabel"),
          [sty.rootnoLabel]: hasVariant($state, "noLabel", "noLabel"),
        }
      )}
      data-plasmic-trigger-props={[
        triggerRootFocusWithinProps,
        triggerRootNotFocusVisibleWithinProps,
      ]}
    >
      <PlasmicIcon__
        data-plasmic-name={"svg"}
        data-plasmic-override={overrides.svg}
        PlasmicIconType={
          hasVariant($state, "isIndeterminate", "isIndeterminate")
            ? SquareMinussvgIcon
            : hasVariant($state, "isChecked", "isChecked")
            ? CheckTrueIcon
            : SquaresvgIcon
        }
        className={classNames(projectcss.all, sty.svg, {
          [sty.svg___focusedWithin__notFocusVisibleWithin]:
            triggers.focusWithinNotFocusVisibleWithin_root,
          [sty.svgcolor_blue_medium]:
            hasVariant($state, "color", "blue") &&
            hasVariant($state, "medium", "medium"),
          [sty.svgcolor_blue_medium_isChecked]:
            hasVariant($state, "color", "blue") &&
            hasVariant($state, "medium", "medium") &&
            hasVariant($state, "isChecked", "isChecked"),
          [sty.svgcolor_green]: hasVariant($state, "color", "green"),
          [sty.svgcolor_purple]: hasVariant($state, "color", "purple"),
          [sty.svgcolor_red]: hasVariant($state, "color", "red"),
          [sty.svgisChecked]: hasVariant($state, "isChecked", "isChecked"),
          [sty.svgisIndeterminate]: hasVariant(
            $state,
            "isIndeterminate",
            "isIndeterminate"
          ),
          [sty.svgmedium]: hasVariant($state, "medium", "medium"),
          [sty.svgmedium____focusedWithin__notFocusVisibleWithin]:
            hasVariant($state, "medium", "medium") &&
            triggers.focusWithinNotFocusVisibleWithin_root,
          [sty.svgmedium_color_green]:
            hasVariant($state, "color", "green") &&
            hasVariant($state, "medium", "medium"),
          [sty.svgmedium_color_purple]:
            hasVariant($state, "color", "purple") &&
            hasVariant($state, "medium", "medium"),
          [sty.svgmedium_color_red]:
            hasVariant($state, "color", "red") &&
            hasVariant($state, "medium", "medium"),
          [sty.svgmedium_isChecked_color_green]:
            hasVariant($state, "color", "green") &&
            hasVariant($state, "medium", "medium") &&
            hasVariant($state, "isChecked", "isChecked"),
          [sty.svgmedium_isChecked_color_purple]:
            hasVariant($state, "color", "purple") &&
            hasVariant($state, "medium", "medium") &&
            hasVariant($state, "isChecked", "isChecked"),
          [sty.svgmedium_isChecked_color_red]:
            hasVariant($state, "color", "red") &&
            hasVariant($state, "medium", "medium") &&
            hasVariant($state, "isChecked", "isChecked"),
          [sty.svgnoLabel]: hasVariant($state, "noLabel", "noLabel"),
        })}
        role={"img"}
      />

      {(hasVariant($state, "noLabel", "noLabel") ? false : true) ? (
        <div
          data-plasmic-name={"labelContainer"}
          data-plasmic-override={overrides.labelContainer}
          className={classNames(projectcss.all, sty.labelContainer, {
            [sty.labelContainer___focusedWithin__notFocusVisibleWithin]:
              triggers.focusWithinNotFocusVisibleWithin_root,
            [sty.labelContainermedium]: hasVariant($state, "medium", "medium"),
            [sty.labelContainermedium_color_red]:
              hasVariant($state, "color", "red") &&
              hasVariant($state, "medium", "medium"),
            [sty.labelContainernoLabel]: hasVariant(
              $state,
              "noLabel",
              "noLabel"
            ),
          })}
        >
          {renderPlasmicSlot({
            defaultContents: "Enter some text",
            value: args.children,
            className: classNames(sty.slotTargetChildren, {
              [sty.slotTargetChildren___focusedWithin__notFocusVisibleWithin]:
                triggers.focusWithinNotFocusVisibleWithin_root,
              [sty.slotTargetChildrencolor_blue_medium]:
                hasVariant($state, "color", "blue") &&
                hasVariant($state, "medium", "medium"),
              [sty.slotTargetChildrenisChecked]: hasVariant(
                $state,
                "isChecked",
                "isChecked"
              ),
              [sty.slotTargetChildrenmedium]: hasVariant(
                $state,
                "medium",
                "medium"
              ),
              [sty.slotTargetChildrenmedium____focusedWithin__notFocusVisibleWithin]:
                hasVariant($state, "medium", "medium") &&
                triggers.focusWithinNotFocusVisibleWithin_root,
              [sty.slotTargetChildrenmedium_color_green]:
                hasVariant($state, "color", "green") &&
                hasVariant($state, "medium", "medium"),
              [sty.slotTargetChildrenmedium_color_purple]:
                hasVariant($state, "color", "purple") &&
                hasVariant($state, "medium", "medium"),
              [sty.slotTargetChildrenmedium_color_red]:
                hasVariant($state, "color", "red") &&
                hasVariant($state, "medium", "medium"),
              [sty.slotTargetChildrennoLabel]: hasVariant(
                $state,
                "noLabel",
                "noLabel"
              ),
            }),
          })}
        </div>
      ) : null}
    </Stack__>
  ) as React.ReactElement | null;
}

function useBehavior<P extends pp.CheckboxProps>(
  props: P,
  ref: pp.CheckboxRef
) {
  if (!("children" in props)) {
    props = {
      ...props,
      children: "Enter some text",
    };
  }

  return pp.useCheckbox<P, typeof PlasmicCheckbox>(
    PlasmicCheckbox,
    props,
    {
      isCheckedVariant: { group: "isChecked", variant: "isChecked" },
      isIndeterminateVariant: {
        group: "isIndeterminate",
        variant: "isIndeterminate",
      },
      isDisabledVariant: { group: "isDisabled", variant: "isDisabled" },
      noLabelVariant: { group: "noLabel", variant: "noLabel" },
      labelSlot: "children",
      root: "root",
    },
    ref
  );
}

const PlasmicDescendants = {
  root: ["root", "svg", "labelContainer"],
  svg: ["svg"],
  labelContainer: ["labelContainer"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  svg: "svg";
  labelContainer: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicCheckbox__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicCheckbox__VariantsArgs;
    args?: PlasmicCheckbox__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicCheckbox__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicCheckbox__ArgsType,
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
          internalArgPropNames: PlasmicCheckbox__ArgProps,
          internalVariantPropNames: PlasmicCheckbox__VariantProps,
        }),
      [props, nodeName]
    );
    return PlasmicCheckbox__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCheckbox";
  } else {
    func.displayName = `PlasmicCheckbox.${nodeName}`;
  }
  return func;
}

export const PlasmicCheckbox = Object.assign(
  // Top-level PlasmicCheckbox renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    svg: makeNodeComponent("svg"),
    labelContainer: makeNodeComponent("labelContainer"),

    // Metadata about props expected for PlasmicCheckbox
    internalVariantProps: PlasmicCheckbox__VariantProps,
    internalArgProps: PlasmicCheckbox__ArgProps,

    useBehavior,
  }
);

export default PlasmicCheckbox;
/* prettier-ignore-end */
