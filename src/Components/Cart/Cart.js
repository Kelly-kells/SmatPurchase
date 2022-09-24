import React from 'react'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap/Button"
import "./style.css"

const Cart = ({ cart }) => {
   
     const handleEmptyCart = () => onEmptyCart();
      
    


    const EmptyCart = () => (
        <h5>Your cart is empty!</h5>
    )

    if (cart.line_items > 0) {
        return "loading";
      }

    const FilledCart = () => {
        <>
            <Container>
                <Row>
                    {cart.line_items.map((lineItem) => (
                        <Col xs={12} sm={4} key={lineItem.id}>
                            <div> {lineItem.name}</div>

                        </Col>
                    ))}
                </Row>
            </Container>

            <div className='cardDetails'>
                <h4>Subtotal:{cart.subtotal.formatted_with_symbol}</h4>
                
                 <div>
                    <Button className='emptyBtn' size='lg' type='Button' variant='secondary' onClick={handleEmptyCart}>Empty cart</Button>
                    <Button className='checkoutBtn' size='lg' variant='primary'>Empty cart</Button>
                 </div>

                </div>
        </>
    }
    return (
        <Container>
            <div />

            <Row>
                <Col>
                    <p>Your shopping cart</p>
                    {EmptyCart ? <EmptyCart /> : <FilledCart />}
                </Col>
            </Row>

        </Container>
    )
}

export default Cart;