import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";

const SPACE = process.env.CONTENTFUL_SPACE_ID;
const TOKEN = process.env.CONTENTFUL_DELIVERY_ACCESS_TOKEN;
const ENVIRONMENT = process.env.CONTENTFUL_ENVIRONMENT;
const CONTENTFUL_URL = `https://graphql.contentful.com/content/v1/spaces/${SPACE}/environments/${ENVIRONMENT}`;

const httpLink = createHttpLink({
  fetch,
  uri: CONTENTFUL_URL,
  headers: {
    authorization: `Bearer ${TOKEN}`,
    "Content-Type": "application/json",
  },
});

export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});
