import title from 'title';

import Title from '~/components/common/Title';
import Layout from '~/components/Layout';
import { PageSEO } from '~/components/SEO';
import { siteConfig } from '~/config';

export default function Home() {
  return (
    <Layout>
      <PageSEO title="Home" />
      <Title>{title(siteConfig.author.name)}</Title>
    </Layout>
  );
}
