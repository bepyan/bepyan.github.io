import React from 'react';

import { siteConfig } from '~/config';
import { $ } from '~/libs/core';

import GithubIcon from '../icons/GithubIcon';
import InstagramIcon from '../icons/InstagramIcon';
import LinkedinIcon from '../icons/LinkedinIcon';
import MailIcon from '../icons/MailIcon';
import TwitterIcon from '../icons/TwitterIcon';
import VelogIcon from '../icons/VelogIcon';
import YoutubeIcon from '../icons/YoutubeIcon';
import LinkExternal from './LinkExternal';

const icons = {
  email: <MailIcon />,
  github: <GithubIcon />,
  twitter: <TwitterIcon />,
  instagram: <InstagramIcon />,
  velog: <VelogIcon />,
  linkedin: <LinkedinIcon />,
  youtube: <YoutubeIcon />,
};

export default function AuthorContacts({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div {...props} className={$('flex space-x-2', className)}>
      {Object.keys(siteConfig.author.contacts).map((sns) => {
        const key = sns as keyof typeof siteConfig.author.contacts;
        const link = siteConfig.author.contacts[key];
        const icon = icons[key] as JSX.Element | undefined;

        return !link || !icon ? null : (
          <LinkExternal key={sns} href={link}>
            {icon}
          </LinkExternal>
        );
      })}
    </div>
  );
}
