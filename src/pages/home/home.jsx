import './home.css'
import React from 'react';
import Navbar from '../../components/navbar/navbar'
import Carousel from '../../components/carousel/carousel'
import ShopWindow from '../../components/shopWindow/shopWindow'

const Home = () =>{
    return(
        <body>
            <Navbar/>
            <Carousel/>
            <ShopWindow/>
        </body>
    )
}

export default Home