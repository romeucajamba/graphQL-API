import { ApolloServer } from "apollo-server";
import { typeDefs } from "./types/typeDefinition";
import { resolvers } from "./resolvers/resolvers";


export const server = new ApolloServer({
    typeDefs,
    resolvers,
})