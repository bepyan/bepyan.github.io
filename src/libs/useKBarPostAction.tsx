import { Priority, useRegisterActions } from 'kbar';
import { useRouter } from 'next/router';

import ArchiveBoxIcon from '~/components/icons/ArchiveBoxIcon';
import BookIcon from '~/components/icons/BookIcon';
import InBox from '~/components/icons/InBox';
import TagIcon from '~/components/icons/TagIcon';
import { posts, serizes, snippets, tags } from '~/constants/dataset';

export default function useKBarPostAction() {
  const router = useRouter();

  useRegisterActions([
    ...serizes.map((serize) => ({
      id: serize.slug,
      name: serize.title,
      subtitle: serize.date,
      section: 'Serize Book',
      keywords: serize.tags.join(' '),
      icon: <BookIcon width={18} />,
      perform: () => router.push(serize.slug),
      priority: Priority.NORMAL,
    })),
    ...posts.map((post) => ({
      id: post.slug,
      name: post.title,
      subtitle: post.date,
      parent: 'blog',
      section: 'Blog Posts',
      keywords: post.tags.join(' '),
      icon: <ArchiveBoxIcon width={18} />,
      perform: () => router.push(post.slug),
    })),
    ...snippets.map((post) => ({
      id: post.slug,
      name: post.title,
      subtitle: post.date,
      parent: 'snippets',
      section: 'Code Snippets',
      keywords: post.tags.join(' '),
      icon: <InBox width={18} />,
      perform: () => router.push(post.slug),
    })),
    ...tags.map((tag) => ({
      id: tag,
      name: tag,
      parent: 'archives',
      section: 'Tags',
      icon: <TagIcon width={18} />,
      perform: () => router.push(`/archives/tags/${tag}`),
    })),
  ]);
}
