import { gql } from "@apollo/client";
import { client } from "../apollo-client";

// Code inspired by vercels cms-contentful example
// https://github.com/vercel/next.js/blob/canary/examples/cms-contentful/lib/api.js

const GET_LAYOUT = (locale) => gql`
    query GetLayout {
        headerCollection(limit: 1, locale: "${locale}") {
            items {
                sys {
                    id
                }
                
                logo {
                    title
                    url
                    width
                    height
                }
                linksCollection {
                    items {
                        sys {
                            id
                        }
                        text
                        url
                    }
                }
            }
        }

        footerCollection(limit: 1, locale: "${locale}") {
            items {
                companyAddress
                companyName
                companyPlace
                email
                copyright
                linksCollection {
                    items {
                        sys {
                            id
                        }
                        text
                        url
                    }
                }
                socialMedia {
                    twitter
                    linkedin
                    instagram
                    github
                }
            }
        }
    }
    `;

function extractLayout(fetchResponse) {
  const header = fetchResponse?.data?.headerCollection?.items?.[0];
  const footer = fetchResponse?.data?.footerCollection?.items?.[0];

  return { header, footer };
}

export async function getLayout(locale) {
  try {
    const entries = await client.query({
      query: GET_LAYOUT(locale),
    });

    return extractLayout(entries);
  } catch (e) {
    console.log(e);
    return [];
  }
}
