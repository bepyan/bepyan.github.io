import { ReactNode, useMemo } from 'react';

import { siteConfig } from '~/config';
import AuthorContacts from '../common/AuthorContacts';
import ExternalLink from '../common/ExternalLink';
import Hr from '../common/Hr';
import HeaderNav from '../HeaderNav';

export default function Layout({ children }: { children: ReactNode }) {
  const since = useMemo(() => {
    const year = new Date().getFullYear();
    if (siteConfig.since === year) {
      return year;
    }
    return `${siteConfig.since}-${year}`;
  }, []);

  return (
    <div className="mx-auto max-w-3xl px-4 lg:max-w-6xl lg:px-8">
      <HeaderNav />
      {/* --- */}
      <main className="relative pb-16">{children}</main>
      {/* --- */}
      <footer className="pb-8 text-sm text-gray-800 dark:text-gray-400">
        <Hr className="mb-8" />

        <div className="flex flex-col items-end space-y-1">
          <AuthorContacts />
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
