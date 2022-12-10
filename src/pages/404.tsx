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
        <p className="mb-8 text-gray-600 dark:text-gray-400">
          Sorry we couldn&apos;t find this page 🥲
        </p>

        <NavItem href="/blog" className="rounded-md px-4 py-2 ring-1 ring-gray-300">
          Back to blog
        </NavItem>
      </div>
    </Layout>
  );
}
