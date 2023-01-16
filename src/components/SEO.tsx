import { ArticleJsonLd, NextSeo } from 'next-seo';

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

const DEFAULT_IMAGE = `${siteConfig.url}/images/base.jpg`;

const getImageUrl = (img?: string) => {
  if (!img) return DEFAULT_IMAGE;
  if (img.startsWith('https://')) return img;

  return `${siteConfig.url}/${img}`;
};

/**
 * use in Normal Page SEO
 */
export const PageSEO = (props: {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
}) => {
  const title = getTitle(props.title);
  const description = props.description ?? siteConfig.description;
  const url = getRelativeUrl(props.url);
  const image = getImageUrl(props.image);

  return (
    <NextSeo
      title={title}
      description={description}
      canonical={url}
      openGraph={{
        url,
        title,
        description,
        images: [{ url: image }],
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
  const imageList = images.length ? images.map(getImageUrl) : [DEFAULT_IMAGE];

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
          images: imageList.map((img) => ({ url: img })),
        }}
      />
      <ArticleJsonLd
        datePublished={dateTime}
        dateModified={dateTime}
        images={imageList}
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
