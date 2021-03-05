import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import ProductsList from '../components/ProductsList';

const Home = () => {

    return (
        <>
            <Container fluid>
                <ProductsList />
            </Container>
        </>
    );
};

export default Home;
