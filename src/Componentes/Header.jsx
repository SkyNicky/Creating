import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa'; // Importando ícone de carrinho
import styles from './Header.module.css';
import { Box } from '@chakra-ui/react';

export function Header() {
  return (
    <>
      <Navbar fixed='top' expand="lg" className={`bg-custom ${styles.navContainer}`}>
        <Container fluid>
          <Link to='/' className={styles.navbarBrand}>
            <Navbar.Brand as={Link} to="/"><i className="fa-solid fa-burger"></i></Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/" className={styles.navLink}>Home </Nav.Link>
              <Nav.Link as={Link} to="/Sobre" className={styles.navLink}>Sobre </Nav.Link>
              <Nav.Link as={Link} to="/Menu" className={styles.navLink}>Menu </Nav.Link>
              <Nav.Link as={Link} to="/Contato" className={styles.navLink}>Contato </Nav.Link>
              <Nav.Link as={Link} to="/Conta" className={styles.navLink}>Conta</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <hr style={{ margin: 1, borderColor: 'black' }} />
    </>
  );
}

