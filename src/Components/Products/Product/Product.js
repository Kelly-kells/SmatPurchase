import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {MdOutlineAddShoppingCart} from "react-icons/md"



const Product = ({ product }) => {
    
    return (
        
        <Card  className='card'style={{display: "flex"}} >
            <Card.Img varient="top" src="" title={product.name} />
            <Card.Body className='cardBody'>
                <Card.Title className='cardTitle'>
                    <h6 >
                        {product.name}
                    </h6>
                    <h6  >
                        {product.price}
                    </h6>
                </Card.Title>
                <Card.Text >
                    {product.description}
                </Card.Text>
            </Card.Body>
            
            <Button aria-label='Add to cart'> <MdOutlineAddShoppingCart /></Button>
        </Card>
        
    )
}

export default Product