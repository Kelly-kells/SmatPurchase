import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Product from './Product/Product';

const products = [{
  id: 1, name:"watch", description: "standard classy watch", price: "50$"

},
{id:2, name:"macbook", description: "apple macbook", price: "50$"}
]

const Products = () => {

  return (
    <main>
      <Container justifyContent="center" spacing={4}>
 {products.map((product)=>(
  <Row key={product.id} xs={12} sm={6} md={4} lg={3}>
    
    <Product product={product}/>
    </Row>
 ))}
      </Container>
    </main>
  )
}

export default Products