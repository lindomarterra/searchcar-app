import './home.css'
import React from 'react';
import Navbar from '../../components/navbar/navbar'
import Carousel from '../../components/carousel/carousel'

const Home = () =>{
    return(
        <body>
            <Navbar/>
            <Carousel/>
        </body>
    )
}

export default Home