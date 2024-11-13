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
        data: {
          name: args.name,
          email: args.email,
          phone_number: args.phone_number,
        },
      });
      return user;
    },

    getUser: async (parent, args, ctx) => {
      const user = await conn.user.findUnique({
        where: { id: args.id },
      });
      return user;
    },

    updateUser: async (parent, args, ctx) => {
      const user = await conn.user.update({
        where: { id: args.id },
        data: {
          name: args.name,
          email: args.email,
          phone_number: args.phone_number,
        },
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
