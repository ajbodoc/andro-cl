import React from 'react';
import './App.css';
import LoginForm from './LoginForm';

import { useQuery, gql } from '@apollo/client';

var GET_LOCATIONS = gql`
  query GetLocations {
    locations {
      id
      name
      description
      photo
    }
  }
`;

function App() {
  return (
    <div>
      <h2>Login Apollo Client</h2>
      <br/>
      <LoginForm />
    </div>
  );
}

function DisplayLocations() {
  const { loading, error, data } = useQuery(GET_LOCATIONS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.locations.map(({ id, name, description, photo }) => (
    <div key={id}>
      <h3>{name}</h3>
      <img width="400" height="250" alt="location-reference" src={`${photo}`} />
      <br />
      <b>Sobre esta localización:</b>
      <p>{description}</p>
      <br />
    </div>
  ));
}

export default App;
