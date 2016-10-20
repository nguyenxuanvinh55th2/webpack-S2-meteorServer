import { Tasks } from './task';
module.exports= {
  Query: {
     hello(root,{userId}) {
      //  console.log("root",userId);
      let task = Tasks.find({}).fetch();
      let ob = {
        name:userId
      }
      return  ob;
    },
    vinh(root){
      return "worl"
    }
  },
  Mutation: {
    addTask(_) {
     return "vinh"
   },
 }
};
