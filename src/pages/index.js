import Layout from "../components/common/layout";
import { getLocationsOverview } from "../utils/contentful/query-locations";

export default function Home({ locations }) {
  return (
    <Layout className="">
      <div className="container">
        <h1 className="text-3xl font-bold underline">Locations Overview</h1>
        <pre>{JSON.stringify(locations, null, 2)}</pre>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const locations = await getLocationsOverview();

  return {
    props: {
      locations,
    },
    revalidate: 60, // in seconds
  };
}
