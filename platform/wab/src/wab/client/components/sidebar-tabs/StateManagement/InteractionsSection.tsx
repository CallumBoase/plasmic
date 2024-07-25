// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import { useSignalListener } from "@/wab/commons/components/use-signal-listener";
import { assert, ensure, spawn, unexpected } from "@/wab/shared/common";
import {
  Component,
  EventHandler,
  isKnownEventHandler,
  isKnownVarRef,
  TplComponent,
  TplTag,
} from "@/wab/shared/model/classes";
import { Popover } from "antd";
import Select, { RefSelectProps } from "antd/lib/select";
import { remove, uniqBy } from "lodash";
import { observer } from "mobx-react";
import * as React from "react";
import { useState } from "react";

import {
  extractReferencedParam,
  isRealCodeExpr,
} from "@/wab/shared/core/exprs";

import { HighlightInteractionRequest } from "@/wab/shared/code-components/code-components";

import { PropEditorRow } from "@/wab/client/components/sidebar-tabs/PropEditorRow";
import { SidebarSection } from "@/wab/client/components/sidebar/SidebarSection";
import { TplExpsProvider } from "@/wab/client/components/style-controls/StyleComponent";
import {
  IconLinkButton,
  useOnIFrameMouseDown,
} from "@/wab/client/components/widgets";
import { Icon } from "@/wab/client/components/widgets/Icon";
import PlusIcon from "@/wab/client/plasmic/plasmic_kit/PlasmicIcon__Plus";
import { DefaultInteractionsSectionProps } from "@/wab/client/plasmic/plasmic_kit_state_management/PlasmicInteractionsSection";
import { mkDefaultInteraction } from "@/wab/client/state-management/interactions-meta";
import { StudioCtx, useStudioCtx } from "@/wab/client/studio-ctx/StudioCtx";
import { ViewCtx } from "@/wab/client/studio-ctx/view-ctx";
import { TutorialEventsType } from "@/wab/client/tours/tutorials/tutorials-events";
import { ensureBaseVariantSetting } from "@/wab/shared/VariantTplMgr";
import {
  EventHandlerKeyType,
  getAllEventHandlerOptions,
  getAllEventHandlersForTpl,
  getAlwaysVisibleEventHandlerKeysForTpl,
  getDisplayNameOfEventHandlerKey,
  getEventHandlerByEventKey,
  getIdNameOfEventHandlerKey,
  getNameOfEventHandlerKey,
  isEventHandlerKeyForAttr,
  isEventHandlerKeyForParam,
  setEventHandlerByEventKey,
} from "@/wab/shared/core/tpls";
import { computeDefinedIndicator } from "@/wab/shared/defined-indicator";

export interface InteractionsSectionProps
  extends DefaultInteractionsSectionProps {
  component: Component;
  tpl: TplTag | TplComponent;
  sc: StudioCtx;
  vc: ViewCtx;
  expsProvider: TplExpsProvider;
}

