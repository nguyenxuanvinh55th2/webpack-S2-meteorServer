module.exports = [`
type Name {
  name:String
}
type Query {
  hello(user:String): [Name]
},

type Mutation {
  addTask(name:String): [Name],
  addRegister(email: String, pass: String):Boolean
},
type Subscription {
  showTast : String
},
schema {
  query: Query,
   mutation: Mutation,
   subscription:Subscription
}`];
