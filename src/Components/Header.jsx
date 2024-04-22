import React from 'react'
import { Navbar, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Header() {
  return (
    <Navbar className="bg-success">
        <Container>
        <Link to={'./'} style={{textDecoration:'none'}} className='p-3'>
          <Navbar.Brand href="#home" style={{ textDecoration: 'none' }} className='text-dark'>
            <i className="fa-solid fa-headphones me-3"></i>
            Media
          </Navbar.Brand>
        </Link>
        </Container>
      </Navbar>
    )
}

export default Header