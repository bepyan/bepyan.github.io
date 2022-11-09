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

export default function Tags() {
  return (
    <Layout>
      <PageSEO title="Tags" description="" url="/tags" />
      <Title>Tags</Title>
    </Layout>
  );
}
