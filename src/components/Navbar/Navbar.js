import React from "react";
import { Container, Nav, Navbar, NavbarBrand, NavLink } from 'react-bootstrap';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from '../About/About';
import Courses from '../Courses/Courses';

import Settings from '../Settings/Settings';
import SignUp from '../SignUp/SignUp';
import Suffice from '../Suffice/Suffice'
import LogIn from "../Log in/LogIn";


const Header = () => {
    return (
        <><><Navbar bg="dark" variant="dark">
            <Container>


                <Nav className="me-auto">
                    {/*<Navbar.Brand href="/"> Suffice </Navbar.Brand>*/}
                    <Nav.Link as={Link} to="/suffice">Suffice</Nav.Link>
                    {/* <Nav.Link as={Link} to="/about">About</Nav.Link> */}
                    <Nav.Link as={Link} to="courses">Courses</Nav.Link>
                    {/* <Nav.Link as={Link} to="/settings">Settings</Nav.Link> */}
                    <Nav.Link as={Link} to="/signUp">Sign Up</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        </>
            <div>
                <Routes>

                    <Route path="/about" element={<About />}></Route>
                    <Route path="/courses" element={<Courses />}></Route>
                    <Route path="/suffice" element={<Suffice />}></Route>
                    <Route path="/signup" element={<SignUp />}></Route>
                    <Route path="/login" element={<LogIn />}></Route>
                    <Route path="/signup" element={<SignUp />}></Route>


                </Routes>
            </div></>
    )


}

export default Header;