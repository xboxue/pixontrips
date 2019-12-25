import { NextPageContext } from "next";
import { BlogPost } from "../../components/BlogPost";
import { findPost } from "../../utils/getPosts";

interface Props {
  id: string;
}

const Post = ({ id }: Props) => <BlogPost post={findPost(id)}></BlogPost>;

Post.getInitialProps = async ({ query }: NextPageContext) => ({ id: query.id });

export default Post;
