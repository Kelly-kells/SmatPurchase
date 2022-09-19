import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FcShop } from "react-icons/fc"
import { MdOutlineAddShoppingCart } from "react-icons/md"
import Badge from 'react-bootstrap/Badge';
import "./style.css"


function CollapsibleExample({totalItems}) {
  return (
    <Navbar className='nav' collapseOnSelect expand="lg" bg="dark" variant="dark ">
      <Container>
        <Navbar.Brand className='logo' ><FcShop /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>

          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
            <Badge pill className='badge'  > <MdOutlineAddShoppingCart /><span>{totalItems}</span>  </Badge>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;