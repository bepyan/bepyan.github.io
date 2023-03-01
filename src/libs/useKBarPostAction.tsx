import { Priority, useRegisterActions } from 'kbar';
import { useRouter } from 'next/router';

import ArchiveBoxIcon from '~/components/icons/ArchiveBoxIcon';
import BookIcon from '~/components/icons/BookIcon';
import InBoxIcon from '~/components/icons/InBoxIcon';
import TagIcon from '~/components/icons/TagIcon';
import { posts, serizes, snippets, tags } from '~/constants/dataset';

export default function useKBarPostAction() {
  const router = useRouter();

  useRegisterActions([
    ...serizes.map((series) => ({
      id: series.slug,
      name: series.title,
      subtitle: series.date,
      section: 'Series Book',
      keywords: series.tags.join(' '),
      icon: <BookIcon width={18} />,
      perform: () => router.push(series.slug),
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
      icon: <InBoxIcon width={18} />,
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
