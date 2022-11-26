import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { siteConfig } from '~/config';
import { $ } from '~/libs/core';
import useDelayedRender from '~/libs/useDelayedRender';
import NavItem from './common/NavItem';
import ThemeSwitch from './ThemeSwitch';

export default function HeaderNav() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { mounted: isMenuMounted, rendered: isMenuRendered } = useDelayedRender(isMenuOpen, {
    enterDelay: 20,
    exitDelay: 300,
  });

  const toggleMenu = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = '';
    } else {
      setIsMenuOpen(true);
      document.body.style.overflow = 'hidden';
    }
  };

  useEffect(() => {
    return function cleanup() {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <nav className="flex w-full select-none items-end pt-8 pb-12 text-gray-800 dark:text-gray-400">
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
        {isMenuMounted && (
          <ul
            className={$(
              'absolute inset-x-0 top-[108px] -bottom-4 z-50 flex flex-col bg-gray-100 px-6 transition-all dark:bg-gray-850',
              isMenuRendered ? 'opacity-100' : 'opacity-0',
            )}
          >
            {[{ label: 'Home', path: '/' }, ...siteConfig.menus].map((link, i) => (
              <Link
                key={link.label}
                href={link.path}
                className={$(
                  'border-b border-gray-200 py-4 font-semibold transition-all dark:border-gray-700',
                  isMenuRendered ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0',
                  router.asPath === link.path ? 'text-yellow-400' : 'dark:text-gray-200',
                )}
                style={{ transitionDelay: `${150 + i * 25}ms` }}
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
