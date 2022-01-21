import React from "react";
import { getAllSlugs, getPage } from "../utils/contentful/query-pages";
import Layout from "../components/common/layout";

const Page = ({ page }) => {
  return (
    <Layout>
      <div className="container">
        <pre>{JSON.stringify(page, null, 2)}</pre>
      </div>
    </Layout>
  );
};

export async function getStaticProps({ params, locale }) {
  const page = await getPage(params.pageSlug, locale);

  return {
    props: {
      page,
    },
  };
}

export async function getStaticPaths({ locales }) {
  const pages = await getAllSlugs();

  const paths = [];
  locales.forEach((locale) => {
    pages.forEach((page) => {
      paths.push({ params: { pageSlug: page.slug }, locale: locale });
    });
  });

  return {
    paths: paths,
    fallback: false,
  };
}

export default Page;
