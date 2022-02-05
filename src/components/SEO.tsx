import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

// interface P {
//   title: string;
//   description?: string
//   date?: string
//   siteUrl?: string
//   image?: string
// }

const Seo = (p) => {
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

  const description = p.description || site.siteMetadata.description;
  const defaultImage = `${site.siteMetadata.url}/assets/favicon.png`;
  const image = p.image
    ? p.image?.startsWith(site.siteMetadata.url)
      ? p.image
      : `${site.siteMetadata.url}${p.image}`
    : defaultImage;
  const siteUrl = p.siteUrl || site.siteMetadata.siteUrl;

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
      content: p.title,
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

  if (p.date) {
    meta.push({
      property: 'article:published_time',
      content: p.date,
    });
  }

  return (
    <Helmet
      htmlAttributes={{
        lang: 'ko',
      }}
      title={p.title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={meta}>
      {p.date && (
        <script type="application/ld+json">{`
      {
        "@context": "http://schema.org",
        "@type": "BlogPosting",
        "siteUrl": "${siteUrl}",
        "headline": "${p.title}",
        "datePublished": "${p.date}",
        "dateModified": "${p.date}",
        "image": "${image}"
      }
      `}</script>
      )}
      <script src="https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/1.5.12/clipboard.min.js"></script>
    </Helmet>
  );
};

export default Seo;
