import Link from 'next/link';
import { ReactNode } from 'react';

export interface ExternalLinkProps {
  href: string;
  children?: ReactNode;
}

export default function ExternalLink({ href, children }: ExternalLinkProps) {
  return (
    <Link href={href} className="text-gray-500 transition hover:text-gray-600">
      {children}
    </Link>
  );
}
