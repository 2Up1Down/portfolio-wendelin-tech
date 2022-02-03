import React from "react";
import Head from "next/head";

const DefaultHead = ({
  title = "",
  description = "",
  image = { url: "#" },
  keywords,
}) => {
  return (
    <Head>
      <title>{title}</title>

      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      <meta property="og:title" content={title} key="title" />
      <meta property="og:description" content={description} key="title" />
      <meta property="og:image" content={image.url} key="title" />
    </Head>
  );
};

export default DefaultHead;
