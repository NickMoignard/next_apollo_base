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
  const token = localStorage.getItem("auth_token");

  operation.setContext((prevContext) => {
    return {
      ...prevContext,
    };
  });

  return forward(operation).map((response) => {
    const context = operation.getContext();
    const authHeader = context.response.headers.get("Authorization");

    localStorage.setItem("auth-token", authHeader);
    return response;
  });
  /*
    return forward(operation).map((data)=>{return data;})
  */
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  // uri: "http://localhost:8000/graphql",
  cache: new InMemoryCache(),
});

export default client;
