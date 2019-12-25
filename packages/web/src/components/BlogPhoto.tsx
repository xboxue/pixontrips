import { Flex, Image, Link, Text } from "rebass";
import { ConditionalWrap } from "./ConditionalWrap";

interface Props {
  url: string;
  alt: string;
  href?: string;
  caption?: string;
}

export const BlogPhoto = (props: Props) => (
  <Flex flexDirection="column" my={3} alignItems="center">
    <ConditionalWrap
      condition={!!props.href}
      wrap={children => <Link href={props.href}>{children}</Link>}
    >
      <Image src={props.url}></Image>
    </ConditionalWrap>
    {props.caption && <Text>{props.caption}</Text>}
  </Flex>
);
