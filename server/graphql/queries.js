export const resolvers = {
    Query: {
        books: async () => {
            const res = await fetch('http://localhost:9000/books');
            return res.json();
        },
        authors: async () => {
            const res = await fetch('http://localhost:9000/authors');
            return res.json();
        },
        book: async (patent, args) => {
            const res = await fetch(`http://localhost:9000/books/${args.id}`);
            return res.json();
        },
        author: async (parent, args) => {
            const res = await fetch(`http://localhost:9000/authors/${args.id}`);
            return res.json();
        },
    }
};