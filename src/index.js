console.log(`Loading the executable schema and the resolvers`);
const schema = require('./schema');

console.log(`Loading body-parser - an express middleware for parsing JSON`);
const bodyParser = require('body-parser');

console.log(`Loading express - a web application framework for node`);
const express = require('express');
var app = express();

console.log(`Loading apollo-server-express - an implementation of GraphQL server`);
const {graphqlExpress} = require('apollo-server-express');

console.log(`Defining /graphql endpoint`);
app.use('/graphql', bodyParser.json(), graphqlExpress({schema}));

console.log(`Starting GraphQL server`);
const PORT = 3000
app.listen(PORT, () => {
  console.log(`GraphQL server running on port ${PORT}.`);
});
