import React from 'react';
import { render } from 'react-dom';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import Application from './App';

import './reset.css';
import './style.scss';

const client = new ApolloClient({
  uri: 'http://starwars.asteriainc.se/graphql'
});

render(
  <ApolloProvider client={client}>
    <Application />
  </ApolloProvider>,
  document.getElementById('root')
);
