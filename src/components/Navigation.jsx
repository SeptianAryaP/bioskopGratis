import { Navbar, Container, Nav } from "react-bootstrap";

export default function NavigationBar() {
  return (
    <div>
      <Navbar variant="dark">
        <Container>
          <Navbar.Brand href="/">KOMO FILMS</Navbar.Brand>
          <Nav>
            <Nav.Link href="#trending">TRENDING</Nav.Link>
            <Nav.Link href="#superhero">SUPERHERO</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
