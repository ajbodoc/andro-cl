import { useQuery, gql } from '@apollo/client';

const GET_USERS_LIST = gql`
query {
  users(first: 3) {
  nodes {
      apellido
      email
      nombre
      id
      perfil
    }
  }
}
`;

function UsersList() {
  const { loading, error, data } = useQuery(GET_USERS_LIST);

  if (!data) return <p>Data Nula</p>;
  console.log('DATA:', data);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error:{error}</p>;

  return data.users.nodes.map(({ nombre, apellido, email, id }) => (
    <div key={id}>
      <h3>{nombre + ", " + apellido}</h3>
      <p>{email}</p>
      <br />
    </div>
  ));
}

export default UsersList;

/*
const GET_USERS_LIST = gql`
query MyQuery {
  usuarios(first: 3) {
    nodes {
      apellido
      clienteId
      email
      nombre
      rol
      id
    }
  }
}
`;
*/