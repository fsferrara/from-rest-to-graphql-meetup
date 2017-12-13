console.log(`Loading graphql-tools - an utility to create a GraphQL schema`);
const {makeExecutableSchema} = require('graphql-tools');

console.log(`Loading require-text - a plugin for loading text resources`);
var requireText = require('require-text');

console.log(`Loading type definitions from schema.graphql`);
var typeDefs = requireText('./schema.graphql', require);

console.log(`Loading the resolvers`);
const resolvers = require('../resolvers');

console.log(`Generating the executable schema from combining together types and resolvers`);
module.exports = makeExecutableSchema({typeDefs, resolvers});
