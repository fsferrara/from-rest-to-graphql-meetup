console.log(`Loading graphql-tools - an utility to create a GraphQL schema`);
const {makeExecutableSchema} = require('graphql-tools');

console.log(`Loading require-text - a plugin for loading text resources`);
var requireText = require('require-text');

console.log(`Loading type definitions from reservations.graphqls`);
var typeDefs = requireText('./reservations.graphqls', require);

console.log(`Loading the resolvers`);
const resolvers = require('./resolvers.js');

console.log(`Generating the executable schema from combining together types and resolvers`);
module.exports = makeExecutableSchema({typeDefs, resolvers});
