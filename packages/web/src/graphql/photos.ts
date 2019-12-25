import { gql } from "apollo-boost";

export const photosQuery = gql`
  query Photos {
    photos {
      id
      title
      description
      key
      createdAt
      updatedAt
    }
  }
`;
