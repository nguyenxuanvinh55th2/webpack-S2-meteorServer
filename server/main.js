import { Meteor } from 'meteor/meteor';

import { createApolloServer } from 'meteor/apollo';
import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';

import typeDefs from '../imports/api/schema';
import resolvers from '../imports/api/resolvers';

//collection
// import { User } from '../imports/api/user'
import '../imports/api/task'
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

createApolloServer({
  schema,
});
