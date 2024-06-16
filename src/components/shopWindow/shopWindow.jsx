import React from 'react'
import Card from '../card/card'
import './shopWindow.css'
import { Link } from 'react-router-dom'
import { carInfo } from '../../data/car'

const ShopWindow = () => {
  const limit = 12

  return (
    <div className="spw-container">
      <div className="spw-content">
        {carInfo.slice(0, limit).map((item) => (
          <Card item={item} />
        ))}
        <button>
          <Link to="/estoque"> Ver todos os caros </Link>
        </button>
      </div>
    </div>
  )
}
export default ShopWindow
