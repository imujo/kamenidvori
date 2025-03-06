import { Button } from "@/components/Button.component";
import { Typography } from "@/components/Typography/Typography.component";
import Link from "next/link";

type ListSectionInfoProps = {
  title?: string;
  description?: string;
  button?: {
    label: string;
    link: {
      url: string;
      target?: "_blank" | "_self";
    };
  };
};

export default function ListSectionInfo({
  title,
  button,
  description,
}: ListSectionInfoProps) {
  return (
    <div className="flex md:flex-row flex-col justify-between gap-4 mb-12">
      {title && (
        <div className="flex-1">
          <Typography.Heading2>{title}</Typography.Heading2>
        </div>
      )}
      <div className="md:max-w-1/3">
        {description && (
          <Typography.Body3 className="mb-4 opacity-75">
            {description}
          </Typography.Body3>
        )}
        {button && (
          <Link href={button.link.url} target={button.link.target}>
            <Button variant="ghost">{button.label}</Button>
          </Link>
        )}
      </div>
    </div>
  );
}
