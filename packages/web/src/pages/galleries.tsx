import Error from "next/error";
import { Box } from "rebass";
import { GalleryCard } from "../components/Card/GalleryCard";
import { CardGrid } from "../components/CardGrid";
import { useGalleriesQuery } from "../graphql/types";

const Galleries = () => {
  const { loading, error, data } = useGalleriesQuery();

  if (!data?.galleries) return <Error statusCode={500} />;
  return (
    <CardGrid>
      {data.galleries.map(gallery => (
        <Box key={gallery.id} width={[1, 1 / 2, 1 / 3]} px={[1, 2]}>
          <GalleryCard gallery={gallery} />
        </Box>
      ))}
    </CardGrid>
  );
};

export default Galleries;
