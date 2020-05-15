const express = require('express');
const bodyParser = require('body-parser');

const graphqlHttp = require('express-graphql');

const schema = require('./graphql/schema');
const graphqlResolver = require('./graphql/resolvers');
const errorHandler = require('./routes/errorHandler');
const cors = require('./middleware/cors');
const sequelize = require('./util/sequelize');

const app = express();

app.use(bodyParser.json()); // application/json
app.use(cors);

app.use(
  '/graphql',
  graphqlHttp({
    schema,
    rootValue: graphqlResolver,
    graphiql: true
  })
);

sequelize
  // .sync({ force: true })
  .sync()
  .then(() => {
    console.log('Server started. GraphiQL: http://localhost:4000/graphql');
    app.listen(4000);
  }).catch(err => console.log(err));

app.use(errorHandler);
