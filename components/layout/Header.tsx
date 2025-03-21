"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  const navItems = [
    { name: "ABOUT", path: "/" },
    { name: "PROJECT", path: "/projects" },
    { name: "BLOG", path: "/blog" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="font-clash text-xl">
            hyeinisfree.dev
          </Link>

          <nav className="flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`font-clash text-md font-medium transition-colors hover:text-gray-900 ${
                  pathname === item.path ? "text-gray-900" : "text-gray-500"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
