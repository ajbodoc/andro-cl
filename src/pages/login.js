import React from "react";
import styled from 'styled-components';
import { useMutation, gql } from '@apollo/client';

const StyledConteiner = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
font-size: 1rem;
`;

const USER_LOGIN = gql`
mutation usersLoginMut($email: String!, $password: String!) {
    usersLogin(input: {email: $email, passw: $password}) {
      jwtToken {
        role
        usersId
        expira
        clienteId
        divisionId
      }
    }
  }
`;


function Login() {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [login, { data, loading, error }] = useMutation(USER_LOGIN,{
        onCompleted: (data) => console.log("Data from mutation", data),
        onError: (error) => console.error("Error creating a post", error)
    }
   );


   function handleLogin(event) {
    event.preventDefault();
    // the mutate function also doesn't return a promise
    console.log('imput',{ email, password } );
    login({ variables: { email, password } });
  }

    return (
        <StyledConteiner >
            <form onSubmit={handleLogin}>
                <br>
                </br>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        value={data?.email}
                        onChange={(event) => setEmail(event.target.value)} 
                    />
                </div>

                <br>
                </br>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        value={data?.password}
                        onChange={(event) => setPassword(event.target.value)} 
                    />
                </div>

                <br>
                </br>
                <button  disabled={loading} type="submit">Sign Up</button>
                {error && <p>{error.message}</p>}
            </form>
        </StyledConteiner>
    );
}
export default Login;