import React from 'react' 
import './footer.css'
import {FaInstagram, FaYoutube, FaFacebook } from 'react-icons/fa'

const Footer = ()=> {
    return (
      <div className="ftr-container">
        <div className="ftr-content">
          <div className="ftr-item">
            <ul>
              <li>Home</li>
              <li>Compra</li>
              <li>Venda</li>
              <li>Estoque</li>
              <li>Contato</li>
            </ul>
          </div>
          <div className="ftr-item">
            <span>CNPJ: 003 141 250 /51</span>
            <span>All Right Reservered in 2024</span>
            <span>Rio de Janeiro RJ Brasil </span>
          </div>
          <div className="ftr-item">
            <FaInstagram/>
            <FaYoutube/>
            <FaFacebook/>
          </div>
        </div>
      </div>
    )
}
export default Footer