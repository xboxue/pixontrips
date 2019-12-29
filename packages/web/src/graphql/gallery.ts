import { gql } from "apollo-boost";

export const galleryQuery = gql`
  query gallery($slug: String!) {
    gallery(slug: $slug) {
      id
      name
      photos {
        id
        title
        key
      }
    }
  }
`;
