import { useRouter } from 'next/router';

import HomeIcon from '~/components/icons/HomeIcon';
import InBox from '~/components/icons/InBox';
import InBoxStack from '~/components/icons/InBoxStack';

export default function useKBarAction() {
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
    // {
    //   id: 'blog',
    //   name: 'Blog',
    //   shortcut: ['B'],
    //   keywords: 'writing words',
    //   section: 'Pages',
    //   icon: <ArchiveBoxIcon width={18} />,
    //   perform: () => router.push('/blog'),
    // },
    {
      id: 'snippets',
      name: 'Code Snippets',
      shortcut: ['S'],
      keywords: 'code',
      section: 'Pages',
      icon: <InBox width={18} />,
      perform: () => router.push('/snippets'),
    },
    {
      id: 'archives',
      name: 'Archives',
      shortcut: ['A'],
      section: 'Pages',
      icon: <InBoxStack width={18} />,
      perform: () => router.push('/archives'),
    },
  ];
}
