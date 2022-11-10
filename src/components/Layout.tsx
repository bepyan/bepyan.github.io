import Image from 'next/image';
import Link from 'next/link';
import { ReactNode, useMemo } from 'react';
import title from 'title';

import { siteConfig } from '~/config';
import ExternalLink from './common/ExternalLink';
import NavItem from './common/NavItem';
import ThemeSwitch from './ThemeSwitch';

export default function Layout({ children }: { children: ReactNode }) {
  const since = useMemo(() => {
    const year = new Date().getFullYear();
    if (siteConfig.since === year) {
      return year;
    }
    return `${siteConfig.since}-${year}`;
  }, []);

  return (
    <div className="mx-auto max-w-2xl px-4 sm:px-6 xl:max-w-3xl xl:px-0">
      <nav className="flex items-end pt-8 pb-16">
        <Link href="/" aria-label="Tailwind CSS Blog">
          <div className="mr-2 flex items-center justify-between">
            <Image
              src="/favicon.png"
              blurDataURL="/favicon.png"
              alt="logo"
              width={40}
              height={40}
              placeholder="blur"
              className="h-auto w-10 rounded-full"
            />
          </div>
        </Link>
        <div className="relative flex w-full items-center justify-between text-base leading-5 text-gray-800 dark:text-gray-400">
          <div>
            {siteConfig.menus.map((link) => (
              <NavItem key={link.label} href={link.path} text={link.label} />
            ))}
          </div>
          <ThemeSwitch />
        </div>
      </nav>
      {/* --- */}
      <main className="pb-16">{children}</main>
      {/* --- */}
      <footer className="text-sm text-gray-800 dark:text-gray-400">
        <hr className="border-1 mb-8 w-full border-gray-200 transition-all dark:border-gray-800"></hr>

        <div className="flex flex-col items-end space-y-1">
          <div className="flex space-x-2">
            {Object.keys(siteConfig.author.contacts).map((sns) => {
              const link =
                siteConfig.author.contacts[sns as keyof typeof siteConfig.author.contacts];

              return !link ? null : (
                <ExternalLink key={sns} href={link}>
                  {title(sns)}
                </ExternalLink>
              );
            })}
          </div>
          <p>
            <span>© {since} </span>
            <ExternalLink href={siteConfig.author.contacts.github}>{siteConfig.title}</ExternalLink>
            <span> Powered by </span>
            <ExternalLink href="https://nextjs.org/">Next.js</ExternalLink>
            <span>, </span>
            <ExternalLink href="https://pages.github.com/">Github Pages</ExternalLink>
          </p>
        </div>
        <div>
          <span></span>
        </div>
      </footer>
    </div>
  );
}
