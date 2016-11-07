import { find, filter } from 'lodash';
import { pubsub } from './subscription';
import {Posts} from './post'

const resolveFunctions = {
  Query: {
    posts() {
      return Posts.find({}).fetch();
    }
  },
  Mutation: {
    upvotePost(_, { postId,vote }) {
      Posts.update({_id:postId}, {$set:{
        votes:vote
      }});
      var post = Posts.findOne({_id:postId});
      pubsub.publish('postUpvoted', post);
      return post;
    },
  },
  Subscription: {
    postUpvoted(post) {
      return post;
    },
  }
};

export default resolveFunctions;
