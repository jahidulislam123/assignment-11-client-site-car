import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../firebase.init';
import logo from '../images/car-logo-removebg-preview.png';
import './Header.css'

const Header = () => {
  const [user]=useAuthState(auth);
  const handleSignOut=()=>{
    signOut(auth);
  }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand as={Link} to='/'>
      <img style={{width:'85px'}} className="" src={logo} alt="" />
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link as={Link} to='/home'>Inventory</Nav.Link>
      
    </Nav>
    <Nav>
     
      
      
      <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
      {
        user ?
        <div className='d-flex'> <Nav.Link as={Link} to="/manageInventory">ManageItem</Nav.Link> &&
        <Nav.Link as={Link} to="/addItem">Add Item</Nav.Link>
        &&
        <Nav.Link as={Link} to="/myItem">My Item</Nav.Link>
        &&
        <button className='bg-primary-button' onClick={handleSignOut}>SignOut</button>
        </div>
        :
        <Nav.Link className='bg-primary-button-login' as={Link} to="/login" href="#memes">
        LogIn
      </Nav.Link>
      }
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;