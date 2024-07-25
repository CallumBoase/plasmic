// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: tXkSR39sgCDWSitZxC5xFV
// Component: jW885tExwE

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

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_plasmic_kit_color_tokens_css from "../plasmic_kit_q_4_color_tokens/plasmic_plasmic_kit_q_4_color_tokens.module.css"; // plasmic-import: 95xp9cYcv7HrNWpFWWhbcv/projectcss
import projectcss from "../PP__plasmickit_design_system.module.css"; // plasmic-import: tXkSR39sgCDWSitZxC5xFV/projectcss
import sty from "./PlasmicChip.module.css"; // plasmic-import: jW885tExwE/css

import ClosesvgIcon from "../q_4_icons/icons/PlasmicIcon__Closesvg"; // plasmic-import: DhvEHyCHT/icon

createPlasmicElementProxy;

export type PlasmicChip__VariantMembers = {
  deletable: "deletable";
  size: "normalControl";
};
export type PlasmicChip__VariantsArgs = {
  deletable?: SingleBooleanChoiceArg<"deletable">;
  size?: SingleChoiceArg<"normalControl">;
};
type VariantPropType = keyof PlasmicChip__VariantsArgs;
export const PlasmicChip__VariantProps = new Array<VariantPropType>(
  "deletable",
  "size"
);

export type PlasmicChip__ArgsType = {
  children?: React.ReactNode;
};
type ArgPropType = keyof PlasmicChip__ArgsType;
export const PlasmicChip__ArgProps = new Array<ArgPropType>("children");

export type PlasmicChip__OverridesType = {
  root?: Flex__<"button">;
  closeIcon?: Flex__<"svg">;
};

export interface DefaultChipProps {
  children?: React.ReactNode;
  deletable?: SingleBooleanChoiceArg<"deletable">;
  size?: SingleChoiceArg<"normalControl">;
  className?: string;
}

const $$ = {};

function PlasmicChip__RenderFunc(props: {
  variants: PlasmicChip__VariantsArgs;
  args: PlasmicChip__ArgsType;
  overrides: PlasmicChip__OverridesType;
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
        path: "deletable",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.deletable,
      },
      {
        path: "size",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.size,
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
      as={"button"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.button,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_plasmic_kit_color_tokens_css.plasmic_tokens,
        sty.root,
        {
          [sty.rootdeletable]: hasVariant($state, "deletable", "deletable"),
          [sty.rootsize_normalControl]: hasVariant(
            $state,
            "size",
            "normalControl"
          ),
        }
      )}
    >
      {renderPlasmicSlot({
        defaultContents: (
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__cySel
            )}
          >
            {"Chip"}
          </div>
        ),
        value: args.children,
        className: classNames(sty.slotTargetChildren, {
          [sty.slotTargetChildrendeletable]: hasVariant(
            $state,
            "deletable",
            "deletable"
          ),
          [sty.slotTargetChildrensize_normalControl]: hasVariant(
            $state,
            "size",
            "normalControl"
          ),
        }),
      })}
      {(hasVariant($state, "deletable", "deletable") ? true : false) ? (
        <ClosesvgIcon
          data-plasmic-name={"closeIcon"}
          data-plasmic-override={overrides.closeIcon}
          className={classNames(projectcss.all, sty.closeIcon, {
            [sty.closeIcondeletable]: hasVariant(
              $state,
              "deletable",
              "deletable"
            ),
          })}
          role={"img"}
        />
      ) : null}
    </Stack__>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "closeIcon"],
  closeIcon: ["closeIcon"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "button";
  closeIcon: "svg";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicChip__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicChip__VariantsArgs;
    args?: PlasmicChip__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicChip__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicChip__ArgsType,
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
          internalArgPropNames: PlasmicChip__ArgProps,
          internalVariantPropNames: PlasmicChip__VariantProps,
        }),
      [props, nodeName]
    );
    return PlasmicChip__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicChip";
  } else {
    func.displayName = `PlasmicChip.${nodeName}`;
  }
  return func;
}

export const PlasmicChip = Object.assign(
  // Top-level PlasmicChip renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    closeIcon: makeNodeComponent("closeIcon"),

    // Metadata about props expected for PlasmicChip
    internalVariantProps: PlasmicChip__VariantProps,
    internalArgProps: PlasmicChip__ArgProps,
  }
);

export default PlasmicChip;
/* prettier-ignore-end */
