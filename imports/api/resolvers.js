import { Tasks } from './task';
module.exports= {
  Query: {
     hello(root,{user}) {
      //  console.log(user);
      return  Tasks.find({}).fetch();
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
 },
 Subscription:{
   showTast(_){
     return "vinh";
   }
 }
};
