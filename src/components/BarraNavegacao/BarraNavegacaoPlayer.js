import React, { useCallback } from 'react';

import {
  Nav,
  Navbar,
  NavDropdown,
  Form
} from "react-bootstrap";


import diceD20 from '@iconify/icons-fa-solid/dice-d20';
import { Icon } from '@iconify/react';
import logoutIcon from '@iconify/icons-ls/logout';

import useAuth from '../../hooks/useAuth';




import "./barraNavegacaoMestre.css";

export default function BarraNavegacaoMestre() {
  const { signOut } = useAuth();

  const handleSignOut = useCallback( () => {
      signOut();
  }, [signOut]);
  return (
    <>
      <Navbar expand="lg" className="barraMestre">
        <Navbar.Brand href="/Player-Ficha"><Icon icon={diceD20} width="50px" height="50px" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/Player-Ficha" className="textoBarra">Ficha</Nav.Link>
          </Nav>
          <Form inline>
            <Icon icon={logoutIcon} onClick={ handleSignOut } width="20px" height="20px" className="botaoLogout" />
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
