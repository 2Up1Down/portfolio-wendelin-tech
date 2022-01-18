import { gql } from "@apollo/client";
import { client } from "../apollo-client";

// Code inspired by vercels cms-contentful example
// https://github.com/vercel/next.js/blob/canary/examples/cms-contentful/lib/api.js

const GET_LOCATIONS_OVERVIEW = (locale) => gql`
  query getLocations {
    contentTypeLocationCollection(locale: "${locale}") {
      items {
        title
        description
      }
    }
  }
`;

function extractLocationEntries(fetchResponse) {
  return fetchResponse?.data?.contentTypeLocationCollection?.items;
}

export async function getLocationsOverview(locale) {
  try {
    const entries = await client.query({
      query: GET_LOCATIONS_OVERVIEW(locale),
    });

    return extractLocationEntries(entries);
  } catch (e) {
    console.log(e);
    return [];
  }
}
