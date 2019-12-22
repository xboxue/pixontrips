import { Query, Resolver } from "type-graphql";
import { Photo } from "../entities/Photo";

@Resolver(of => Photo)
export class PhotoResolver {
  @Query(returns => [Photo])
  async photos(): Promise<Photo[]> {
    return Photo.find();
  }
}
