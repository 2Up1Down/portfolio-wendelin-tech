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
      <meta name="author" content="Wendelin Steiner" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <meta property="og:title" content={title} key="title" />
      <meta property="og:description" content={description} key="title" />
      <meta property="og:image" content={image.url} key="title" />
    </Head>
  );
};

export default DefaultHead;
