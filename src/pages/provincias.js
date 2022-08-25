import { useQuery, gql } from '@apollo/client';

const GET_PROVINVIAS_LIST = gql`
query {
  provincias {
    nodes {
      id
      nombre
    }
  }
}
`;

function Provincias() {
  const { loading, error, data } = useQuery(GET_PROVINVIAS_LIST);

  if (!data) return <h3>Data Nula</h3>;
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error:{error}</p>;

  return data.provincias.nodes.map(({ nombre, id }) => (
    <div key={id}>
      <h3>{nombre + ", " + id}</h3>
    </div>
  ));
}

export default Provincias;

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