const { buildSchema } = require('graphql');

// ! => means required
module.exports = buildSchema(`
  type helloWorldData {
    name: String!
    description: String
    price: Int!
  }

  type CustomQuery {
      helloWorldQuery: helloWorldData!
  }

  schema {
      query: CustomQuery
  }
`);
