"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const Header = () => {
  const pathname = usePathname();

  const navItems = [
    { name: "ABOUT", path: "/" },
    { name: "PROJECT", path: "/projects" },
    { name: "BLOG", path: "/blog" },
  ];

  return (
    <motion.header className="sticky top-0 left-0 right-0 z-50 font-clash bg-white flex items-center h-18">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl">
            hyeinisfree.dev
          </Link>

          <nav className="flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`text-md font-medium transition-colors hover:text-gray-900 ${
                  pathname === item.path ? "text-gray-900" : "text-gray-500"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
