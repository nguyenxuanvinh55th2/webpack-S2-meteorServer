import { PubSub, SubscriptionManager } from 'graphql-subscriptions';
import schema from './schema';

const pubsub = new PubSub();
const subscriptionManager = new SubscriptionManager({
  schema,
  pubsub,
  setupFunctions: {
    postUpvoted: (options, args) => ({
      postUpvoted:{
    filter: post => post.author === args.author,
  }}),
  },
});

export { subscriptionManager, pubsub };
