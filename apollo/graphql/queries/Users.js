import { gql } from "@apollo/client";

const COMPANY = gql`
  query company {
    company {
      id
      name
      slug
      createdAt
      updatedAt
    }
  }
`;
const ME = gql`
  query me {
    me {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
const USER = gql`
    query user(id: ID!) {
        user {
            id
            name
            createdAt
            updatedAt
        }
    }
`;
const USERS = gql`
  query users(
    $orderBy: ItemOrder
    $filter: UserFilter
    $first: Int
    $last: Int
    $before: String
    $after: String
  ) {
    users(
      orderBy: $orderBy
      filter: $filter
      first: $first
      last: $last
      before: $before
      after: $after
    ) {
      edges {
        cursor
        node {
          id
          name
          createdAt
          updatedAt
        }
      }
      nodes {
        id
        name
        createdAt
        updatedAt
      }
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
    }
  }
`;

export { COMPANY, USER, USERS, ME };
