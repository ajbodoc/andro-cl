import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ApolloClient, createHttpLink, InMemoryCache, ApolloProvider } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const root = ReactDOM.createRoot(document.getElementById('root'));

const httpLink = createHttpLink({
  uri: 'http://localhost:5000/graphql/'
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const jwtoken = localStorage.getItem('jwtoken');
  console.log('index jwtoken', jwtoken);
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: jwtoken ? `Bearer ${jwtoken}` : "",
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

/*
const httpLink = {
  uri: 'http://localhost:5000/graphql/', 
  headers: {
    Authorization: 'Bearer ' + jwtoken
  }
}

const client = new ApolloClient({ 
  link: new HttpLink(httpLink),
  cache: new InMemoryCache(), 
});
*/

root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
);


