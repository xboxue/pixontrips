import { Box } from "rebass";
import { BlogCard } from "../components/Card/BlogCard";
import { CardGrid } from "../components/CardGrid";
import { getTripPosts } from "../utils/getPosts";

const Blogs = () => (
  <CardGrid>
    {getTripPosts().map(post => (
      <Box
        key={post.id}
        width={[1, "calc(50% - 16px)", "calc(33.3% - 16px)"]}
        m={[1, 2]}
      >
        <BlogCard post={post} />
      </Box>
    ))}
  </CardGrid>
);

export default Blogs;
