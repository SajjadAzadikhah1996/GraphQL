import {JalaliDateScalar} from './scalars/dateTimeScalar.js';

const SERVER_URL = 'http://localhost:9000';

export const resolvers = {
    JalaliDate: JalaliDateScalar,
    SearchResult: {
        __resolveType(obj, contextValue, info) {
            if (obj.title.startsWith('Author')) {
                return 'Author';
            }
            if (obj.title.startsWith('Developer')) {
                return 'Developer';
            }
            return null; // GraphQLError is thrown
        },
    },
    Query: {
        books: async () => {
            const res = await fetch(`${SERVER_URL}/books?_expand=author`);
            return res.json();
        },
        authors: async () => {
            const res = await fetch(`${SERVER_URL}/authors?_embed=books`);
            return res.json();
        },
        book: async (patent, args) => {
            const res = await fetch(`${SERVER_URL}/books/${args.id}?_expand=author`);
            return res.json();
        },
        author: async (parent, args) => {
            const res = await fetch(`${SERVER_URL}/authors/${args.id}?_embed=books`);
            return res.json();
        },
        hexColor: (parent, {color}, context) => {
            return color;
        },
        search: async (parent, args) => {
            const fetchAuthor = async () => {
                const res = await fetch(`${SERVER_URL}/authors/${args.id}?_embed=books`);
                if (res.status !== 200)
                    return null;
                return res.json();
            };
            const fetchDeveloper = async () => {
                const res = await fetch(`${SERVER_URL}/developers/${args.id}`);
                if (res.status !== 200)
                    return null;
                return res.json();
            };
            return await Promise.all([fetchAuthor(), fetchDeveloper()]);
        }
    },
    Author: {
        book(author, {index}) {
            return author.books[index];
        }
    }
};