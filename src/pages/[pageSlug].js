import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import Layout from "../components/common/layout";
import { getAllSlugs, getPage } from "../utils/contentful/query-pages";
import { renderOptions } from "../styles/contentful-rich-text";

const Page = ({ page }) => {
  const { title, body } = page;

  return (
    <Layout>
      <div className="">
        <section className="container py-16">
          <div className="text-center">
            <h1 className="text-5xl ">{title}</h1>
          </div>
          <div className="max-w-2xl m-auto">
            {body &&
              documentToReactComponents(body.json, renderOptions(body.links))}
          </div>
        </section>
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
