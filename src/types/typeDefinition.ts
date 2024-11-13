import { gql } from "apollo-server";

// Definição do schema
export const typeDefs = gql`
type User {
  id: ID!
  name: String!
  email: String!
  phone_number: String!
}

type Query {
  users: [User!]!
}

type Mutation {
  createUser(name: String!, email: String!, phone_number: String!): User
  updateUser(id: ID!, name: String, email: String, phone_number: String): User
  deleteUser(id: ID!): Boolean
  getUser(id: ID!): User
}
`;
