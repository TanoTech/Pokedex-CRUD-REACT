import React from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { Navbar, Nav, Form, Button, FormControl, NavDropdown } from 'react-bootstrap';
import './Nav.css';

const NavbarPoke = () => {
    const location = useLocation();
    const handleSearchSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Link className="navbar-brand">Pokèdex</Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Link to="/battleground" className={location.pathname === '/battleground' ? 'nav-link active' : 'nav-link'}>Battleground</Link>
                    <Link to='/mydeck' className={location.pathname === '/mydeck' ? 'nav-link active' : 'nav-link'}>My Deck</Link> 
                    <NavDropdown title='Generation'>
                        <Link to="/firstgeneration" className={location.pathname === '/firstgeneration' ? 'dropdown-item active' : 'dropdown-item'}>First Gen</Link>
                        <Link to="/secondgeneration" className={location.pathname === '/secondgeneration' ? 'dropdown-item active' : 'dropdown-item'}>Second Gen</Link>
                        <Link to="/thirdgeneration" className={location.pathname === '/thirdgeneration' ? 'dropdown-item active' : 'dropdown-item'}>Third Gen</Link>
                        <Link to="/fourthgeneration" className={location.pathname === '/fourthgeneration' ? 'dropdown-item active' : 'dropdown-item'}>Fourth Gen</Link>
                        <Link to="/fifthgeneration" className={location.pathname === '/fifthgeneration' ? 'dropdown-item active' : 'dropdown-item'}>Fifth Gen</Link>
                        <Link to="/sixthgeneration" className={location.pathname === '/sixthgeneration' ? 'dropdown-item active' : 'dropdown-item'}>Sixth Gen</Link>
                        <Link to="/seventhgeneration" className={location.pathname === '/seventhgeneration' ? 'dropdown-item active' : 'dropdown-item'}>Seventh Gen</Link>
                        <Link to="/eighthgeneration" className={location.pathname === '/eighthgeneration' ? 'dropdown-item active' : 'dropdown-item'}>Eighth Gen</Link>
                        <Link to="/ninethgeneration" className={location.pathname === '/ninethgeneration' ? 'dropdown-item active' : 'dropdown-item'}>Nineth Gen</Link>
                    </NavDropdown>
                </Nav>
                <Form inline onSubmit={handleSearchSubmit} className='d-flex'>
                    <FormControl
                        type="text"
                        placeholder="Search Pokémon" />
                    <Button variant="outline-danger" type="submit">
                        Search
                    </Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavbarPoke;