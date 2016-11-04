import { Meteor } from 'meteor/meteor';

import { createApolloServer } from 'meteor/apollo';
import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';

import typeDefs from '../imports/api/schema';
import resolvers from '../imports/api/resolvers';

import { PubSub, SubscriptionManager } from 'graphql-subscriptions';
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

const pubsub = new PubSub();
new SubscriptionManager({
  schema,
  pubsub
})
