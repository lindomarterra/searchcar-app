import './home.css'
import React from 'react';
import Navbar from '../../components/navbar/navbar'
import Carousel from '../../components/carousel/carousel'
import ShopWindow from '../../components/shopWindow/shopWindow'
import Contact from '../../components/contact/contact'
import Service from '../../components/service/service'
import Footer from '../../components/footer/footer'


const Home = () =>{
    return (
      <body>
        <Navbar />
        <Carousel />
        <ShopWindow />
        <Contact/>
        <Service/>
        <Footer/>
      </body>
    )
}

export default Home