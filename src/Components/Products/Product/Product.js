import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { MdOutlineAddShoppingCart } from "react-icons/md"
import "./style.css"


const Product = ({ product }) => {

    return (

        <Card className='card' style={{ width: "18rem" }}>
            <Card.Img varient="top" src={product.image} title={product.name} />
            <Card.Body className='cardBody'>
                <Card.Title className='cardTitle'>
                    <h6 >
                        {product.name}
                    </h6>
                    <h6  >
                        {product.price}
                    </h6>
                </Card.Title>
                <Card.Text varient="h4" >
                    {product.description}
                </Card.Text>
            </Card.Body>

            <Button className='btn'> <MdOutlineAddShoppingCart /></Button>
        </Card>

    )
}

export default Product