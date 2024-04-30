import {JalaliDateScalar} from './scalars/dateTimeScalar.js';

const SERVER_URL = 'http://localhost:9000';

export const resolvers = {
    JalaliDate: JalaliDateScalar,
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
        hexColor: (parent, args) => {
            let hex = '';
            switch (args.name) {
                case 'RED':
                    hex= '#00ff00';
                    break;
                case 'GREEN':
                    hex= '#ff0000';
                    break;
                case 'BLUE':
                    hex= '#0000ff';
                    break;
            }
            return hex;
        }
    }
};