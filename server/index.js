import {loadSchemaSync} from '@graphql-tools/load';
import {GraphQLFileLoader} from '@graphql-tools/graphql-file-loader';
import {ApolloServer} from '@apollo/server';
import {startStandaloneServer} from '@apollo/server/standalone';
import {resolvers} from './graphql/queries.js';

const schema = loadSchemaSync(
    './graphql/schema.graphql',
    {loaders: [new GraphQLFileLoader()]}
);

const server = new ApolloServer({
    typeDefs: schema,
    resolvers: resolvers
});

startStandaloneServer(server, {listen: {port: 4000},})
    .then(({url}) => console.log(`Running a GraphQL API server at ${url}`));