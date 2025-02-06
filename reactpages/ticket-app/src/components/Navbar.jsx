import { Container, Navbar as BootstrapNavbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <BootstrapNavbar bg="dark" variant="dark" expand="lg">
      <Container>
        <BootstrapNavbar.Brand as={Link} to="/">
          🎫 Event Registration
        </BootstrapNavbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/">
            🏠 Home
          </Nav.Link>
          <Nav.Link as={Link} to="/contact">📩 Contact</Nav.Link>

        </Nav>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;
