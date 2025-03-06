import { env } from "@/env";
import { Metadata } from "next/dist/types";
import localFont from "next/font/local";
import "./globals.css";
import StoryblokProvider from "./StoryblokProvider";

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
      <StoryblokProvider>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          {children}
        </body>
      </StoryblokProvider>
    </html>
  );
}
