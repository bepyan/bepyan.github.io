import { ArticleJsonLd, NextSeo } from 'next-seo';

import { siteConfig } from '~/config';

const getTitle = (title?: string) => {
  if (!title) return siteConfig.title;

  return `${title} – ${siteConfig.title}`;
};

const getRelativeUrl = (url?: string) => {
  if (!url) return siteConfig.url;

  return `${siteConfig.url}${url.replace(/^\/s*/g, '')}`;
};

/**
 * use in Normal Page SEO
 */
export const PageSEO = ({
  title,
  description,
  url,
}: {
  title?: string;
  description?: string;
  url?: string;
}) => {
  return (
    <NextSeo
      title={getTitle(title)}
      description={description ?? siteConfig.description}
      canonical={getRelativeUrl(url)}
    />
  );
};

/**
 * use in Article Page SEO
 */
export const BlogSEO = ({
  summary,
  tags,
  images,
  ...props
}: {
  title: string;
  summary: string;
  date: string;
  updatedAt: string;
  url: string;
  tags: string[];
  images: string[];
}) => {
  const title = getTitle(props.title);
  const url = getRelativeUrl(props.url);

  const publishedTime = new Date(props.date).toISOString();
  const modifiedTime = new Date(props.updatedAt || props.date).toISOString();

  const featuredImages = images.map((img) => {
    return {
      url: img,
      alt: title,
    };
  });

  return (
    <>
      <NextSeo
        description={summary}
        canonical={url}
        openGraph={{
          type: 'article',
          article: {
            publishedTime,
            modifiedTime,
            authors: [`${siteConfig.url}/about`],
            tags,
          },
          url,
          title,
          description: summary,
          images: featuredImages,
        }}
        additionalMetaTags={[
          {
            name: 'twitter:image',
            content: images[0],
          },
        ]}
      />
      <ArticleJsonLd
        datePublished={publishedTime}
        dateModified={modifiedTime}
        images={images}
        url={url}
        title={title}
        description={summary}
        authorName={siteConfig.author.name}
        publisherName={siteConfig.author.name}
        publisherLogo={`${siteConfig.url}/favicon.ico`}
      />
    </>
  );
};
