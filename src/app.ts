import { ApolloServer } from "apollo-server";
import { typeDefs } from "./types/typeDefinition"


export const server = new ApolloServer({
    typeDefs,
    resolvers: {
        Query: {
            user: () => "Hello World! I am a new user",
        },
    },
})