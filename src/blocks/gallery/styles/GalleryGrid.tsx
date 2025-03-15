import Image from "next/image";

type GridPosition = {
  rowStart: number;
  rowEnd: number;
  colStart: number;
  colEnd: number;
};

type ImagePosition = {
  md: GridPosition;
  lg: GridPosition;
};

const imagePositions: ImagePosition[] = [
  {
    md: { rowStart: 1, rowEnd: 5, colStart: 1, colEnd: 6 },
    lg: { rowStart: 1, rowEnd: 4, colStart: 1, colEnd: 5 },
  },
  {
    md: { rowStart: 1, rowEnd: 5, colStart: 6, colEnd: 13 },
    lg: { rowStart: 1, rowEnd: 8, colStart: 5, colEnd: 9 },
  },
  {
    md: { rowStart: 5, rowEnd: 9, colStart: 1, colEnd: 4 },
    lg: { rowStart: 1, rowEnd: 9, colStart: 9, colEnd: 13 },
  },
  {
    md: { rowStart: 5, rowEnd: 9, colStart: 4, colEnd: 9 },
    lg: { rowStart: 4, rowEnd: 13, colStart: 1, colEnd: 5 },
  },
  {
    md: { rowStart: 5, rowEnd: 9, colStart: 9, colEnd: 13 },
    lg: { rowStart: 8, rowEnd: 13, colStart: 5, colEnd: 7 },
  },
  {
    md: { rowStart: 9, rowEnd: 13, colStart: 1, colEnd: 7 },
    lg: { rowStart: 8, rowEnd: 13, colStart: 7, colEnd: 9 },
  },
  {
    md: { rowStart: 9, rowEnd: 13, colStart: 7, colEnd: 13 },
    lg: { rowStart: 9, rowEnd: 13, colStart: 9, colEnd: 13 },
  },
];

type GalleryGridProps = {
  images: {
    src: string;
    alt: string;
  }[];
};

export default function GalleryGrid({ images }: GalleryGridProps) {
  return (
    <div className="md:grid flex flex-col lg:gap-8 gap-4 grid-cols-1 md:grid-cols-12 md:grid-rows-12 md:h-[150vh] lg:h-[80vh]">
      {images?.map((image, index) => {
        const position = imagePositions[index];

        return (
          <div
            key={index}
            className="relative overflow-hidden rounded-xl grid-item hover:scale-102 transition-all duration-300"
            style={
              {
                "--col-start-md": position?.md.colStart,
                "--col-end-md": position?.md.colEnd,
                "--row-start-md": position?.md.rowStart,
                "--row-end-md": position?.md.rowEnd,
                "--col-start-lg": position?.lg.colStart,
                "--col-end-lg": position?.lg.colEnd,
                "--row-start-lg": position?.lg.rowStart,
                "--row-end-lg": position?.lg.rowEnd,
              } as React.CSSProperties
            }
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={500}
              height={500}
              className="object-cover w-full md:h-full"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        );
      })}
    </div>
  );
}
