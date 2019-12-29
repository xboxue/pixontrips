import { gql } from "apollo-boost";

export const galleriesQuery = gql`
  query Galleries {
    galleries {
      id
      name
      slug
      thumbnail
    }
  }
`;
