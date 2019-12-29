import { Flex, Image, Link, Text } from "rebass";
import { GalleriesQuery } from "../../graphql/types";

interface Props {
  gallery: GalleriesQuery["galleries"][number];
}

export const GalleryCard = ({ gallery }: Props) => (
  <Flex bg="white" p={15} flexDirection="column">
    <Link href={"galleries/" + gallery.slug}>
      <Image
        src={"http://pixontrips.com/wp-content/uploads/" + gallery.thumbnail}
      />
    </Link>
    <Text fontSize={3} mt={3} sx={{ textAlign: "center" }}>
      {gallery.name}
    </Text>
  </Flex>
);
