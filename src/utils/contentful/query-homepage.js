import { gql } from "@apollo/client";
import { client } from "../apollo-client";

const GET_HOME_PAGE = (locale) => gql`
  query GetHomePage {
      homePageCollection(limit: 1, locale: "${locale}") {
      items {
        sys {
          id
        }
        title
        layout {
          title
          mainNavigation {
            navItemsCollection {
              items {
                title
                slug
              }
            }
          }
        }
        seoData {
          metaTitle
          metaDescription
          metaTags
          ogImage {
            url
          }
        }
      }
    }
  }
`;

const extractHomePageEntries = (fetchResponse) => {
  return fetchResponse?.data?.homePageCollection?.items[0];
};

export const getHomePageData = async (locale) => {
  try {
    const entries = await client.query({ query: GET_HOME_PAGE(locale) });

    return extractHomePageEntries(entries);
  } catch (e) {
    console.log(e);
    return {};
  }
};
