import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import { FaWhatsapp } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { IoLogoYoutube } from "react-icons/io"
import { FaFacebook } from "react-icons/fa"


const Navbar =  () =>{
    return(

      <header>

            {/* NAVBAR DESKTOP */}
        <nav className='navbar navbar-expand-lg d-none d-lg-block py-0' >
          <div className='container'>
            <h1 className='nvb-logo navbar-brand text-white fw-bolder pt-2 fs-6'> SearchCar </h1>
        
            <div className='nvb-links m-0 p-0' >
              <ul className='navbar-nav m-0 p-0'  >
                <li className='nav-item my-0 mx-1 p-2'>Home</li>
                <li className='nav-item my-0 mx-1 p-2'>Estoque</li>
                <li className='nav-item my-0 mx-1 p-2'>Venda</li>
                <li className='nav-item my-0 mx-1 p-2'>Compra</li>
                <li className='nav-item my-0 mx-1 p-2'>Contato</li>
              </ul>
            </div>
            <div className='nvb-contato'>
              <FaWhatsapp className='text-white fs-5 me-1' />
              <span className='text-white fw-bold'>(51)99806 8587</span>
            </div>
            <div className='nvb-socialMidia'>
                <FaInstagram className='text-white fs-6 me-2' />
                <IoLogoYoutube className='text-white fs-6 me-2' />
                <FaFacebook className='text-white fs-6 me-2' />
            </div>
        
        
          </div>
        </nav>
        

          {/* NAVBAR MOBILE */}
        <nav className='navbar d-lg-none '>
          <div className='container'>

            <h1 className='navbar-brand text-white fw-bolder fs-4'> SearchCar </h1>

            <button className="navbar-toggler bg-white p-1" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMobile">
              <span className="navbar-toggler-icon"></span>
            </button>
            
            <div className="collapse navbar-collapse" id="navbarMobile">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item text-white fw-bold my-1 ">  Home   </li>
                <li className="nav-item text-white fw-bold my-1 ">  Estoque </li>
                <li className="nav-item text-white fw-bold my-1 ">  Venda   </li>
                <li className="nav-item text-white fw-bold my-1 ">  Compra   </li>
                <li className="nav-item text-white fw-bold my-1 ">  Contato   </li>
              </ul>
            </div>

          </div>
        </nav>

      </header>

    )
}

export default Navbar