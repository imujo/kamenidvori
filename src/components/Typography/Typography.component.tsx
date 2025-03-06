import INTERNAL__Body1 from "./_Body1";
import INTERNAL__Heading1 from "./_Heading1";

export type GenericTypographyProps<TTag extends React.ElementType> = {
  as?: TTag;
} & React.ComponentPropsWithoutRef<TTag>;

export const Typography = {
  Heading1: INTERNAL__Heading1,
  Body1: INTERNAL__Body1,
};
