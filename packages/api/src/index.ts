import { ApolloServer } from "apollo-server-express";
import express from "express";
import { buildSchema } from "type-graphql";
import { createConnection } from "typeorm";

(async () => {
  await createConnection();

  const schema = await buildSchema({
    resolvers: [__dirname + "/resolvers/**/*.ts"]
  });

  const server = new ApolloServer({
    schema
  });

  const app = express();
  server.applyMiddleware({ app });

  app.listen({ port: 4000 }, () =>
    console.log(`Server ready at http://localhost:4000${server.graphqlPath}`)
  );
})();
