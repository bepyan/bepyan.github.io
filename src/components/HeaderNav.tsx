import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { siteConfig } from '~/config';
import NavItem from './common/NavItem';
import ThemeSwitch from './ThemeSwitch';

export default function HeaderNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = '';
    } else {
      setIsMenuOpen(true);
      document.body.style.overflow = 'hidden';
    }
  };

  return (
    <nav className="relative flex w-full select-none items-end pt-8 pb-12 text-gray-800 dark:text-gray-400">
      {/* PC */}
      <div className="hidden items-end sm:flex">
        <NavItem href="/" className="mr-2">
          <Image
            src="/favicon.png"
            blurDataURL="/favicon.png"
            alt="logo"
            width={40}
            height={40}
            placeholder="blur"
            className="block h-auto"
          />
        </NavItem>
        {siteConfig.menus.map((link) => (
          <NavItem key={link.label} href={link.path} className="px-3 py-1.5">
            {link.label}
          </NavItem>
        ))}
      </div>
      {/* MW */}
      <div className="flex sm:hidden">
        <button onClick={toggleMenu}>
          <Image
            src="/favicon.png"
            blurDataURL="/favicon.png"
            alt="logo"
            width={40}
            height={40}
            placeholder="blur"
            className="block h-auto"
          />
        </button>
        {isMenuOpen && (
          <ul className="fixed top-[108px] z-50 flex h-full w-full flex-col bg-gray-100 dark:bg-gray-900">
            {siteConfig.menus.map((link) => (
              <Link
                key={link.label}
                href={link.path}
                className="mr-8 border-b border-gray-200 py-4 font-semibold dark:border-gray-700 dark:text-gray-200"
              >
                {link.label}
              </Link>
            ))}
          </ul>
        )}
      </div>

      <div className="ml-auto mb-1">
        <ThemeSwitch />
      </div>
    </nav>
  );
}
