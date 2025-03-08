"use client";

import Block from "@/components/Block.component";
import { Typography } from "@/components/Typography/Typography.component";
import type {
  TestimonialItemStoryblok,
  TestimonialsBlockStoryblok,
} from "@/storyblok/gen/component-types-sb";
import type { StoryblokComponentProps } from "@/storyblok/utils/storyblokComponentProps.type";
import { cn } from "@/utils/cn";
import useEmblaCarousel from "embla-carousel-react";

const testimonialLabels: Record<
  NonNullable<TestimonialItemStoryblok["source"]>,
  string
> = {
  google: "Google",
  trip_advisor: "TripAdvisor",
};

export default function TestimonialsBlock({
  blok,
}: StoryblokComponentProps<TestimonialsBlockStoryblok>) {
  const [emblaRef] = useEmblaCarousel();

  return (
    <Block blok={blok}>
      <div className="flex flex-col gap-12">
        <Typography.Heading2>{blok.title}</Typography.Heading2>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {blok.items?.map((testimonial, index) => {
              const initials = testimonial.author_name
                ?.split(" ")
                .map((name) => name[0])
                .join("")
                .slice(0, 2);

              return (
                <div
                  key={testimonial._uid}
                  className={cn("flex-[0_0_auto] min-w-0", {
                    "pl-4 md:pl-8": index !== 0,
                  })}
                >
                  <div className="bg-white p-6 rounded-3xl border border-gray-600 max-w-[340px]">
                    <Typography.Body3 className="mb-4">
                      {testimonial.text}
                    </Typography.Body3>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-gray-200 uppercase text-gray-800 flex items-center justify-center">
                        {initials}
                      </div>
                      <div>
                        <div className="text-sm font-semibold">
                          {testimonial.author_name}
                        </div>
                        {testimonial.source && (
                          <div className="text-sm text-gray-600">
                            {testimonialLabels[testimonial.source]}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Block>
  );
}
