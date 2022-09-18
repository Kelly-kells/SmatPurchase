import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { MdOutlineAddShoppingCart } from "react-icons/md"
import "./style.css"


const Product = ({ product, onAddToCart }) => {

    return (

        <Card className='card animate__animated animate__shakeX ' style={{ width: "13rem", height: "100%" }}>
            <Card.Img src={product.image?.url} alt={product.name} />
            <Card.Body className='cardBody'>
                <Card.Title className='cardTitle'>
                    <h6>
                        {product.name}
                    </h6>
                    <h6  >
                        {product.price.formatted_with_symbol}
                    </h6>
                </Card.Title>
                <Card.Text varient="h4" dangerouslySetInnerHTML={{ __html: product.description }} />


            </Card.Body>

            <Button className='btn' onClick={() => onAddToCart(product.id, 1)}> <MdOutlineAddShoppingCart /></Button>
        </Card>

    )
}

export default Product