import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ApolloClient, InMemoryCache, gql, ApolloProvider } from '@apollo/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
const client = new ApolloClient({ 
  uri: 'https://flyby-gateway.herokuapp.com/', 
  cache: new InMemoryCache(), 
});

root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
);

/*
client
  .query({
    query: gql`
      query GetLocations {
        locations {
          id
          name
          description
          photo
        }
      }
    `,
  })
  .then((result) => console.log(result))
  .catch(err => console.error(err));
*/


