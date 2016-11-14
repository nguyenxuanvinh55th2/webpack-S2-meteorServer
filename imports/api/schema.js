import { makeExecutableSchema } from 'graphql-tools';

import resolvers from './resolvers';

const schema = [`
  type Post {
    _id:String
    caption:String
    likes: Int
    display_src: String
    comments: [Comment]
  }
  type User {
    _id:String
    address:String
  }
  type Comment {
    _id: String
    text:String
    userId:String
    user:User
  }
  # the schema allows the following query:
  type Query {
    posts(userId:String): [Post]
  }

  # this schema allows the following mutation:
  type Mutation {
    upvotePost (postId: String,vote:Int): Post,
    insertPost(caption: String,display_src:String): String,
    updateLikePost (postId:String):String,
    deletePost(postId:String):String
  }

  type Subscription {
    postUpvoted  (author:String): Post,
    subscriptPost : Post
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
