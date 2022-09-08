import React from 'react'
import Card from 'react-bootstrap/Card';



const Product = ({ product }) => {
    
    return (
        <Card className="">
            <Card.Image image="" title={product.name} />
            <Card.Body>
                <Card.Title>
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
            
            
        </Card>
    )
}

export default Product