import { Flex, Heading, Image, Text } from "rebass";
import { Post } from "../../utils/getPosts";
import { NavLink } from "../NavLink";

export const BlogCard = (props: Post) => (
  <Flex bg="white" p={15} flexDirection="column" sx={{ textAlign: "center" }}>
    {props.thumbnail && (
      <Image
        src={"http://pixontrips.com/wp-content/uploads/" + props.thumbnail}
      />
    )}
    <Heading fontSize={3} mt={3}>
      {props.title}
    </Heading>
    <Text fontSize={2} mt={1} sx={{ fontStyle: "italic" }}>
      {props.date.toLocaleString("en-us", {
        day: "numeric",
        month: "long",
        year: "numeric"
      })}
    </Text>
    <Text fontSize={2} lineHeight={1.5} my={4}>
      {props.description}
    </Text>
    <NavLink href={props.url} mx="auto">
      Read more
    </NavLink>
  </Flex>
);
