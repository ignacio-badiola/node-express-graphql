const express = require('express');
const bodyParser = require('body-parser');

const graphqlHttp = require('express-graphql');

const graphqlSchema = require('./graphql/schema');
const graphqlResolver = require('./graphql/resolvers');
const errorHandler = require('./routes/errorHandler');
const cors = require('./middleware/cors');

const app = express();

app.use(bodyParser.json()); // application/json
app.use(cors);

app.use(
  '/graphql',
  graphqlHttp({
    schema: graphqlSchema,
    rootValue: graphqlResolver,
    graphiql: true
  })
);

app.use(errorHandler);

sequelize
  // .sync({ force: true })
  .sync()
  .then(() => {
    app.listen(4000);
  }).catch(err => console.log(err));
