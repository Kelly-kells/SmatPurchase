import React from 'react'
import Commerce, { commerce } from './lib/Commerce'

import Products from './Components/Products/Products'
import Navbar from "./Components/Navbar/Navbar"
import { useState, useEffect } from 'react'

const App = () => {

  const [products, setProducts] = useState([])

  const [cart, setCart] = useState({})


  const fetchProducts = async () => {
    const { data } = await commerce.products.list()

    setProducts(data)
  }

  const fetchCart = async () => {
    commerce.cart.retrieve().then((cart) => {
      setCart(cart);
    })
  }
  
  const handleAddToCart = async (productId, quantity) =>{
      const item=await commerce.cart.add(productId, quantity)

      setCart (item.cart)
  }
  console.log(cart)
  useEffect(() => {
    fetchProducts()
    fetchCart()
  }, [])

  return (
    <div>
      <Navbar fixed="top"  totalItems={cart.total_items}/>
      <Products products={products} onAddToCart={handleAddToCart} />


    </div>
  )
}

export default App;