import React from 'react'
import Navbar from './components/navbar/Navbar'
import ProductPage from './components/productPage/ProductPage'

const App = () => {
  return (
    <div className='container'>
      <Navbar />
      <ProductPage />
    </div>
  )
}

export default App