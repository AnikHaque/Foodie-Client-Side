 import { Box } from '@mui/material';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
 import useAuth from '../../hooks/useAuth';
import './Navigation.css';

const Navigation = () => {
   const {user, logOut, admin} = useAuth();
    return (
        <div className=''>
           <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='navbarmenu'>
  <Container fluid>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mx-auto">
       <Navbar.Brand href="#home" className='fw-bold fs-3 text-white nav-logo'>FOODIE</Navbar.Brand>
       
      <Nav.Link as={Link} to="/home" className='fs-5 text-white   nav-home me-3'>Home</Nav.Link>
      <Nav.Link as={Link} to="/about" className='text-dark fs-5 text-white nav-home me-3'>About</Nav.Link>
      <Nav.Link as={Link} to="/reservation" className='text-white fs-5 nav-home me-3'>Reservation</Nav.Link>
      <Nav.Link as={Link} to="/menu" className='text-white nav-home  fs-5 me-3 '>Menu</Nav.Link>
      <Nav.Link as={Link} to="/blog" className='text-white nav-home  fs-5 me-3'>Blog</Nav.Link>
      <Nav.Link as={Link} to="/gallary" className='text-white nav-home fs-5 me-3 '>Gallary</Nav.Link>
      {
            !admin &&  <Box>
                <Nav.Link as={Link} to="/contact" className='text-white fs-5 '>Contact</Nav.Link>  
              </Box>
             
          }
         
     
    </Nav>

    <Nav> 
    {
    admin && user.email && <Box>
      
      <Nav.Link as={Link} to="/gallary" className='text-white fs-5 '>
    <NavDropdown title="Admin Dashboard">
      
        <NavDropdown.Item>
        {
    admin &&
    <Nav.Link as={Link} to="/orders" className='text-white bg-dark fs-5'>{user.displayName}</Nav.Link> 
  }
        </NavDropdown.Item>
        <NavDropdown.Item>
        {
    admin &&
    <Nav.Link as={Link} to="/orders" className='text-dark fs-5'>All Orders</Nav.Link> 
  }
        </NavDropdown.Item>
        <NavDropdown.Item >
        {
    admin &&
    <Nav.Link as={Link} to="/addmenu" className='text-dark fs-5'>Add Menu</Nav.Link> 
  } 
        </NavDropdown.Item>
        <NavDropdown.Item >{
    admin &&
    <Nav.Link as={Link} to="/makeadmin" className='text-dark fs-5'>Make Admin</Nav.Link> 
  } </NavDropdown.Item>
      </NavDropdown> 

    </Nav.Link> 
       
       
      </Box>
     
  }

  {
    !admin && user.email && <Box>
      
       <Nav.Link as={Link}  className='text-white fs-5'><NavDropdown title="User Dashboard" className='text-white' id="navbarScrollingDropdown">
  <NavDropdown.Item>
  <Nav.Link as={Link} to="/" className='text-light bg-dark'><b className='fs-5'>{user.displayName}</b></Nav.Link> 
  </NavDropdown.Item>
  <NavDropdown.Item>
  <Nav.Link as={Link} to="/addreviews" className='text-dark fs-5'>Add Review</Nav.Link>
  </NavDropdown.Item>
  <NavDropdown.Item>  <Nav.Link as={Link} to="/myorders" className='text-dark fs-5'>My Order</Nav.Link> </NavDropdown.Item>
</NavDropdown>
</Nav.Link>  
       
       
      </Box>
     
  }      
        {
            user?.email ?
            <Nav.Link as={Link} to="/">
      <Button onClick={logOut} variant="light" className='text-dark '>LogOut</Button>
      </Nav.Link>
        
            :
            <Nav.Link as={Link} to="/login">
      <Button  variant="light" className='text-dark fw-bold me-5'>Login</Button>
      </Nav.Link>
          }
           
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Navigation;