import React, {FC} from 'react';
import {NavLink} from "react-router-dom";
import {Container, Nav, Navbar as NavbarBs} from "react-bootstrap";

export const Navbar:FC = () => {
    return (
        <NavbarBs className='bg-white shadow-lg mb-3'>
            <Container>
                <Nav>
                  <Nav.Link to={'/'} as={NavLink}>Home</Nav.Link>
                  <Nav.Link to={'/store'} as={NavLink}>Store</Nav.Link>
                  <Nav.Link to={'/about'} as={NavLink}>About</Nav.Link>
                </Nav>
            </Container>
        </NavbarBs>
    );
};

