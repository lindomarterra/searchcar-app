import React, { useState } from 'react'
import './carouselSmall.css'
import { BsCircleFill } from "react-icons/bs"
import { FaArrowCircleLeft } from "react-icons/fa"
import { FaArrowCircleRight } from "react-icons/fa"

const CarouselSmall = () => {

    const [slide, setSlide]= useState(0)

    const vitrine = [
        { id: 1, url: 'http://localhost:3000/assets/images/vitrine/car01/foto1.jpg'},
        { id: 2, url: 'http://localhost:3000/assets/images/vitrine/car01/foto2.jpg'},
        { id: 3, url: 'http://localhost:3000/assets/images/vitrine/car01/foto3.jpg'},
        { id: 3, url: 'http://localhost:3000/assets/images/vitrine/car01/foto4.jpg'},
        { id: 3, url: 'http://localhost:3000/assets/images/vitrine/car01/foto5.jpg'},
        { id: 3, url: 'http://localhost:3000/assets/images/vitrine/car01/foto6.jpg'},
        { id: 3, url: 'http://localhost:3000/assets/images/vitrine/car01/foto7.jpg'},
        { id: 3, url: 'http://localhost:3000/assets/images/vitrine/car01/foto8.jpg'}
              
    ]

    const navPrev = () => {
        const isFirst = slide === 0
        const prevSlide = isFirst ? vitrine.length - 1 : slide - 1
        setSlide(prevSlide)
    }

    const navNext = () => {
        const isLast =  slide === vitrine.length - 1
        const nextSlide = isLast ? 0 : slide + 1
        setSlide(nextSlide)
    }

    const navDot = (index) => {
        setSlide(index)
    }

    return(

            <div className="crsm-container">

                <div className="crsm-arrows">
                    <FaArrowCircleLeft onClick={()=> navPrev()} />
                    <FaArrowCircleRight onClick={()=> navNext()} />
                </div>

                <div className="crsm-items" style={{ background: `url(${vitrine[slide].url})` }} ></div>

                <div className="crsm-dots">
                    {
                        vitrine.map((item, index)=> (
                            <BsCircleFill onClick={(item)=> navDot(index)} />
                        ))
                    }                    
                </div>

            </div>

    )
}
export default CarouselSmall