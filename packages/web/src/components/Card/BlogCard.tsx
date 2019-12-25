import { Flex, Heading, Image, Text } from "rebass";
import { formatDate } from "../../utils/formatDate";
import { Post } from "../../utils/getPosts";
import { NavLink } from "../NavLink";

interface Props {
  post: Post;
}

export const BlogCard = ({ post }: Props) => (
  <Flex bg="white" p={15} flexDirection="column" sx={{ textAlign: "center" }}>
    {post.thumbnail && (
      <Image
        src={"http://pixontrips.com/wp-content/uploads/" + post.thumbnail}
      />
    )}
    <Heading fontSize={3} mt={3}>
      {post.title}
    </Heading>
    <Text fontSize={2} mt={1} sx={{ fontStyle: "italic" }}>
      {formatDate(post.date)}
    </Text>
    <Text fontSize={2} lineHeight={1.5} my={4}>
      {post.description}
    </Text>
    <NavLink href={`${post.path}/${post.id}`} mx="auto">
      Read more
    </NavLink>
  </Flex>
);
