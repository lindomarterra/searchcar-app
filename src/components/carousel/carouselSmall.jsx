import React, { useState } from 'react'
import './carouselSmall.css'
import { BsCircleFill } from "react-icons/bs"
import { FaArrowCircleLeft } from "react-icons/fa"
import { FaArrowCircleRight } from "react-icons/fa"

const CarouselSmall = () => {

    const [slide, setSlide]= useState(0)

    const vitrine = [
        { id: 1, url: 'http://localhost:3000/assets/images/vitrine/car01Photo01.jpg'},
        { id: 2, url: 'http://localhost:3000/assets/images/vitrine/car01Photo02.jpg'},
        { id: 3, url: 'http://localhost:3000/assets/images/vitrine/car01Photo03.jpg'},
        { id: 4, url: 'http://localhost:3000/assets/images/vitrine/car01Photo04.jpg'},
        { id: 5, url: 'http://localhost:3000/assets/images/vitrine/car01Photo05.jpg'},
        { id: 6, url: 'http://localhost:3000/assets/images/vitrine/car01Photo06.jpg'},
        { id: 7, url: 'http://localhost:3000/assets/images/vitrine/car01Photo07.jpg'},
        { id: 8, url: 'http://localhost:3000/assets/images/vitrine/car01Photo08.jpg'},        
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
                            <BsCircleFill onClick={(ite,)=> navDot(index)} />
                        ))
                    }                    
                </div>

            </div>

    )
}
export default CarouselSmall