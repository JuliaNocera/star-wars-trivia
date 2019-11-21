import ApolloClient from "apollo-boost";

import resolvers from "./resolvers";

export const uri = "https://swapi.co/api/";

export const client = new ApolloClient({
  uri: uri,
  resolvers: {
    Query: {
      peopleCollection: resolvers.peopleCollection
    }
  }
});
