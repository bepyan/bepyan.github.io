import { ArticleJsonLd, NextSeo } from 'next-seo';
import { OpenGraphMedia } from 'next-seo/lib/types';

import { siteConfig } from '~/config';

const getTitle = (title?: string) => {
  if (!title) return siteConfig.title;
  if (title.length > 10) return title;

  return `${title} - bepyan`;
};

const getRelativeUrl = (url?: string) => {
  if (!url) return siteConfig.url;

  return `${siteConfig.url}/${url.replace(/^\/s*/g, '')}`;
};

const DEFAULT_IMAGE: OpenGraphMedia = {
  url: `${siteConfig.url}/images/base.jpg`,
  alt: 'bepyan blog',
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
      openGraph={{
        images: [DEFAULT_IMAGE],
      }}
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
  url: string;
  tags: string[];
  images: string[];
}) => {
  const title = getTitle(props.title);
  const url = getRelativeUrl(props.url);
  const dateTime = new Date(props.date).toISOString();

  const featuredImages = images.length
    ? images.map((img) => ({
        url: img.startsWith('https://') ? img : `${siteConfig.url}/${img}`,
        alt: title,
      }))
    : [DEFAULT_IMAGE];

  return (
    <>
      <NextSeo
        title={title}
        description={summary}
        canonical={url}
        openGraph={{
          type: 'article',
          article: {
            publishedTime: dateTime,
            modifiedTime: dateTime,
            authors: [`https://github.com/bepyan`],
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
        datePublished={dateTime}
        dateModified={dateTime}
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