function InteractionsSection_(props: InteractionsSectionProps) {
  const { sc, vc, component, tpl, expsProvider } = props;

  const [highlight, setHighlightRequest] = useState<
    HighlightInteractionRequest | undefined
  >(undefined);

  useSignalListener(sc.highlightInteractionRequested, (request) => {
    setHighlightRequest(request);
  });

  const interactionsSectionCtx = React.useMemo(
    () => ({
      highlightRequest: highlight,
    }),
    [highlight]
  );

  function handleAdd(eventHandlerKey: EventHandlerKeyType) {
    const eventHandler = getEventHandlerByEventKey(
      component,
      tpl,
      eventHandlerKey
    );
    if (!eventHandler) {
      const newEventHandler = new EventHandler({ interactions: [] });
      newEventHandler.interactions.push(
        mkDefaultInteraction(newEventHandler, component)
      );
      spawn(
        sc.change(({ success }) => {
          setEventHandlerByEventKey(tpl, eventHandlerKey, newEventHandler);
          return success();
        })
      );
    }
    sc.newlyAddedEventHandlerKey = eventHandlerKey;
  }

  return (
    <SidebarSection
      id="component-interactions-section"
      title="Interactions"
      controls={
        <AddHandlerFunctionButton
          tpl={tpl}
          onSelect={(eventHandlerKey) => {
            sc.tourActionEvents.dispatch({
              type: TutorialEventsType.SelectedHandler,
            });

            handleAdd(eventHandlerKey);
          }}
        />
      }
    >
      {uniqBy(
        [
          ...getAllEventHandlersForTpl(component, tpl, {
            omitFuncTypeEventHandlers: true,
          }),
          ...getAlwaysVisibleEventHandlerKeysForTpl(tpl),
        ],
        ({ eventHandlerKey }) =>
          isEventHandlerKeyForAttr(eventHandlerKey)
            ? eventHandlerKey.attr
            : isEventHandlerKeyForParam(eventHandlerKey)
            ? eventHandlerKey.param
            : unexpected(
                `event handler not supported for interactions section ${eventHandlerKey}`
              )
      ).map(({ eventHandlerKey, expr }) => {
        const effectiveVs = expsProvider.effectiveVs();

        const attrSource = isEventHandlerKeyForAttr(eventHandlerKey)
          ? effectiveVs.getAttrSource(eventHandlerKey.attr)
          : isEventHandlerKeyForParam(eventHandlerKey)
          ? effectiveVs.getArgSource(eventHandlerKey.param)
          : undefined;

        const defined = computeDefinedIndicator(
          vc.site,
          vc.currentComponent(),
          attrSource,
          expsProvider.targetIndicatorCombo
        );

        return (
          <PropEditorRow
            viewCtx={vc}
            tpl={tpl}
            label={getDisplayNameOfEventHandlerKey(eventHandlerKey, { tpl })}
            attr={getNameOfEventHandlerKey(eventHandlerKey)}
            definedIndicator={defined}
            disableDynamicValue
            disableFallback
            onDelete={() =>
              spawn(
                sc.change(({ success }) => {
                  const baseVs = ensureBaseVariantSetting(component, tpl);
                  if (isEventHandlerKeyForAttr(eventHandlerKey)) {
                    delete baseVs.attrs[eventHandlerKey.attr];
                  } else if (isEventHandlerKeyForParam(eventHandlerKey)) {
                    const arg = baseVs.args.find(
                      (iarg) => iarg.param === eventHandlerKey.param
                    );
                    assert(
                      arg,
                      `tpl should have an event handler named ${getDisplayNameOfEventHandlerKey(
                        eventHandlerKey,
                        { tpl }
                      )}`
                    );
                    remove(baseVs.args, arg);
                  } else {
                    unexpected(
                      `event handler not supported for interactions section ${eventHandlerKey}`
                    );
                  }
                  return success();
                })
              )
            }
            onChange={(newExpr) =>
              spawn(
                sc.change(({ success }) => {
                  if (!newExpr) {
                    const newEventHandler = new EventHandler({
                      interactions: [],
                    });
                    setEventHandlerByEventKey(
                      tpl,
                      eventHandlerKey,
                      newEventHandler
                    );
                  } else if (isKnownVarRef(newExpr)) {
                    const param = extractReferencedParam(component, newExpr);
                    if (!isKnownVarRef(expr)) {
                      assert(
                        param,
                        `param not found for varRef: ${newExpr.variable.name}`
                      );
                      setEventHandlerByEventKey(tpl, eventHandlerKey, newExpr);
                    } else {
                      const newEventHandler = new EventHandler({
                        interactions: [],
                      });
                      setEventHandlerByEventKey(
                        tpl,
                        eventHandlerKey,
                        newEventHandler
                      );
                    }
                  } else if (
                    isKnownEventHandler(newExpr) ||
                    isRealCodeExpr(newExpr)
                  ) {
                    setEventHandlerByEventKey(tpl, eventHandlerKey, newExpr);
                  } else {
                    assert(false, "unexpected expr type for event handler");
                  }
                  return success();
                })
              )
            }
            expr={expr}
            ccContextData={interactionsSectionCtx}
            propType={{
              type: "interaction",
              highlightOnMount: (_, ctx: typeof interactionsSectionCtx) =>
                ctx.highlightRequest,
              forceOpen: (_, ctx: typeof interactionsSectionCtx) =>
                !!ctx.highlightRequest,
              eventHandlerKey: eventHandlerKey,
            }}
          />
        );
      })}
    </SidebarSection>
  );
}

const InteractionsSection = observer(InteractionsSection_);
export default InteractionsSection;

const AddHandlerFunctionButton = observer(
  function AddHandlerFunctionButton(props: {
    tpl: TplTag | TplComponent;
    onSelect: (val: EventHandlerKeyType) => void;
  }) {
    const { tpl, onSelect } = props;
    const options = getAllEventHandlerOptions(tpl);
    const [searchValue, setSearchValue] = React.useState<string | undefined>(
      undefined
    );
    const [showing, setShowing] = React.useState(false);
    const selectRef = React.useRef<RefSelectProps>(null);
    useOnIFrameMouseDown(() => {
      setShowing(false);
    });
    const sc = useStudioCtx();
    return (
      <Popover
        trigger={["click"]}
        onOpenChange={(visible) => {
          setShowing(visible);
          setSearchValue(undefined);
          if (visible) {
            selectRef.current?.focus();
            sc.tourActionEvents.dispatch({
              type: TutorialEventsType.AddedInteraction,
            });
          }
        }}
        overlayClassName="ant-popover--tight"
        open={
          showing ||
          !!sc.onboardingTourState.flags.keepHandlerFunctionOptionsVisible
        }
        placement={"left"}
        destroyTooltipOnHide
        content={
          <Select
            id="interactions-select"
            showSearch={true}
            searchValue={searchValue}
            onSearch={(val) => setSearchValue(val)}
            onSelect={(val) => {
              const eventHandlerKey = ensure(
                options.find((opt) => val === getIdNameOfEventHandlerKey(opt)),
                "selected value should have an option with the same name"
              );
              onSelect(eventHandlerKey);
              setShowing(false);
            }}
            onBlur={() => setShowing(false)}
            style={{
              width: 200,
            }}
            autoFocus
            bordered={false}
            ref={selectRef}
            placeholder="Search or enter any attribute"
            open
          >
            {options.map((opt) => (
              <Select.Option
                id={`interactions-select-opt-${getIdNameOfEventHandlerKey(
                  opt
                )}`}
                key={getIdNameOfEventHandlerKey(opt)}
                value={getIdNameOfEventHandlerKey(opt)}
              >
                {getDisplayNameOfEventHandlerKey(opt, { tpl })}
              </Select.Option>
            ))}
          </Select>
        }
      >
        <IconLinkButton data-test-id="add-interaction">
          <Icon icon={PlusIcon} />
        </IconLinkButton>
      </Popover>
    );
  }
);
