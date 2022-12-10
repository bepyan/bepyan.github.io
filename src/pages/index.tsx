import Image from 'next/image';
import title from 'title';

import Layout from '~/components/layouts/Layout';
import { PageSEO } from '~/components/SEO';
import { siteConfig } from '~/config';

export default function Home() {
  return (
    <Layout>
      <PageSEO title="Home" />
      <div className="inset-0 mb-2 h-full w-full tracking-wide">
        {title(siteConfig.author.name)}
      </div>

      <div className="flex select-none flex-wrap items-start gap-3">
        <Image
          src="/forest.jpg"
          alt="forest"
          width={312}
          height={468}
          placeholder="blur"
          className="h-auto"
          draggable={false}
        />
        <Image
          src="/forest-floor.jpg"
          alt="forest-floor"
          width={300}
          height={375}
          placeholder="blur"
          className="h-auto"
          draggable={false}
        />
      </div>
    </Layout>
  );
}
