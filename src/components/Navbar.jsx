import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../images/pricewise-logo.png";

function AppNavbar() {
  return (
    <Navbar className="navbar-gradient" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="text-white fw-semibold">
          <img
            src={logo}
            alt="PriceWise Logo"
            style={{ width: "45px", height: "45px", marginRight: "2px" }}
          />
          PriceWise
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-dark" />
        <Navbar.Collapse id="navbar-dark">
          <Nav className="ms-auto">
            <Nav.Link
              as={NavLink}
              to="/inventory"
              className={({ isActive }) =>
                isActive
                  ? "nav-link active fw-bold text-white"
                  : "nav-link text-white"
              }
            >
              Inventory
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/overhead"
              className={({ isActive }) =>
                isActive
                  ? "nav-link active fw-bold text-white"
                  : "nav-link text-white"
              }
            >
              Overhead
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/builder"
              className={({ isActive }) =>
                isActive
                  ? "nav-link active fw-bold text-white"
                  : "nav-link text-white"
              }
            >
              Builder
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/pricing"
              className={({ isActive }) =>
                isActive
                  ? "nav-link active fw-bold text-white"
                  : "nav-link text-white"
              }
            >
              Pricing
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
