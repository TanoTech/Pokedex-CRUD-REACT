import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, Form, Button, FormControl } from 'react-bootstrap';
import './Nav.css'

class NavbarPoke extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchQuery: '',
        };
    }

    handleSearchChange = (e) => {
        this.setState({ searchQuery: e.target.value });
    };

    handleSearchSubmit = (e) => {
        e.preventDefault();
        const { searchQuery } = this.state;

    };


    render() {
        const { searchQuery } = this.state;
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <LinkContainer to="/">
                    <Navbar.Brand>Pokèdex</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <LinkContainer to="/firstgeneration"><Nav.Link>First Gen</Nav.Link></LinkContainer>
                        <LinkContainer to="/secondgeneration"><Nav.Link>Second Gen</Nav.Link></LinkContainer>
                        <LinkContainer to="/thirdgeneration"><Nav.Link>Third Gen</Nav.Link></LinkContainer>
                        <LinkContainer to="/fourthgeneration"><Nav.Link>Fourth Gen</Nav.Link></LinkContainer>
                        <LinkContainer to="/fifthgeneration"><Nav.Link>Fifth Gen</Nav.Link></LinkContainer>
                        <LinkContainer to="/sixthgeneration"><Nav.Link>Sixth Gen</Nav.Link></LinkContainer>
                        <LinkContainer to="/seventhgeneration"><Nav.Link>Seventh Gen</Nav.Link></LinkContainer>
                        <LinkContainer to="/eighthgeneration"><Nav.Link>Eighth Gen</Nav.Link></LinkContainer>
                        <LinkContainer to="/ninethgeneration"><Nav.Link>Nineth Gen</Nav.Link></LinkContainer>
                    </Nav>
                    <Form inline onSubmit={this.handleSearchSubmit} className='d-flex'>
                        <FormControl
                            type="text"
                            placeholder="Search Pokémon"
                            value={this.searchQuery}
                            onChange={this.handleSearchChange} />
                        <Button variant="outline-info" type="submit">
                            Cerca
                        </Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}


export default NavbarPoke;