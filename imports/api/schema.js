module.exports = [`
type Name {
  name:String
}
type Query {
  hello(userId:String): Name,
  vinh:String
},

type Mutation {
  addTask: String,
},
schema {
  query: Query,
   mutation: Mutation
}`];
