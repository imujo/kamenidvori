import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    BASE_URL: z.string().min(1),
    SENDGRID_API_KEY: z.string().min(1),
    SENDGRID_EMAIL: z.string().min(1),
    STORYBLOK_WEBHOOK_SECRET: z.string().min(1),
  },
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
    BASE_URL: process.env.BASE_URL,
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
    SENDGRID_EMAIL: process.env.SENDGRID_EMAIL,
    STORYBLOK_WEBHOOK_SECRET: process.env.STORYBLOK_WEBHOOK_SECRET,
  },
});
