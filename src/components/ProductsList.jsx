import React, { useEffect, useState } from 'react'
import InputProducts from './InputProducts'
import { FormControl, InputGroup, Row, Col, Button, Alert } from 'react-bootstrap'

const ProductsList = () => {

    const [todos, setTodos] = useState([])

    const addTodo = todo => {
        const newTodos = [todo, ...todos]

        setTodos(newTodos)
        console.log(...todos);
    }

    const setStatus = e => {

        let setClass = e.target.classList.contains('alert-danger');
        console.log(setClass);


    }

    return (
        <>
            <InputProducts onSubmit={addTodo} />
            <Row>
                <Col xs={12}>
                    <h1>plan for today</h1>

                    {todos.map((todo) => (
                        <Alert variant="danger" onClick={setStatus}>{todo.text}</Alert>
                    ))}
                    {/* <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Checkbox aria-label="checkbox for">
                                </InputGroup.Checkbox>
                            </InputGroup.Prepend>

                            <FormControl key={product.id} value={product.produto}></FormControl>
                            <Button variant="danger">Delete</Button>
                        </InputGroup> */}
                </Col>
            </Row>


        </>
    )
}



export default ProductsList;