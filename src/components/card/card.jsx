import React from 'react'
import './card.css'
import CarouselSmall from '../../components/carousel/carouselSmall'
import { FaMapMarkerAlt } from 'react-icons/fa'
const Card = () => {
  return (
    <div className="crd-container">
      <div className="crd-top">
        <CarouselSmall />
      </div>
      <div className="crd-bottom">
        <div className="crd-car-info">
          <h1>BMW</h1>
          <h2>X3M SPORT TURBO</h2>
          <span>2020</span>
        </div>
        <div className="crd-price">
          <h1>R$ 149.800,50</h1>
        </div>
        <div className="crd-location">
          <FaMapMarkerAlt />
          <span>Rio de Janeiro - RJ</span>
        </div>
      </div>
    </div>
  )
}
export default Card
