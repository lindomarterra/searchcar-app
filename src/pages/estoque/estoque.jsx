import React from 'react'
import Footer from '../../components/footer/footer'
import Navbar from '../../components/navbar/navbar'
import './estoque.css'
import { BiSearch } from 'react-icons/bi'
import { carInfo } from '../../data/car'
import Card  from '../../components/card/card'

const Estoque = ()=>{
    return(
        <>
            <Navbar/>
            
            <div className="est-container">
                <div className="est-content">
                    <div className="est-banner">
                        <h1>Estoque</h1>
                        <h2>
                            Carros selecionados pelo nosso time para garantir <br/>
                            uma ótima compra do seu usado.
                        </h2>
                        <div className="est-search-content">
                            <input type="text" id='txt-search' />
                            <BiSearch/>
                        </div>
                    </div>
                    <div className="est-vitrine">
                      {
                        carInfo.slice(0, 9).map((item, index)=>(
                            <Card item= {item}  />
                        ))
                      }
                    </div>
                </div>
            </div>

            <Footer/>
        </>        
    )
}
export default Estoque