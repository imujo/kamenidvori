import StoryblokProvider from "@/storyblok/components/StroyblokProvider";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <StoryblokProvider>
        <body>{children}</body>
      </StoryblokProvider>
    </html>
  );
}
