import { useRegisterActions } from 'kbar';
import { useRouter } from 'next/router';

import ArchiveBoxIcon from '~/components/icons/ArchiveBoxIcon';

export default function useKBarPostAction() {
  const router = useRouter();

  useRegisterActions([
    {
      id: 'blog',
      name: 'Blog',
      shortcut: ['B'],
      keywords: 'writing words',
      section: 'Pages',
      icon: <ArchiveBoxIcon width={18} />,
      perform: () => router.push('/blog'),
    },
    // ...posts.map((post) => ({
    //   id: post.slug,
    //   name: post.title,
    //   subtitle: post.date,
    //   parent: 'blog',
    //   icon: <ArchiveBoxIcon width={18} />,
    //   perform: () => router.push(post.slug),
    // })),
  ]);
}
