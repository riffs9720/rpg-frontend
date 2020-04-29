import React from "react";

import {
  Nav,
  Navbar,
  NavDropdown,
  Form
} from "react-bootstrap";

import diceD20 from '@iconify/icons-fa-solid/dice-d20';
import { Icon } from '@iconify/react';
import logoutIcon from '@iconify/icons-ls/logout';




import "./barraNavegacaoMestre.css";

export default function BarraNavegacaoMestre() {
  return (
    <>
      <Navbar expand="lg" className="barraMestre">
  <Navbar.Brand href="/Mestre-Dashboard"><Icon icon={diceD20} width="50px" height="50px" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/Mestre-Dashboard" className="textoBarra">Dashboard</Nav.Link>
            <NavDropdown title="Cadastros" id="basic-nav-dropdown" className="textoBarra">
              <NavDropdown.Item href="/Mestre-CadastroDePlayer" className="textoBarra">Contratar Player</NavDropdown.Item>
              <NavDropdown.Item href="/Mestre-CadastroBestiario" className="textoBarra">
                Criar Monstro
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4" className="textoBarra">
                Criar Magia/Item
              </NavDropdown.Item>
              <NavDropdown.Item href="/Mestre-CadastroDeEquipamento" className="textoBarra">
                Criar Equipamento
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Listas" id="basic-nav-dropdown" className="textoBarra">
              <NavDropdown.Item href="/Mestre-CadastroDePlayer" className="textoBarra">Listar Player</NavDropdown.Item>
              <NavDropdown.Item href="/Mestre-CadastroBestiario" className="textoBarra">
                Listar Monstro
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4" className="textoBarra">
                Listar Magia
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4" className="textoBarra">
                Listar Item
              </NavDropdown.Item>
              <NavDropdown.Item href="/Mestre-CadastroDeEquipamento" className="textoBarra">
                Listar Equipamento
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <Icon icon={logoutIcon} width="20px" height="20px" />
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
