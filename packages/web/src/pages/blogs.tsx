import { Box } from "rebass";
import { BlogCard } from "../components/Card/BlogCard";
import { CardGrid } from "../components/CardGrid";
import { getPosts } from "../utils/getPosts";

const Blogs = () => (
  <CardGrid>
    {getPosts().map(post => (
      <Box key={post.id} width={[1, 1 / 2, 1 / 3]} px={[1, 2]}>
        <BlogCard post={post} />
      </Box>
    ))}
  </CardGrid>
);

export default Blogs;
