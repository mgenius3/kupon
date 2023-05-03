import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

export default function MainHeader() {
  return (
    <>
      <Navbar bg="light" expand="md" className="py-3">
        <Navbar.Brand href="#home">
          <img
            src="/images/kupon logo with text (1).png"
            width="80"
            className="d-inline-block align-top"
            alt="Your Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/" className="text-uppercase mx-3">
              Home
            </Nav.Link>
            <Nav.Link href="/about#about" className="text-uppercase mx-3">
              About Us
            </Nav.Link>
            <Nav.Link href="/contact" className="text-uppercase mx-3">
              Contact Us
            </Nav.Link>
            <Nav.Link href="/logistics" className="text-uppercase mx-3">
              Logistics
            </Nav.Link>
            <Nav.Link
              href="/market#marketcollection"
              className="text-uppercase mx-3"
            >
              Market Place
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
