import React from 'react'
import Footer from '../../components/footer/footer'
import Navbar from '../../components/navbar/navbar'
import './estoque.css'
import { BiSearch } from 'react-icons/bi'


const Estoque = ()=>{
    return(
        <>
            <Navbar/>
            
            <div className="est-container">
                <div className="est-content">
                    <div className="est-banner">
                        <h1>Estoque</h1>
                        <h2>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt sit obcaecati ad delectus est dolor reiciendis, repellendus, officia quia numquam necessitatibus facilis harum. Cupiditate unde magni placeat commodi aliquam! Nesciunt!
                        </h2>
                        <div className="est-search-content">
                            <input type="text" id='txt-search' />
                            <BiSearch/>
                        </div>
                    </div>
                </div>
            </div>

            <Footer/>
        </>        
    )
}
export default Estoque