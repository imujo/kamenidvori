import Image from "next/image";
import { Typography } from "@/components/Typography/Typography.component";
import Link from "next/link";

export type ListItemProps = {
  title?: string;
  subtitle?: string;
  image?: {
    src: string;
    alt: string;
  };
  link?: {
    url: string;
    target?: "_blank" | "_self";
  };
  showViewMore?: boolean;
};

export default function ListItem({
  title,
  subtitle,
  image,
  link,
  showViewMore,
}: ListItemProps) {
  const isInfoVisible = title || subtitle;

  const ItemContent = () => (
    <>
      {image && (
        <Image
          src={image.src}
          alt={image.alt}
          className="object-cover"
          width={1920}
          height={1080}
        />
      )}
      {isInfoVisible && (
        <>
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white z-10">
            {title && <Typography.Body1>{title}</Typography.Body1>}
            {subtitle && <Typography.Body3>{subtitle}</Typography.Body3>}
            {showViewMore && (
              <Typography.Body3 className="mt-2  opacity-100">
                View More
              </Typography.Body3>
            )}
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 from-0% via-black/20 via-40% to-transparent to-60%" />
        </>
      )}
    </>
  );

  return (
    <li className="relative h-fit w-full rounded-xl overflow-clip hover:scale-[102%] transition-all duration-300 hover:shadow-lg">
      {link ? (
        <Link href={link.url} target={link.target}>
          <ItemContent />
        </Link>
      ) : (
        <ItemContent />
      )}
    </li>
  );
}
