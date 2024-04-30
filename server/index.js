import {ApolloServer} from '@apollo/server';
import {startStandaloneServer} from '@apollo/server/standalone';

const server = new ApolloServer({
    typeDefs: `#graphql
    type Query {
        hello: String
    }`,
    resolvers: {
        Query: {
            hello: () => 'Hello, World!',
        },
    }
});

startStandaloneServer(server, { listen: { port: 4000 }, })
    .then(({ url }) => console.log(`Running a GraphQL API server at ${url}`));