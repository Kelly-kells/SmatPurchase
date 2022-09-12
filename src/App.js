import React from 'react'
import Products from './Components/Products/Products'
import Navbar from "./Components/Navbar/Navbar"

const App = () => {
  return (
    <div>
      <Navbar fixed="top"/>
        <Products/>
        

    </div>
  )
}

export default App;