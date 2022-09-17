import React from 'react'
import Commerce, { commerce } from './lib/Commerce'

import Products from './Components/Products/Products'
import Navbar from "./Components/Navbar/Navbar"
import { useState,useEffect } from 'react'

const App = () => {

  const[products, setProducts]=useState([])
 
  const[cart, setCart]=useState({})


  const fetchProducts= async()=>{
    const {data} = await commerce.products.list()

    setProducts(data)
  }

  const fetchCart = async()=>{
    setCart = (await commerce.cart.retrieve());


    setCart(cart)
  }
  console.log(cart)
  useEffect(()=>{
    fetchProducts()
    fetchCart()
  },[])
  
  return (
    <div>
      <Navbar fixed="top"/>
        <Products products={products}/>
        

    </div>
  )
}

export default App;