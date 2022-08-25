import React from "react";
import styled from 'styled-components';

const StyledConteiner = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
font-size: 1rem;

`;


function Login() {
    const [values, setValues] = React.useState({
        email: "",
        password: "",
    });

    function handleSubmit(evt) {
        /*
          Previene el comportamiento default de los
          formularios el cual recarga el sitio
        */
        evt.preventDefault();
        console.log("LOGIN: ", values);
        // Aquí puedes usar values para enviar la información
    }

    function handleChange(evt) {
        /*
          evt.target es el elemento que ejecuto el evento
          name identifica el input y value describe el valor actual
        */
        const { target } = evt;
        const { name, value } = target;
        /*
          Este snippet:
          1. Clona el estado actual
          2. Reemplaza solo el valor del
             input que ejecutó el evento
        */
        const newValues = {
            ...values,
            [name]: value,
        };
        // Sincroniza el estado de nuevo
        setValues(newValues);
    }

    return (
        <StyledConteiner>
            <form onSubmit={handleSubmit}>
                <br>
                </br>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        value={values.email}
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
                        value={values.password}
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