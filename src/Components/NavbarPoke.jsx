import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Navbar, Nav, Form, Button, FormControl, NavDropdown } from 'react-bootstrap';

const NavbarPoke = ({ setSelectedGenerationProp }) => {
    const location = useLocation();
    const [selectedGeneration, setSelectedGeneration] = useState('all');

    const handleSearchSubmit = (e) => {
        e.preventDefault();
    };

    const handleGenerationSelect = (eventKey) => {
        setSelectedGeneration(eventKey);
        setSelectedGenerationProp(eventKey);
    };

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Link to="/" className="navbar-brand">Pokèdex</Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Link to="/battleground" className={location.pathname === '/battleground' ? 'nav-link active' : 'nav-link'}>Battleground</Link>
                    <Link to='/mydeck' className={location.pathname === '/mydeck' ? 'nav-link active' : 'nav-link'}>My Deck</Link>
                    <Link to='/generation' className={location.pathname === '/generation' ? 'nav-link active' : 'nav-link'}>Generation</Link>
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