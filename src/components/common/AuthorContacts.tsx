import React from 'react';
import title from 'title';

import { siteConfig } from '~/config';
import { $ } from '~/libs/core';
import ExternalLink from './ExternalLink';

export default function AuthorContacts({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div {...props} className={$('flex space-x-2', className)}>
      {Object.keys(siteConfig.author.contacts).map((sns) => {
        const link = siteConfig.author.contacts[sns as keyof typeof siteConfig.author.contacts];

        return !link ? null : (
          <ExternalLink key={sns} href={link}>
            {title(sns)}
          </ExternalLink>
        );
      })}
    </div>
  );
}