import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <div className="ctc-container">
      <div className="ctc-content">
        <div className="ctc-info">
          <h3>Estrada Dom Joaquim Mamede, 109</h3>
          <h2>Rio de Janeiro</h2>
          <h4>20241-390</h4>
          <h1>(51)99806 8587</h1>
        </div>
        <div className="ctc-form">
          <form>
            <input type="text" id="txt-nome" placeholder="digite seu nome" />
            <input type="text" id="txt-email" placeholder="digite seu email" />
            <input
              type="text"
              id="txt-telefone"
              placeholder="digite seu telefone"
            />
            <textarea
              name="ta-mensagem"
              id="ta-mensagem"
              cols="30"
              rows="10"
              placeholder="digite sua mensagem"
            ></textarea>
            <button>Enviar mensagem</button>
          </form>
        </div>
      </div>

      <div className="ctc-map">
        <iframe
          title='maps'
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.3318210858138!2d-43.21371942543103!3d-22.938003638986032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997fc899f4ab39%3A0xa5c51a29ace66bfb!2sSoulrebel%20Rio!5e0!3m2!1sen!2sbr!4v1718015892660!5m2!1sen!2sbr"
          width="1000"
          height="250"          
          style={{border: '1px, solid , gray'}}
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  )
}
export default Contact
