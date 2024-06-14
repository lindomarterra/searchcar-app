import React, { useState } from "react"
import './carousel.css'
import { BsCircleFill } from "react-icons/bs"
import { FaArrowCircleLeft } from "react-icons/fa"
import { FaArrowCircleRight } from "react-icons/fa"

const Carousel = () =>{

    const data = [
        { id: 1, url: 'http://localhost:3000/assets/images/carousel01.jpg'},
        { id: 2, url: 'http://localhost:3000/assets/images/carousel02.jpg'},
        { id: 3, url: 'http://localhost:3000/assets/images/carousel03.jpg'},
    ]

    const [slide, setSlide]= useState(0)

    const navPrev = () => {
        const isFirst = slide === 0
        const prevSlide = isFirst ? data.length - 1 : slide - 1
        setSlide(prevSlide)
    }

    const navNext = () => {
        const isLast =  slide === data.length - 1
        const nextSlide = isLast ? 0 : slide + 1
        setSlide(nextSlide)
    }

    const navDots = (index) => {
        setSlide(index)
    }

      return (
        <body>
          {/* DESKTOP */}
          <div className="src-container">
            <div className="src-arrows">
              <FaArrowCircleLeft onClick={() => navPrev()} />
              <FaArrowCircleRight onClick={() => navNext()} />
            </div>

            <div
              className="src-items"
              style={{ background: `url(${data[slide].url})` }}
            >
              {' '}
            </div>

            <div className="src-dots">
              <BsCircleFill onClick={() => navDots(0)} />
              <BsCircleFill onClick={() => navDots(1)} />
              <BsCircleFill onClick={() => navDots(2)} />
            </div>
          </div>
        </body>
      )    
}

export default Carousel