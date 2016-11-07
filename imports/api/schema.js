import { makeExecutableSchema } from 'graphql-tools';

import resolvers from './resolvers';

const schema = [`
  type Post {
    _id:String
    title: String
    author: String
    votes: Int
  }

  # the schema allows the following query:
  type Query {
    posts: [Post]
  }

  # this schema allows the following mutation:
  type Mutation {
    upvotePost (postId: String,vote:Int): Post
  }

  type Subscription {
    postUpvoted: Post
  }
  schema {
    query: Query
    mutation: Mutation
    subscription: Subscription
  }
`];
export default makeExecutableSchema({
  typeDefs: schema,
  resolvers,
});
