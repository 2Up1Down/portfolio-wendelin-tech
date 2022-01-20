import { gql } from "@apollo/client";
import { client } from "../apollo-client";

// Code inspired by vercels cms-contentful example
// https://github.com/vercel/next.js/blob/canary/examples/cms-contentful/lib/api.js

const GET_UNITS_OVERVIEW = (locale) => gql`
    query getUnits {
        unitCollection(locale: "${locale}") {
            items {
                sys {
                    id
                }
                title
                slug
                overviewDescription
                featuredImage {
                    url
                    fileName
                }
                slug
            }
        }
    }
`;

function extractUnitOverviewEntries(fetchResponse) {
  const items = fetchResponse?.data?.unitCollection?.items;
  const unitOverviewEntries = items.map((item) => ({
    id: item.sys.id,
    slug: item.slug,
    title: item.title || "",
    description: item.overviewDescription || "",
    image: item.featuredImage || {},
  }));

  return unitOverviewEntries;
}

export async function getUnitsOverview(locale) {
  try {
    const entries = await client.query({
      query: GET_UNITS_OVERVIEW(locale),
    });

    return extractUnitOverviewEntries(entries);
  } catch (e) {
    console.log(e);
    return [];
  }
}
