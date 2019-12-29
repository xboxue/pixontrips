import { Flex, Image, Text } from "rebass";
import { GalleryQuery } from "../../graphql/types";

interface Props {
  photo: GalleryQuery["gallery"]["photos"][number];
}

export const PhotoCard = ({ photo }: Props) => (
  <Flex bg="white" p={15} flexDirection="column">
    <Image src={"http://pixontrips.com/wp-content/uploads/" + photo.key} />
    <Text fontSize={2} mt={3} sx={{ textAlign: "center" }}>
      {photo.title}
    </Text>
  </Flex>
);
