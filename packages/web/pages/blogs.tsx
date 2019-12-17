import { Box, Flex } from "rebass";
import { BlogCard } from "../components/Card/BlogCard";
import { getPosts } from "../utils/getPosts";

const Blogs = () => (
  <Flex flexWrap="wrap" m={[-1, -2]}>
    {getPosts().map(post => (
      <Box
        key={post.url}
        width={[1, "calc(50% - 16px)", "calc(33.3% - 16px)"]}
        m={[1, 2]}
      >
        <BlogCard {...post} />
      </Box>
    ))}
  </Flex>
);

export default Blogs;
