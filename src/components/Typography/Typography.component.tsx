import INTERNAL__Body1 from "./_Body1";
import INTERNAL__Body2 from "./_Body2";
import INTERNAL__Body3 from "./_Body3";
import INTERNAL__Heading1 from "./_Heading1";
import INTERNAL__Heading2 from "./_Heading2";
import INTERNAL__Heading3 from "./_Heading3";
import INTERNAL__Heading4 from "./_Heading4";
import INTERNAL__Heading5 from "./_Heading5";

export type GenericTypographyProps<TTag extends React.ElementType> = {
  as?: TTag;
} & React.ComponentPropsWithoutRef<TTag>;

export const Typography = {
  Heading1: INTERNAL__Heading1,
  Heading2: INTERNAL__Heading2,
  Heading3: INTERNAL__Heading3,
  Heading4: INTERNAL__Heading4,
  Heading5: INTERNAL__Heading5,
  Body1: INTERNAL__Body1,
  Body2: INTERNAL__Body2,
  Body3: INTERNAL__Body3,
};
