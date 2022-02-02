import Layout from "../components/common/layout";
import DefaultHead from "../components/common/default-head";
import HeroSection from "../components/sections/hero-section";
import JsonStringify from "../components/common/json-stringify";
import { getHomepageData } from "../utils/contentful/query-homepage";
import WhatIDoSection from "../components/sections/what-i-do-section";

export default function Home({ homepageData }) {
  const {
    seoData: { metaTitle, metaDescription, metaKeywords, ogImage },
  } = homepageData;

  const { heroSection, whatIDo } = homepageData;

  return (
    <Layout>
      <DefaultHead
        title={metaTitle}
        description={metaDescription}
        keywords={metaKeywords}
        image={ogImage}
      />

      <HeroSection {...heroSection} />
      <WhatIDoSection {...whatIDo} />

      <JsonStringify jsonObj={whatIDo} />
    </Layout>
  );
}

export async function getStaticProps({ locale }) {
  const homepageData = await getHomepageData(locale);

  return {
    props: {
      homepageData,
    },
    revalidate: 60, // in seconds
  };
}
