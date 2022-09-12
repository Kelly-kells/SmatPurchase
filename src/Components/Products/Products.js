import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Product from './Product/Product';
import watch from "../../Components/assets/watch.png"
import macbook from "../../Components/assets/macbook.png"

const products = [{
  id: 1, name: "watch", description: "standard classy watch", price: "50$", img: macbook

},
{ id: 2, name: "macbook", description: "apple macbook", price: "50$", img: watch  }
]

const Products = () => {

  return (
    <main>
      <Container justifyContent="center" spacing={4} style={{ display: "flex" }}>
        {products.map((product) => (
          <Row key={product.id} xs={12} sm={12}>

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