import { ReactNode } from 'react';

export interface ExternalLinkProps {
  href: string;
  children?: ReactNode;
}

export default function ExternalLink({ href, children }: ExternalLinkProps) {
  return (
    <a
      className="text-gray-500 transition hover:text-gray-600"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      {children}
    </a>
  );
}
