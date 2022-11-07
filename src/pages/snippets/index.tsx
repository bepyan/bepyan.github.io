import Title from '~/components/common/Title';
import Layout from '~/components/Layout';
import { PageSEO } from '~/components/SEO';

export default function Snippets() {
  return (
    <Layout>
      <PageSEO title="Snippets" description="" url="/snippets" />
      <Title>Code Snippets</Title>
    </Layout>
  );
}
