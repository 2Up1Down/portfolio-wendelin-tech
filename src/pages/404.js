import React from "react";
import Layout from "../components/common/layout";
import { getLayout } from "../utils/contentful/query-layout";

const NotFoundPage = ({ header, footer }) => {
  return (
    <Layout header={header} footer={footer}>
      <div className="">
        <div className="container grid h-screen place-items-center">
          <h1 className="text-2xl">
            <span className="font-bold">404</span> - Page Not Found
          </h1>
        </div>
      </div>
    </Layout>
  );
};

export default NotFoundPage;

export async function getStaticProps({ locale }) {
  const { header, footer } = await getLayout(locale);

  return {
    props: {
      header,
      footer,
    },
    revalidate: 60, // in seconds
  };
}
