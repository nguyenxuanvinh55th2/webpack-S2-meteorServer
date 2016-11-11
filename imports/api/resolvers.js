import { pubsub } from './subscription';
import {Posts} from './post'
import {Comments} from './comments'
import {Meteor} from 'meteor/meteor'
import __ from 'lodash'
const resolveFunctions = {
  Query: {
    posts(_,{userId}) {
      return Posts.find({"userId":userId}).fetch();
    }
  },
  Mutation: {
    upvotePost(_, { postId,vote }) {
      Posts.update({_id:postId}, {$set:{
        votes:vote
      }});
      var post = Posts.findOne({_id:postId});
      //pubsub.publish('postUpvoted', post);
      return post;
    },
  },
  Subscription: {
    postUpvoted(post) {
      return post;
    },
  },
  Post :{
    comments(root){
      return Comments.find({"postId":root._id}).fetch();
    }
  },
  Comment :{
    async  user(root){
      // console.log(root.userId,Meteor.users.find({"_id":root.userId}).fetch());

      return await Meteor.users.findOne({"_id":root.userId});
    }
  }
};

export default resolveFunctions;
