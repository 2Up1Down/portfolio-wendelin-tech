import Layout from "../components/common/layout";
import { getHomepageData } from "../utils/contentful/query-homepage";

export default function Home({ homepageData }) {
  return (
    <Layout>
      <div className="container">hello world</div>
      <div className="container">
        <pre>{JSON.stringify(homepageData, null, 2)}</pre>
      </div>
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
