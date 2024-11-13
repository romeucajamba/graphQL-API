import { conn } from "../db/prisma";

// Definição dos resolvers
export const resolvers = {
  Query: {
    users: async () => {
      return await conn.user.findMany({});
    },
  },
  Mutation: {
    createUser: async (parent, args, ctx) => {
      const user = await conn.user.create({
        data: args,
      });
      return user;
    },
    updateUser: async (parent, args, ctx) => {
      const user = await conn.user.update({
        where: { id: args.id },
        data: args,
      });
      return user;
    },
    deleteUser: async (parent, args, ctx) => {
      const result = await conn.user.delete({
        where: { id: args.id },
      });
      return result ? true : false;
    },
  },
};
