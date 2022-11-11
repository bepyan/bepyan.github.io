import Image from 'next/image';
import { ReactNode, useMemo } from 'react';
import title from 'title';

import { siteConfig } from '~/config';
import ExternalLink from './common/ExternalLink';
import Hr from './common/Hr';
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
      <nav className="flex w-full items-end pt-8 pb-12 text-gray-800 dark:text-gray-400">
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
        <div className="ml-auto">
          <ThemeSwitch />
        </div>
      </nav>
      {/* --- */}
      <main className="pb-16">{children}</main>
      {/* --- */}
      <footer className="pb-8 text-sm text-gray-800 dark:text-gray-400">
        <Hr className="mb-8" />

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
      </footer>
    </div>
  );
}
