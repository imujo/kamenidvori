import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";
import { storyblok } from "@/storyblok/storyblok";
import Richtext from "../RichText.component";

export default async function Footer() {
  const navigationLinks = [
    {
      label: "Accommodation",
      href: "/accommodation",
    },
    {
      label: "Activities",
      href: "/activities",
    },
    {
      label: "Restaurant",
      href: "/restaurant",
    },
    {
      label: "Products",
      href: "/products",
    },
    {
      label: "Contact",
      href: "/contact",
    },
    {
      label: "About",
      href: "/about",
    },
  ];

  const stories = await storyblok.getStories({
    content_type: "site_info",
  });

  const siteInfoStory = stories.data.stories[0];

  let facebookUrl = undefined;
  let instagramUrl = undefined;
  let text = undefined;
  let contactInfo = undefined;
  if (siteInfoStory && siteInfoStory.content.component === "site_info") {
    facebookUrl = siteInfoStory.content.facebook_link?.url;
    instagramUrl = siteInfoStory.content.instagram_link?.url;
    text = siteInfoStory.content.footer_text;
    contactInfo = siteInfoStory.content.footer_contact_info;
  }

  return (
    <footer className="bg-white pt-12 pb-8 px-4 mt-auto">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Link href="/" className="font-medium text-xl">
              Kameni dvori
            </Link>
            {text && (
              <div className="text-gray-600">
                <Richtext field={text} removeStyling />
              </div>
            )}
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h3 className="font-medium text-lg">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              {navigationLinks.map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  className="text-gray-600 hover:text-black transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="font-medium text-lg">Connect With Us</h3>
            <div className="flex space-x-4">
              {instagramUrl && (
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-black transition-colors duration-200"
                  aria-label="Instagram"
                >
                  <Instagram className="w-6 h-6" />
                </a>
              )}
              {facebookUrl && (
                <a
                  href={facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-black transition-colors duration-200"
                  aria-label="Facebook"
                >
                  <Facebook className="w-6 h-6" />
                </a>
              )}
            </div>
            {contactInfo && (
              <div className="text-gray-600">
                <Richtext field={contactInfo} removeStyling />
              </div>
            )}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-500">
          <p>© {new Date().getFullYear()} Kameni dvori. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
