import { Arg, Query, Resolver } from "type-graphql";
import { Gallery } from "../entities/Gallery";

@Resolver(of => Gallery)
export class GalleryResolver {
  @Query(returns => [Gallery])
  galleries(): Promise<Gallery[]> {
    return Gallery.find();
  }

  @Query(returns => Gallery, { nullable: true })
  gallery(@Arg("slug") slug: string): Promise<Gallery> {
    return Gallery.findOne({ where: { slug }, relations: ["photos"] });
  }
}
