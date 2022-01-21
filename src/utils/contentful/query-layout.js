import { gql } from "@apollo/client";
import { client } from "../apollo-client";

// Code inspired by vercels cms-contentful example
// https://github.com/vercel/next.js/blob/canary/examples/cms-contentful/lib/api.js

const GET_LAYOUT = (locale, layoutName) => gql`
    query getLayout {
        layoutCollection(where: {layoutName: "${layoutName}"}, locale: "${locale}", limit: 1) {
            items {
                sys {
                    id
                }
                layoutName
                mainNavigation {
                    navItemsCollection {
                        items {
                            sys {
                                id
                            }
                            title
                            slug
                        }
                    }
                }
                brand {
                    logo {
                        fileName
                        url
                    }
                }
                footer {
                    title
                    navItemsCollection {
                        items {
                            sys {
                                id
                            }
                            title
                            slug
                        }
                    }
                    contactInformation {
                        companyName
                        street
                        city
                        zipCode
                        country
                        email
                        phoneNumber

                    }
                    socialMedia {
                        instagramUrl
                        linkedinUrl
                        githubUrl
                    }
                }
            }
        }
    }
`;

function extractLayout(fetchResponse) {
  const item = fetchResponse?.data?.layoutCollection?.items?.[0];

  const layoutData = {
    menu: item.mainNavigation?.navItemsCollection?.items || [],
    brand: item.brand || {},
    footerLinks: item.footer?.navItemsCollection?.items || [],
    contact: item.contactInformation || {},
    social: item.socialMedia || [],
  };

  return layoutData;
}

export async function getLayout(locale, layoutName = "default") {
  try {
    const entries = await client.query({
      query: GET_LAYOUT(locale, layoutName),
    });

    return extractLayout(entries);
  } catch (e) {
    console.log(e);
    return [];
  }
}
