import {GraphQLError, GraphQLScalarType, Kind} from 'graphql';
import {format, parseISO} from 'date-fns-jalali';

export const JalaliDateScalar = new GraphQLScalarType({
    name: 'JalaliDate',
    description: 'The `JalaliDate` scalar type parses date to iso and formats it to jalali date.',
    serialize(value) {
        if (typeof value !== 'string')
            throw new GraphQLError('GraphQL JalaliDate Scalar parser expected a string');
        return format(parseISO(value), 'yyyy/MM/dd hh:mm:ss');
    },
    parseValue(value) {
        if (typeof value !== 'string')
            throw new GraphQLError('GraphQL JalaliDate Scalar parser expected a string');
        return value;
    },
    parseLiteral(ast) {
        if (ast.kind === Kind.STRING) {
            return ast.value;
        }
        throw new GraphQLError(`Query error: can only parse strings as date but got a ${ast.kind} `);
    },
});