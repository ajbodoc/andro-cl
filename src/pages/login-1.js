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
mutation usersLoginMut($email: String!, $passw: String!) {
    usersLogin(input: {email: $email, passw: $passw}) {
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
    let email= "";
    let password= "";
    const [login, { data, loading, error }] = useMutation(USER_LOGIN, {
        email,
        password,
    });

    //if (!data) return <h3>Data Nula</h3>;
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error:{error}</p>;


    function handleChange(evt) {
        /*
          evt.target es el elemento que ejecuto el evento
          name identifica el input y value describe el valor actual
        */
        const { target } = evt;
        const { name, value } = target;
        if (name=="email"){ email = value}
        if (name=="password"){ password = value}

        /*
          Este snippet:
          1. Clona el estado actual
          2. Reemplaza solo el valor del
             input que ejecutó el evento

        const newValues = {
            email: "",
            password: "",
        };
        */
        // Sincroniza el estado de nuevo
        //setValues(newValues);
    }

    return (
        <StyledConteiner >
            <form onSubmit={e => {
                e.preventDefault();
                console.log("imput ", {email, password});
                //login();
                console.log("data",data);
            }} >
                <br>
                </br>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        value={data?.email}
                        onChange={handleChange}
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
                        onChange={handleChange}
                    />
                </div>

                <br>
                </br>
                <button type="submit">Sign Up</button>
            </form>
        </StyledConteiner>
    );
}
export default Login;