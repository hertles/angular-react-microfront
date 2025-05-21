import React, { useEffect, useMemo, useRef } from "react";
import "zone.js";
import type { Functions, NonFunctions } from "../../types/functions.ts";
import type { AnyObject } from "../../types/common.ts";
import { objectEntries, objectFromEntries } from "../../utils/typeHelpers.ts";

interface AngularComponentWrapperProps<ComponentProps extends AnyObject> {
  elementName: string;
  loadRemote: () => void;
  inputs: NonFunctions<ComponentProps>;
  outputs: Functions<ComponentProps>;
}

export default function AngularComponentWrapper<
  ComponentProps extends AnyObject
>({
  elementName,
  loadRemote,
  inputs,
  outputs,
}: AngularComponentWrapperProps<ComponentProps>) {
  const elementRef = useRef<HTMLElement | null>(null);
  const loaded = useRef(false);

  useEffect(() => {
    if (!loaded.current) {
      loadRemote();
      loaded.current = true;
    }
  }, [loadRemote]);

  const outputEventListeners = useMemo(
    () =>
      objectFromEntries(
        objectEntries(outputs).map(([key, outputFn]) => [
          key as keyof ElementEventMap,
          (event: Event) => {
            if (event instanceof CustomEvent) {
              outputFn(event.detail);
            }
          },
        ])
      ),
    [outputs]
  );

  useEffect(() => {
    const el = elementRef.current;
    if (el) {
      objectEntries(outputEventListeners).forEach(([key, outputFn]) => {
        el.addEventListener(key, outputFn);
      });
    }

    return () => {
      if (el) {
        objectEntries(outputEventListeners).forEach(([key, outputFn]) => {
          el.removeEventListener(key, outputFn);
        });
      }
    };
  }, []);

  return React.createElement(elementName, { ...inputs, ref: elementRef });
}
