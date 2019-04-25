import React from 'react';
import { Navbar } from 'react-bootstrap';

const Title = () => {
    return (
        <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="#">
                Weather App
            </Navbar.Brand>
        </Navbar>
    )
}

export default Title;