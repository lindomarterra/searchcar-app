import React from 'react'
import Card from '../card/card'
import './shopWindow.css'
import { Link } from 'react-router-dom'
/* use o map para reduzir o código */
const ShopWindow = () => {
  return (
    <div className="spw-container">
      <div className="spw-content"> 
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />        
        <button>
          <Link to="/estoque"> Ver todos os caros </Link>
        </button>
      </div>
    </div>
  )
}
export default ShopWindow

