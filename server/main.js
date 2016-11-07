import { Meteor } from 'meteor/meteor';
import express from 'express';
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { createServer } from 'http';
import { SubscriptionServer,Server } from 'subscriptions-transport-ws';
import { printSchema } from 'graphql/utilities/schemaPrinter';

import  '../imports/api/task'
import '../imports/api/post'

import { subscriptionManager } from '../imports/api/subscription';
import schema from '../imports/api/schema';
import createApolloClient from '../imports/create-apollo-client'
import { createApolloServer } from 'meteor/apollo';
const GRAPHQL_PORT = 8080;
const WS_PORT = 8090;

const graphQLServer = express().use('*', cors());

graphQLServer.use('/graphql', bodyParser.json(), graphqlExpress({
  schema,
  context: {},
}));

graphQLServer.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql',
}));

graphQLServer.listen(GRAPHQL_PORT, () => console.log(
  `GraphQL Server is now running on http://localhost:${GRAPHQL_PORT}/graphql`
));

// WebSocket server for subscriptions
const websocketServer = createServer((request, response) => {
  response.writeHead(404);
  response.end();
});

websocketServer.listen(WS_PORT, () => console.log( // eslint-disable-line no-console
  `Websocket Server is now running on http://localhost:${WS_PORT}`
));


// eslint-disable-next-line
new SubscriptionServer(
  { subscriptionManager },
  websocketServer
);
