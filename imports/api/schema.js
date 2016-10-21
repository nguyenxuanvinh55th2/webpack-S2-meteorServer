module.exports = [`
type Name {
  name:String
}
type Query {
  hello(userId:String): Name,
  vinh:String
},

type Mutation {
  addTask(name:String): [Name],
},
schema {
  query: Query,
   mutation: Mutation
}`];
