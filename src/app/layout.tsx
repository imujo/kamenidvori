import Header from "@/components/header/Header";
import StoryblokProvider from "@/storyblok/components/StroyblokProvider";
import "./globals.css";
import Footer from "@/components/footer/Footer";

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
          <Footer />
        </body>
      </StoryblokProvider>
    </html>
  );
}
