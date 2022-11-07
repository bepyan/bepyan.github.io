import Title from '~/components/common/Title';
import Layout from '~/components/Layout';
import { PageSEO } from '~/components/SEO';

export default function Notebooks() {
  return (
    <Layout>
      <PageSEO title="Notebooks" description="" url="/notebooks" />
      <Title>Notebooks</Title>
    </Layout>
  );
}
