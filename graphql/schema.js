const { buildSchema } = require('graphql');

module.exports = buildSchema(`
  type User {
    id: ID!
    name: String!
    email: String!
    password: String
    city: String
    phone: String
  }

  input UserInput {
    name: String
    email: String
    password: String
    city: String
    phone: String
  }

  type Query {
    allUsers: [User]
    getUser(userId: ID!): User 
  }

  type Mutation {
    createUser(userInput: UserInput): User!
    updateUser(userId: ID!, userInput: UserInput): User!
    deleteUser(userId: ID!): User
  }

  schema {
    query: Query,
    mutation: Mutation
  }
`);
