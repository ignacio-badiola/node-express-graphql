const { buildSchema } = require('graphql');

module.exports = buildSchema(`
  type helloWorldData {
    name: String!
    description: String!
    price: Int!
  }

  type RootQuery {
      helloWorldQuery: helloWorldData!
  }

  schema {
      query: RootQuery
  }
`);
