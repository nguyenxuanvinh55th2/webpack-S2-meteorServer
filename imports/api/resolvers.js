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
    addTask(_,{name}) {
      Tasks.insert({name:name})
      return Tasks.find({}).fetch();
   },
   addRegister(_,{email,pass}){
     let us ={email: email, password: pass}
    //Accounts.createUser(us)
     return true;
   }
 }
};
