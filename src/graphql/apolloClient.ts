import { ApolloClient, InMemoryCache } from "@apollo/client";

const createApolloClient = () => {
  return new ApolloClient({
    uri: 'https://graphqlpokemon.favware.tech/v8',
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;