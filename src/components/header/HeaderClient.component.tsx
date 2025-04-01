"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Facebook, Instagram } from "lucide-react";
import Image from "next/image";
type HeaderClientProps = {
  instagramUrl?: string;
  facebookUrl?: string;
};

export default function HeaderClient({
  facebookUrl,
  instagramUrl,
}: HeaderClientProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkIfMobile();

    // Add event listener
    window.addEventListener("resize", checkIfMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigationTabs = [
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

  return (
    <header className="h-16 fixed top-0 left-0 right-0 z-50 bg-white w-full box-border flex flex-row items-center justify-between px-4">
      <Link href="/" className="font-medium">
        <Image src="/logo.png" alt="Kameni dvori" width={200} height={200} />
      </Link>
      <div className="hidden md:flex gap-4">
        {navigationTabs.map((tab, i) => (
          <Link
            key={i}
            href={tab.href}
            className="hover:text-black text-gray-700 transition-all duration-200 font-medium"
          >
            {tab.label}
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-3">
        {instagramUrl && (
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-black transition-all duration-200"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
        )}
        {facebookUrl && (
          <a
            href={facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-black transition-all duration-200"
            aria-label="Facebook"
          >
            <Facebook className="w-5 h-5" />
          </a>
        )}
        <button
          className="md:hidden flex justify-center items-center w-8 h-8"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6 text-gray-800 transition-all duration-300" />
          ) : (
            <Menu className="w-6 h-6 text-gray-800 transition-all duration-300" />
          )}
        </button>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-16 left-0 right-0 bg-white shadow-lg z-40">
          <div className="flex flex-col py-4">
            {navigationTabs.map((tab, i) => (
              <Link
                key={i}
                href={tab.href}
                className="hover:text-black text-gray-700 transition-all duration-200 font-medium py-3 px-4"
                onClick={() => setIsMenuOpen(false)}
              >
                {tab.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
