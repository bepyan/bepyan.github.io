import NavItem from '~/components/common/NavItem';
import Title from '~/components/common/Title';
import Layout from '~/components/layouts/Layout';
import { PageSEO } from '~/components/SEO';

export default function NotFound() {
  return (
    <Layout>
      <PageSEO title="404" />
      <div className="mb-16">
        <Title>404</Title>
        <p className="text-secondary mb-8">미안해요, 찾을 수 없는 페이지에요 🥲</p>

        <NavItem href="/blog" className="rounded-md px-4 py-2 ring-1 ring-neutral-400/70">
          Back to blog
        </NavItem>
      </div>
    </Layout>
  );
}
