import React from 'react';
import ReactDOM from 'react-dom';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import {WebSocketLink} from '@apollo/client/link/ws';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'shards-ui/dist/css/shards.min.css';

import './index.css';

import Chat from './Chat';

const link = new WebSocketLink({
	uri: `ws://localhost:4000/`,
	options: {
		reconnect: true
	}
});
const client = new ApolloClient({
	link,
	uri: 'http://localhost:4000',
	cache: new InMemoryCache()
});

const App = () => (
	<ApolloProvider client={client}>
		<Chat />
	</ApolloProvider>
);

ReactDOM.render(<App />, document.getElementById('app'));
