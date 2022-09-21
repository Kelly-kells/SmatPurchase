import React from 'react'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap/Button"

const Cart = () => {
    const isEmpty = true
    const EmptyCart = () => {
        <h5>Your cart is empty!</h5>
    }
    return (
        <Container>
            <div />

            <Row>
                <Col>
                    <p>Your shopping cart</p>
                    {isEmpty ? <EmptyCart /> : <FilledCart />}
                </Col>
            </Row>

        </Container>
    )
}

export default Cart;