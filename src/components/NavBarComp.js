import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

export default function NavBarComp() {
    return(
        <>
            {/* <Navbar bg="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            src="/logo.svg"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                </Container>
            </Navbar> */}
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
                <Container className="flex justify-center">
                    <Navbar.Brand href="/" className="me-auto">
                        <img
                            src="/assets/logos/genio2k22-high-res.png"
                            height="30"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        {/* <Nav.Link href="/events">Events</Nav.Link>
                        <Nav.Link href="/events/coding">Coding</Nav.Link> */}
                        </Nav>
                        <Nav>
                        <Nav.Link href="/events">Events</Nav.Link>
                        <Nav.Link href='https://forms.gle/WQPVqAQxNGeEw25S8' target={'_blank'}>Register</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}