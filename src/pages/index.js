import Layout from "../components/common/layout";
import { getHomePageData } from "../utils/contentful/query-homepage";
import ApartmentsOverview from "../components/sections/apartments-overview";
import { getUnitsOverview } from "../utils/contentful/query-units";
import { getLayout } from "../utils/contentful/query-layout";

export default function Home({ homepageData, units, layout }) {
  return (
    <Layout layout={layout}>
      <ApartmentsOverview apartments={units} />
      <div className="container">
        <h1 className="text-3xl font-bold underline">Homepage Data Overview</h1>
        <pre>{JSON.stringify(homepageData, null, 2)}</pre>
        <h1 className="text-3xl font-bold underline">Layouts Data Overview</h1>
        <pre>{JSON.stringify(layout, null, 2)}</pre>
      </div>
    </Layout>
  );
}

export async function getStaticProps({ locale }) {
  const layout = await getLayout(locale);
  const units = await getUnitsOverview(locale);
  const homepageData = await getHomePageData(locale);

  return {
    props: {
      layout,
      units,
      homepageData,
    },
    revalidate: 60, // in seconds
  };
}
