import { gql } from "@apollo/client";
import { client } from "../apollo-client";

// Code inspired by vercels cms-contentful example
// https://github.com/vercel/next.js/blob/canary/examples/cms-contentful/lib/api.js

// Helper functions
///////////////////

// for multiple entries
function extractPageEntries(fetchResponse) {
  return fetchResponse?.data?.textPageCollection?.items;
}

// for single entry
function extractPage(fetchResponse) {
  return fetchResponse?.data?.textPageCollection?.items?.[0];
}

// Fetch all pages
//////////////////

const GET_SLUG_FROM_PAGES = () => gql`
  query getPages {
    textPageCollection {
      items {
        sys {
          id
        }
        slug
      }
    }
  }
`;

export async function getAllSlugs() {
  try {
    const entries = await client.query({
      query: GET_SLUG_FROM_PAGES(),
    });

    return extractPageEntries(entries);
  } catch (e) {
    console.log(e);
    return [];
  }
}

// Fetch single page by slug and locale
//////////////////////////////////////

const GET_PAGE = (slug, locale) => gql`
    query getPage {
        textPageCollection(where: { slug: "${slug}" }, limit: 1, locale: "${locale}") {
            items {
                title
                slug
                content {
                    json
                    links {
                        assets {
                            block {
                                sys {
                                    id
                                }
                                title
                                fileName
                                url
                                width
                                height
                            }
                        }
                        entries {
                            inline {
                                sys {
                                    id
                                }
                                __typename
                 
                            }
                            block {
                                sys {
                                    id
                                }
                            }
                        }
                    }
                }   
            }
        }
    }
`;

export async function getPage(slug, locale) {
  const entries = await client.query({
    query: GET_PAGE(slug, locale),
  });

  return extractPage(entries);
}
