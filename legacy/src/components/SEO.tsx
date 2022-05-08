import React, { ReactElement } from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import { BlogPostBySlugQuery } from 'src/types/graphql-types';

interface Props<T> {
  data: T;
}

const Seo = <T extends BlogPostBySlugQuery>({
  data,
}: Props<T>): ReactElement => {
  if (!data.markdownRemark) return <></>;
  const { markdownRemark } = data;

  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteUrl
          }
        }
      }
    `
  );

  const title = markdownRemark?.frontmatter?.title || '';
  const description = markdownRemark.excerpt || site.siteMetadata.description;
  const date = markdownRemark.fields?.date;
  const defaultImage = `${site.siteMetadata.url}/assets/favicon.png`;
  const image = defaultImage;
  const siteUrl =
    `${site?.siteMetadata?.siteUrl}${markdownRemark?.fields?.slug}` ||
    site.siteMetadata.siteUrl;

  const meta = [
    {
      property: `og:locale`,
      content: `ko_KR`,
    },
    {
      property: `og:locale:alternate`,
      content: `en_US`,
    },
    {
      property: `og:site_name`,
      content: site.siteMetadata.title,
    },
    {
      property: `description`,
      content: description,
    },
    {
      property: `og:url`,
      content: siteUrl,
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      property: `og:description`,
      content: description,
    },
    {
      property: `og:image`,
      content: image,
    },
  ];

  if (date) {
    meta.push({
      property: 'article:published_time',
      content: date,
    });
  }

  return (
    <Helmet
      htmlAttributes={{
        lang: 'ko',
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={meta}>
      {date && (
        <script type="application/ld+json">{`
      {
        "@context": "http://schema.org",
        "@type": "BlogPosting",
        "siteUrl": "${siteUrl}",
        "headline": "${title}",
        "datePublished": "${date}",
        "dateModified": "${date}",
        "image": "${image}"
      }
      `}</script>
      )}
      <script src="https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/1.5.12/clipboard.min.js"></script>
    </Helmet>
  );
};

export default Seo;
