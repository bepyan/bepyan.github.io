import { ReactNode, useMemo } from 'react';
import title from 'title';

import { siteConfig } from '~/config';
import ExternalLink from './common/ExternalLink';
import Hr from './common/Hr';
import HeaderNav from './HeaderNav';

export default function Layout({ children }: { children: ReactNode }) {
  const since = useMemo(() => {
    const year = new Date().getFullYear();
    if (siteConfig.since === year) {
      return year;
    }
    return `${siteConfig.since}-${year}`;
  }, []);

  return (
    <div className="mx-auto max-w-3xl px-4 lg:px-0">
      <HeaderNav />
      {/* --- */}
      <main className="relative pb-16">{children}</main>
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
