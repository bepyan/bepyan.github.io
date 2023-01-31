import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { siteConfig } from '~/config';
import { $ } from '~/libs/core';
import useDelayedRender from '~/libs/useDelayedRender';

import NavItem from '../common/NavItem';
import LogoIcon from '../icons/LogoIcon';
import KBarButton from '../KBarButton';
import ThemeSwitch from '../ThemeSwitch';

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
      document.body.classList.remove('overflow-hidden');
    } else {
      setIsMenuOpen(true);
      document.body.classList.add('overflow-hidden');
    }
  };

  const isActiveNav = (navPath: string) => {
    if (navPath === '/') return router.asPath === navPath;

    return router.asPath.startsWith(navPath);
  };

  useEffect(() => {
    return function cleanup() {
      document.body.classList.remove('overflow-hidden');
    };
  }, []);

  return (
    <nav className="text-secondary flex w-full select-none items-end pt-8 pb-12">
      {/* PC */}
      <div className="hidden items-end sm:flex">
        <NavItem href="/" className="mr-2">
          <LogoIcon width={40} />
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
          <LogoIcon width={40} />
        </button>
        {isMenuMounted && (
          <ul
            className={$(
              'bg-primary absolute inset-x-0 top-[108px] -bottom-4 z-50 flex flex-col px-6 transition-all',
              isMenuRendered ? 'opacity-100' : 'opacity-0',
            )}
          >
            {[{ label: 'Home', path: '/' }, ...siteConfig.menus].map((link, i) => (
              <Link
                key={link.label}
                href={link.path}
                className={$(
                  'border-b border-neutral-200 py-4 font-semibold transition-all dark:border-neutral-700',
                  isMenuRendered ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0',
                  isActiveNav(link.path) ? 'text-yellow-400' : 'text-primary',
                )}
                style={{ transitionDelay: `${150 + i * 25}ms` }}
              >
                {link.label}
              </Link>
            ))}
          </ul>
        )}
      </div>
      <div className="ml-auto flex items-center gap-2">
        <KBarButton />
        <ThemeSwitch />
      </div>
    </nav>
  );
}
