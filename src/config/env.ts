import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {},
  client: {
    NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN: z.string().min(1),
    NEXT_PUBLIC_IS_PREVIEW: z
      .string()
      .toLowerCase()
      .transform((value) => JSON.parse(value))
      .pipe(z.boolean()),
  },
  runtimeEnv: {
    NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN:
      process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN,
    NEXT_PUBLIC_IS_PREVIEW: process.env.NEXT_PUBLIC_IS_PREVIEW,
  },
});
