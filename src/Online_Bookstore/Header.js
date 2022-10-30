import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import {Link} from "react-router-dom"

const Header = () => {
  return (
      <>
          <Navbar bg="dark" variant="dark">
              <Container>
                {
                    window.localStorage.getItem("user_login")?
                    <Nav className="me-auto">
                    <Link to="/" onClick={()=>window.localStorage.removeItem("user_login")} className="text-decoration-none text-light mx-2">logout</Link>
                    <Link to="bookstore" className="text-decoration-none text-light mx-2">Dashboard</Link>
                    </Nav>: 
                    <>
                    <Link to="/" className="text-decoration-none text-light mx-2">User Registration</Link>
                    <Nav className="me-auto">
                        {/* <Link to="bookstore" className="text-decoration-none text-light mx-2">Dashboard</Link> */}
                        <Link to="Login" className="text-decoration-none text-light">Login</Link>
                    </Nav>
                    </>
                }
                 
              </Container>
          </Navbar>
      </>
  )
}

export default Header