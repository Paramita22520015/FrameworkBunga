import { ApolloClient, InMemoryCache } from "@apollo/client";

const GraphQLClient = new ApolloClient({
  uri: "https://adapted-sculpin-88.hasura.app/v1/graphql",
  cache: new InMemoryCache(),
  headers: {
    'x-hasura-admin-secret': 'b68rHEXvJDsHgPUQWmdRwrDHyyQVEp95Fppze2hPCLi2P6p8e2KjEb6E8ESTkWu3' // Replace with your actual admin secret key
  }
});

export default GraphQLClient;
