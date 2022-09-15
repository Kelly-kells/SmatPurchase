import React from 'react'
import Commerce, { commerce } from './lib/Commerce'

import Products from './Components/Products/Products'
import Navbar from "./Components/Navbar/Navbar"
import { useState,useEffect } from 'react'

const App = () => {

  const[products, setProducts]=useState([])

  const fetchProducts= async()=>{
    const {data} = await commerce.products.list()

    setProducts(data)
  }
  console.log (products)
  useEffect(()=>{
    fetchProducts()
  },[])
  
  return (
    <div>
      <Navbar fixed="top"/>
        <Products products={products}/>
        

    </div>
  )
}

export default App;