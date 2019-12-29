import Error from "next/error";
import { useRouter } from "next/router";
import { Box } from "rebass";
import { PhotoCard } from "../../components/Card/PhotoCard";
import { CardGrid } from "../../components/CardGrid";
import { useGalleryQuery } from "../../graphql/types";

const Gallery = () => {
  const { query } = useRouter();
  const { loading, error, data } = useGalleryQuery({
    variables: { slug: query.slug as string }
  });

  if (!data?.gallery) return <Error statusCode={404} />;
  return (
    <CardGrid>
      {data.gallery.photos.map(photo => (
        <Box key={photo.id} width={[1, 1 / 2, 1 / 3]} px={[1, 2]}>
          <PhotoCard photo={photo} />
        </Box>
      ))}
    </CardGrid>
  );
};

export default Gallery;
