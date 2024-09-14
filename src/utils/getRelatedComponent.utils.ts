import { ISbStoryData } from "@storyblok/react";

function isComponent<T extends object>(
  component: unknown
): component is ISbStoryData<T> {
  return typeof component === "object";
}

export function getRelatedComponent<T extends object>(component: unknown) {
  if (!isComponent<T>(component)) {
    throw new Error(`resolve_relations missing: ${component}`);
  }

  return component;
}
