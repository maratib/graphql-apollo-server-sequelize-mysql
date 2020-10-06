const { ApolloServer } = require('apollo-server')
const typeDefs = require('./typedefs')
const resolvers = require('./resolvers')
const models = require('../models')

function cb(req) {
	console.log('Here we are');
	req.next();

}

const server = new ApolloServer({
	typeDefs, resolvers, context: { models }
})

server.listen().then((url) => {
	console.log(`🚀  Server ready at ${url.url}`);
})



