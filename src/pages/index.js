import Layout from "../components/common/layout";
import { getLocationsOverview } from "../utils/contentful/query-locations";
import { getHomePageData } from "../utils/contentful/query-homepage";

export default function Home({ homepageData, locations }) {
  return (
    <Layout className="">
      <div className="container">
        <h1 className="text-3xl font-bold underline">Homepage Data Overview</h1>
        <pre>{JSON.stringify(homepageData, null, 2)}</pre>
        <h1 className="text-3xl font-bold underline">
          Locations Data Overview
        </h1>
        <pre>{JSON.stringify(locations, null, 2)}</pre>
      </div>
    </Layout>
  );
}

export async function getStaticProps({ locale }) {
  const locations = await getLocationsOverview(locale);
  const homepageData = await getHomePageData(locale);

  return {
    props: {
      locations,
      homepageData,
    },
    revalidate: 60, // in seconds
  };
}
