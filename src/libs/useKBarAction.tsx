import { Action } from 'kbar';
import { useRouter } from 'next/router';

import ContactsIcon from '~/components/common/ContactsIcon';
import ArchiveBoxIcon from '~/components/icons/ArchiveBoxIcon';
import HomeIcon from '~/components/icons/HomeIcon';
import InBoxIcon from '~/components/icons/InBoxIcon';
import InBoxStackIcon from '~/components/icons/InBoxStackIcon';
import { siteConfig } from '~/config';

export default function useKBarAction(): Action[] {
  const router = useRouter();

  return [
    {
      id: 'home',
      name: 'Home',
      shortcut: ['H'],
      keywords: 'profile',
      section: 'Pages',
      icon: <HomeIcon width={18} />,
      perform: () => router.push('/'),
    },
    {
      id: 'blog',
      name: 'Blog',
      shortcut: ['B'],
      keywords: 'writing words',
      section: 'Pages',
      icon: <ArchiveBoxIcon width={18} />,
      perform: () => router.push('/blog'),
    },
    {
      id: 'snippets',
      name: 'Code Snippets',
      shortcut: ['S'],
      keywords: 'code',
      section: 'Pages',
      icon: <InBoxIcon width={18} />,
      perform: () => router.push('/snippets'),
    },
    {
      id: 'archives',
      name: 'Archives',
      shortcut: ['A'],
      section: 'Pages',
      icon: <InBoxStackIcon width={18} />,
      perform: () => router.push('/archives'),
    },

    ...(Object.keys(siteConfig.author.contacts)
      .map((sns) => {
        const link = siteConfig.author.contacts[sns as keyof typeof siteConfig.author.contacts];
        if (!link) return;

        return {
          id: sns,
          name: sns,
          subtitle: link,
          section: 'Social',
          icon: <ContactsIcon width={18} contact={sns} />,
          perform: () => {
            window.open(link);
          },
        };
      })
      .filter(Boolean) as Action[]),
  ];
}
