import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import { FaWhatsapp } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { IoLogoYoutube } from "react-icons/io"
import { FaFacebook } from "react-icons/fa"


const Navbar =  () =>{
    return(
      <nav className='navbar navbar-expand-lg' >
        <div className='container'>   

          <h1 className='navbar-brand text-white fw-bolder fs-4'> SearchCar </h1>
          
          <div className='nvb-links text-white fw-bold ' >
            <ul className='navbar-nav'  >
              <li className='nav-item m-1'>Home</li>
              <li className='nav-item m-1'>Estoque</li>
              <li className='nav-item m-1'>Venda</li>
              <li className='nav-item m-1'>Compra</li>
              <li className='nav-item m-1'>Contato</li>
            </ul>
          </div>

          <div className='nvb-contato'>
            <FaWhatsapp className='text-white fs-4 me-1' />
            <span className='text-white fw-bold fs-6'>(51) 9 9806 8587</span>
          </div>

          <div className='nvb-socialMidia'>
              <FaInstagram className='text-white fs-4 me-1' />
              <IoLogoYoutube className='text-white fs-4 me-1' />
              <FaFacebook className='text-white fs-4 me-1' />
          </div>
        

          

          
        </div>        
      </nav>                    
    )
}

export default Navbar