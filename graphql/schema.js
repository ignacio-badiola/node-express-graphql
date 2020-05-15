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
    name: String!
    email: String!
    password: String!
    city: String
    phone: String
  }

  type Query {
    allUsers: [User]
  }

  type Mutation {
    createUser(userInput: UserInput): User!
  }

  schema {
    query: Query,
    mutation: Mutation
  }
`);
