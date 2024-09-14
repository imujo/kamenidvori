import componentsJson from "@/storyblok/components/components.kamenidvori.json";
import { SbReactComponentsMap } from "@storyblok/react";
import { difference } from "remeda";

const allComponents = componentsJson.components
  .filter((component) => component.is_nestable)
  .map((component) => component.name);

type SbComponentsOptions =
  | {
      noThrow?: boolean;
    }
  | undefined;

export function sbComponents(
  components: SbReactComponentsMap,
  options: SbComponentsOptions = { noThrow: false }
) {
  const componentKeys = Object.keys(components);

  const diff = difference(allComponents, componentKeys);
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
