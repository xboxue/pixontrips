import { Flex, FlexProps } from "rebass";

export const CardGrid = (props: FlexProps) => (
  <Flex flexWrap="wrap" m={[-1, -2]} {...props}></Flex>
);
