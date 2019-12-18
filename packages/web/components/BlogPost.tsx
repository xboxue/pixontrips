import { Box, Heading, Image, Text } from "rebass";
import { formatDate } from "../utils/formatDate";
import { Post } from "../utils/getPosts";

interface Props {
  post: Post;
}

export const BlogPost = ({ post }: Props) => {
  return (
    <>
      <Box my={4} sx={{ textAlign: "center" }}>
        <Heading>{post.title}</Heading>
        <Text>{formatDate(post.date)}</Text>
      </Box>
      {post.thumbnail && (
        <Image
          src={"http://pixontrips.com/wp-content/uploads/" + post.thumbnail}
        />
      )}
      <post.MDXDocument />
    </>
  );
};
