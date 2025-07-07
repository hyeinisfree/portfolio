'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const Header = () => {
  const pathname = usePathname();

  const navItems = [
    { name: 'ABOUT', path: '/#about-me', type: 'internal' },
    { name: 'WORK', path: '/works', type: 'internal' },
    { name: 'PROJECT', path: '/projects', type: 'internal' },
    { name: 'BLOG', path: 'https://hyeinisfree.tistory.com', type: 'external' },
  ];

  return (
    <motion.header className="sticky top-0 left-0 right-0 z-50 font-clash bg-white flex items-center h-[var(--header-height)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-base md:text-xl">
            HYEINISFREE
          </Link>
          <div className="hidden md:block">
            <nav className="flex space-x-8 text-base">
              {navItems.map((item) =>
                item.type === 'external' ? (
                  <a
                    key={item.path}
                    href={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-gray-900 text-gray-500"
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.path}
                    href={item.path}
                    className={`transition-colors hover:text-gray-900 ${
                      pathname === item.path ? 'text-gray-900' : 'text-gray-500'
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              )}
            </nav>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
