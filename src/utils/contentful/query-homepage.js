import { gql } from "@apollo/client";
import { client } from "../apollo-client";

const GET_HOMEPAGE = (locale) => gql`
  query GetHomepage {
      homepageCollection(limit: 1, locale: "${locale}") {
      items {
        sys {
          id
        }
        
        heroSection {
          title {
            json
          }
          subtitle
          backgroundImage {
            url
            title
          }
          primaryButtonText
          primaryButtonUrl
          secondaryButtonText
          secondaryButtonUrl
          
        }

        whatIDo {
          title {
            json
          }
          description {
            json
          }
        }

        servicesSection {
          title {
            json
          }
          servicesCollection {
            items {
              sys {
                id
              }
              title
              slug
              image: featuredImage {
                title
                url
              }
              excerpt
            }
          }
        }

        aboutMe {
          title {
            json
          }
          description {
            json
          }
          image {
            title
            url
          }
        }
        
        seoData {
          metaTitle
          metaDescription
          metaKeywords
          ogImage {
            url
          }
        }
      }
    }
  }
`;

const extractHomepageEntries = (fetchResponse) => {
  return fetchResponse?.data?.homepageCollection?.items[0];
};

export const getHomepageData = async (locale) => {
  try {
    const entries = await client.query({ query: GET_HOMEPAGE(locale) });

    return extractHomepageEntries(entries);
  } catch (e) {
    console.log(e);
    return {};
  }
};
