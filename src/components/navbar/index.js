import React from "react";
import {
    Nav,
    NavLogo,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from "./NavbarElements";

const Navbar = () => {
    return (
        <>
           <Nav>
            <NavLogo to="/">
                Logo
            </NavLogo>
            <Bars />

            <NavMenu>
                <NavLink 
                  to="/"
                  activestyle={{ color:'black' }}
                >
                    Home
                </NavLink>
                <NavLink 
                  to="/about"
                  activestyle={{ color: 'black' }}
                >
                    About
                </NavLink>
                <NavLink 
                  to="/login" 
                  activestyle={{ color: 'black' }}
                >
                    Login
                </NavLink>
                <NavLink
                  to="/usersList"
                  activestyle={{ color: 'black' }}
                >
                    Usuarios
                </NavLink>
                <NavLink
                  to="/provincias"
                  activestyle={{ color: 'black' }}
                >
                    Provincias
                </NavLink>
            </NavMenu>
           </Nav> 
        </>
    );
};
export default Navbar;