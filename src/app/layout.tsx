import StoryblokProvider from "@/storyblok/components/StroyblokProvider";
import "./globals.css";
import Header from "@/components/Header.component";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <StoryblokProvider>
        <body>
          <Header />
          {children}
        </body>
      </StoryblokProvider>
    </html>
  );
}
