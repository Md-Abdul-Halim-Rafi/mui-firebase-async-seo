import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

const SEO = ({ title, pathname, image, desctiption }) => {
  const metaUrl =
    typeof window !== "undefined" ? window.location.origin + pathname : "";
  return (
    <Helmet
      title={title}
      async
      meta={[
        {
          name: "title",
          content: title,
        },
        {
          name: "description",
          content: desctiption,
        },
        {
          name: "image",
          content: image,
        },
        {
          property: `og:site_name`,
          content: `React Mui SEO`,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:image`,
          content: image,
        },
        {
          property: `og:url`,
          content: metaUrl,
        },
        {
          name: `og:image:alt`,
          content: title,
        },
        {
          property: `og:image:width`,
          content: `600px`,
        },
        {
          property: `og:image:height`,
          content: `315px`,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:description`,
          content: desctiption,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:site`,
          content: `@AbdulHalimRafi`,
        },
        {
          name: `twitter:creator`,
          content: `@AbdulHalimRafi`,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          property: `twitter:url`,
          content: metaUrl,
        },
        {
          name: `twitter:image`,
          content: image,
        },
        {
          name: `twitter:image:alt`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: desctiption,
        },
      ]}>
      <meta
        name='google-site-verification'
        content='m7_ousE3O2yTTOWP_E5lkcTlFIBlX69S1aTj29y_ld8'
      />
      <script type='application/ld+json'>
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          url: "https://cra-mui-async-seo.web.app/",
          logo:
            "https://cdn.mainlycoding.com/admin/rafee.png",
        })}
      </script>
    </Helmet>
  );
};

SEO.defaultProps = {
  title: `React ssr seo`,
  pathname: `/`,
  image:
    "https://cdn.mainlycoding.com/admin/rafee.png",
  description: `Combinations of ReactJs and Material UI Asynchronus SEO with github job api`,
};

SEO.propTypes = {
  description: PropTypes.string,
  image: PropTypes.string,
  pathname: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default SEO;
