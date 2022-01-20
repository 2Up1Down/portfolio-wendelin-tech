import Layout from "../components/common/layout";
import { getHomePageData } from "../utils/contentful/query-homepage";
import ApartmentsOverview from "../components/sections/apartments-overview";
import { getUnitsOverview } from "../utils/contentful/query-units";

export default function Home({ homepageData, units }) {
  return (
    <Layout className="">
      <ApartmentsOverview apartments={units} />
      <div className="container">
        <h1 className="text-3xl font-bold underline">Homepage Data Overview</h1>
        <pre>{JSON.stringify(homepageData, null, 2)}</pre>
        <h1 className="text-3xl font-bold underline">Units Data Overview</h1>
        <pre>{JSON.stringify(units, null, 2)}</pre>
      </div>
    </Layout>
  );
}

export async function getStaticProps({ locale }) {
  const units = await getUnitsOverview(locale);
  const homepageData = await getHomePageData(locale);

  return {
    props: {
      units,
      homepageData,
    },
    revalidate: 60, // in seconds
  };
}
