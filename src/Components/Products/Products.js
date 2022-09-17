import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Product from './Product/Product';




const Products = ({ products }) => {

  return (
    <main>
      <Container  style={{ display: "flex", flexWrap: "wrap",justifyContent:"center" }} >
        {products.map((product) => (
          <Row key={product.id} md={6} sm={12}  >

            <Col >
              <Product product={product} />
            </Col>
          </Row>
        ))}
      </Container>
    </main>
  )
}

export default Products