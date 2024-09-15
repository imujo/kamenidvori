import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import {
  storyblokInit,
  apiPlugin,
  StoryblokBridgeLoader,
} from "@storyblok/react/rsc";
import { env } from "@/env";
import StoryblokProvider from "./StoryblokProvider";
import { getResolveRelations } from "@/utils/storyblok/getResolveRelations.utils";

storyblokInit({
  accessToken: env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: "Kameni Dvori",
    template: `%s - Kameni Dvori`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  if (env.NEXT_PUBLIC_IS_PREVIEW) {
    return (
      <StoryblokProvider>
        <html lang="en">
          <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
          >
            {children}
          </body>
        </html>
      </StoryblokProvider>
    );
  }

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
      <StoryblokBridgeLoader
        options={{
          resolveRelations: getResolveRelations(),
        }}
      />
    </html>
  );
}
