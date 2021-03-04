import React, { useEffect, useState } from 'react'
import useForm from 'react-hook-form'
import { FormControl, InputGroup, Container, Row, Col, Button } from 'react-bootstrap'

const Home = () => {

    const [products, setProduct] = useState([
        { id: 1, produto: 'alface', price: '10,31' }
    ]);

    const setDataApi = async () => {
        const data = await fetch('http://localhost:8080/api/mercado');
        const items = await data.json();

        setItems(items);
    }

    useEffect(() => {
        setDataApi();
    }, []);


    return (
        <>
            <Container fluid>
                <Row>
                    <Col xs={12}>
                        <form>
                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                    <Button type="submit" variant="success">Incluir</Button>
                                </InputGroup.Prepend>
                                <FormControl ></FormControl>
                            </InputGroup>
                        </form>
                    </Col>
                </Row>

                {products.map((product) => (
                    <Row>
                        <Col xs={12}>
                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                    <InputGroup.Checkbox aria-label="checkbox for">
                                    </InputGroup.Checkbox>
                                </InputGroup.Prepend>

                                <FormControl key={product.id} value={product.produto}></FormControl>
                                <Button variant="danger">Delete</Button>
                            </InputGroup>
                        </Col>
                    </Row>
                ))}
            </Container>
        </>
    )
}



export default Home;