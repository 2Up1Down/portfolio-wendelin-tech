import { gql } from "@apollo/client";
import { client } from "../apollo-client";

// Code inspired by vercels cms-contentful example
// https://github.com/vercel/next.js/blob/canary/examples/cms-contentful/lib/api.js

const GET_LOCATIONS_OVERVIEW = gql`
  query getLocations {
    contentTypeLocationCollection {
      items {
        title
        slug
        featuredImage {
          title
          url
        }
        description
      }
    }
  }
`;

function extractLocationEntries(fetchResponse) {
  return fetchResponse?.data?.contentTypeLocationCollection?.items;
}

export async function getLocationsOverview() {
  const entries = await client.query({
    query: GET_LOCATIONS_OVERVIEW,
  });

  return extractLocationEntries(entries);
}
