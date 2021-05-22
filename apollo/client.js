/* eslint-disable no-console */
import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloLink,
} from "@apollo/client";

const httpLink = new HttpLink({
  uri: "http://localhost:3000/graphql",
});

const authLink = new ApolloLink((operation, forward) => {
  // retrieve auth token from local storage
  const token = localStorage.getItem("auth-token");
  const authorizationHeader = token ? `Bearer ${token}` : null;

  operation.setContext((prevContext) => {
    return {
      ...prevContext,
      headers: {
        authorization: authorizationHeader,
      },
    };
  });

  return forward(operation).map((response) => {
    const context = operation.getContext();
    const {
      response: { headers },
    } = context;
    const authHeader = headers.get("Authorization");
    localStorage.setItem("auth-token", authHeader);
    return response;
  });
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
