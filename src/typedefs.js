const { gql } = require('apollo-server');

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  # This "User" type defines the queryable fields for every user in our data source.
  type User {
    id: Int!
    name: String!
    email: String!
    password: String!
    recipes: [Recipe!]!
    token:String
  }

  type Recipe {
    id: Int!
    title: String!
    ingredients: String!
    direction: String!
    user: User!
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query { 
    user(id: Int!): User
    allRecipes: [Recipe!]!
    recipe(id: Int!): Recipe
  }

  type Mutation { 
    addUser(name: String!, email: String!, password: String!): User!
    addRecipe(userId: Int!, title: String!, ingredients: String!, direction: String!): Recipe!
    updateRecipe(id: ID!, title: String!): Boolean!
    deleteRecipe(id: ID!): Boolean!
  }





`;

module.exports = typeDefs;