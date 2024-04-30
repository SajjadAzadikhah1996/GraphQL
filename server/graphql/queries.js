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
        hello: () => 'Hello, World!'
    }
};