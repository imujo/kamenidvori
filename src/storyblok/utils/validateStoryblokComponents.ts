import componentsJson from "@/storyblok/gen/components.storyblok.json";
import type { SbReactComponentsMap } from "@storyblok/react";
import { difference } from "remeda";
import { storyblokComponents } from "../config/storyblokComponents";

// const groupedComponents = groupBy(componentsJson.components, (component) =>
//   component.is_nestable ? "nestable" : "non_nestable"
// );

// const nestableComponents = groupedComponents.nestable?.map(
//   (component) => component.name
// ) || [];
// const nonNestableComponents = groupedComponents.non_nestable?.map(
//   (component) => component.name
// ) || [];

const allComponentNames = componentsJson.components.map(
  (component) => component.name
);

type SbComponentsOptions = {
  noThrow?: boolean;
};

export function validateStoryblokComponents(
  components: SbReactComponentsMap,
  options: SbComponentsOptions = { noThrow: false }
) {
  const componentKeys = Object.keys(components);
  const diff = difference(allComponentNames, componentKeys);
  const hasMissingComponents = diff.length > 0;

  if (hasMissingComponents) {
    const errorMessage = `The following Storyblok components are not defined in Storyblok provider: ${diff.join(
      ", "
    )}`;

    if (!!options?.noThrow) {
      console.error(errorMessage);
      return components;
    } else {
      throw new Error(errorMessage);
    }
  }

  return components;
}

type AllStoryblokComponents =
  (typeof storyblokComponents)[keyof typeof storyblokComponents];

export type AllStoryblokBlocks = Parameters<AllStoryblokComponents>[0]["blok"];
