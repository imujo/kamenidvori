import componentsJson from "@/storyblok/components/components.kamenidvori.json";

export const getResolveRelations = () => {
  const resolve_relations = [];
  for (const component of componentsJson.components) {
    const componentProps = Object.entries(component.schema).map(
      ([key, value]) => ({ name: key, ...value })
    );

    for (const prop of componentProps) {
      if (prop.is_reference_type) {
        resolve_relations.push(`${component.name}.${prop.name}`);
      }
    }
  }
  return resolve_relations;
};
