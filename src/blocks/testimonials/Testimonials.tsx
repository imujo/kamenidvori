"use client";
import { Typography } from "@/components/Typography/Typography.component";
import type { TestimonialItemStoryblok } from "@/storyblok/gen/component-types-sb";
import { cn } from "@/utils/cn";
import useEmblaCarousel from "embla-carousel-react";

const testimonialLabels: Record<
  NonNullable<TestimonialItemStoryblok["source"]>,
  string
> = {
  google: "Google",
  trip_advisor: "TripAdvisor",
  booking: "Booking",
  airbnb: "Airbnb",
};

type TestimonialsProps = {
  title?: string;
  testimonialItems: TestimonialItemStoryblok[] | undefined;
};

export default function Testimonials({
  title,
  testimonialItems,
}: TestimonialsProps) {
  const [emblaRef] = useEmblaCarousel({
    dragFree: true,
  });

  return (
    <div className="flex flex-col gap-12">
      <Typography.Heading2>{title}</Typography.Heading2>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {testimonialItems?.map((testimonial, index) => {
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
  );
}
