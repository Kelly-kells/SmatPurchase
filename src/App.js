import React from 'react'
import Commerce from './lib/Commerce'
import { useState } from 'react'
import Products from './Components/Products/Products'
import Navbar from "./Components/Navbar/Navbar"
import { useState } from 'react'

const App = () => {

  const[product, setProduct]=useState([])
  return (
    <div>
      <Navbar fixed="top"/>
        <Products/>
        

    </div>
  )
}

export default App;