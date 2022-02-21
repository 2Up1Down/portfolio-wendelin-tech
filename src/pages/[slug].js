import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import Layout from "../components/common/layout";
import { getAllSlugs, getPage } from "../utils/contentful/query-text-page";
import { renderOptions } from "../styles/contentful-rich-text";
import { getLayout } from "../utils/contentful/query-layout";

const Page = ({ page, header, footer }) => {
  const { title, content } = page;

  return (
    <Layout header={header} footer={footer}>
      {/*  TODO padding pt-16 is a workaround. Proper solution would be to use a layout with a fixed navbar size */}
      <div className="pt-16">
        <section className="container py-16">
          <div className="pb-8 text-center">
            <h1 className="text-5xl ">{title}</h1>
          </div>
          <div className="m-auto max-w-2xl">
            {content &&
              documentToReactComponents(
                content.json,
                renderOptions(content.links)
              )}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export async function getStaticProps({ params, locale }) {
  const page = await getPage(params.slug, locale);
  const { header, footer } = await getLayout(locale);

  return {
    props: {
      page,
      header,
      footer,
    },
  };
}

export async function getStaticPaths({ locales }) {
  const pages = await getAllSlugs();

  const paths = [];
  locales.forEach((locale) => {
    pages.forEach((page) => {
      paths.push({ params: { slug: page.slug }, locale: locale });
    });
  });

  return {
    paths: paths,
    fallback: false,
  };
}

export default Page;
