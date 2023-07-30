import { Outlet, Link } from "react-router-dom";
import { Navbar,Nav,Container,Table} from 'react-bootstrap';

const Layout = () => {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
        <Navbar.Brand href="#home">Resto</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home"><Link to="/">Home</Link></Nav.Link>
            <Nav.Link href="#create"><Link to="/create">Create</Link></Nav.Link>
            <Nav.Link href="#list"><Link to="/list">List</Link></Nav.Link>
            <Nav.Link href="#search"><Link to="/search">Search</Link></Nav.Link>
            {/* <Nav.Link href="#update"><Link to="/update">Update</Link></Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>
      <Outlet />
    </>
  )
};

export default Layout;