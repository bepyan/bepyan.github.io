import Link from 'next/link';
import title from 'title';

import Pill from './Pill';

export default function Tag({ tag }: { tag: string }) {
  return (
    <Link href={`/archives/tags/${tag}`}>
      <Pill>{title(tag)}</Pill>
    </Link>
  );
}
