import Link from "next/link";

export default function Header() {
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
      label: "Gallery",
      href: "/gallery",
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
    <div className="h-16 fixed top-0 left-0 right-0 z-50 bg-white w-full box-border flex flex-row items-center justify-between px-4">
      <Link href="/">Kameni dvori</Link>
      <div className="flex gap-4">
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
    </div>
  );
}
