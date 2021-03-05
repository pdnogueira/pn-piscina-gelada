import React, { useState } from 'react';
import { FormControl, InputGroup, Row, Col, Button } from 'react-bootstrap';

const InputProducts = (props) => {
	const [input, setInput] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();

		props.onSubmit({
			id: Math.floor(Math.random() * 1000),
			text: input,
		});

		setInput('');
	};

	const handleChange = (e) => {
		setInput(e.target.value);
	};

	return (
		<>
			<Row>
				<Col xs={12}>
					<form onSubmit={handleSubmit}>
						<InputGroup className="mb-3">
							<InputGroup.Prepend>
								<Button type="submit" variant="success">
									Incluir
								</Button>
							</InputGroup.Prepend>
							<FormControl value={input} onChange={handleChange}></FormControl>
						</InputGroup>
					</form>
				</Col>
			</Row>
		</>
	);
};

export default InputProducts;
