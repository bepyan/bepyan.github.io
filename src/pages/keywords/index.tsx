import Title from '~/components/common/Title';
import Layout from '~/components/Layout';
import { PageSEO } from '~/components/SEO';

export const getStaticProps = () => {
  return {
    props: {
      keywordList: [],
    },
  };
};

export default function Keywords() {
  return (
    <Layout>
      <PageSEO title="Keywords" description="" url="/keywords" />
      <Title>Keywords</Title>
    </Layout>
  );
}
