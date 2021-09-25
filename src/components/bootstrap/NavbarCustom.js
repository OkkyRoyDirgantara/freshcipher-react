import React from "react";
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";

const NavbarCustom = ({activity, ...app}) => {
    return(
        <div>
            <Navbar bg={"info"} variant={"light"} expand={"lg"}>
                <Container>
                    <Navbar.Brand href={"#home"}>Freshcipher</Navbar.Brand>
                    <Navbar.Toggle aria-controls={"basic-navbar-nav"}/>
                    <Navbar.Collapse>
                        <Nav className={"me-auto"}>
                            <Nav.Link {...activity} href={"/"}>Home</Nav.Link>
                            <NavDropdown title={"Course"} id={"navbarScrollingDropDown"}>
                                <NavDropdown.Item href={"/java"}>Java</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link href={"/login"}>Login</Nav.Link>
                            <Nav.Link href={"/Register"}>Register</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavbarCustom;
