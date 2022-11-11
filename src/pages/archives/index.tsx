import Title from '~/components/common/Title';
import Layout from '~/components/Layout';
import { PageSEO } from '~/components/SEO';

export const getStaticProps = () => {
  return {
    props: {
      tags: [],
    },
  };
};

export default function Archives() {
  return (
    <Layout>
      <PageSEO title="Archives" description="" url="/archives" />
      <Title>Archives</Title>
    </Layout>
  );
}
