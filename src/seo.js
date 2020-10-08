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
      ]}
    />
  );
};

SEO.defaultProps = {
  title: `MUI firebase async seo`,
  pathname: `/`,
  image:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/220px-React-icon.svg.png",
  description: `Combinations of ReactJs and Material UI Asynchronus SEO with github job api`,
};

SEO.propTypes = {
  description: PropTypes.string,
  image: PropTypes.string,
  pathname: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default SEO;
