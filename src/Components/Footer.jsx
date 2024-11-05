import React from 'react'
import "./Footer.css"
import logoAdv from "../assets/logoAdv.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'


function Footer() {
  return (
    <>
      <div className="footerContainer">
        <div className="footerLogo">
            <img src={logoAdv} alt="" />
        </div>
        <div className="footerContent">
            <div className="areasFooter">
                <h2>Áreas de atuação </h2>
                <span>direito do consumidor</span>
                <span>Fim de união estável</span>
                <span>herança e inventário</span>
                <span>direito tributário</span>
            </div>
            <div className="contactFooter">
                <h2>Contato</h2>
                <div className="contact">
                    <FontAwesomeIcon icon={faInstagram} />
                    <span>@wesley_ribeiro.adv</span>
                </div>
                <div className="contact">
                    <FontAwesomeIcon icon={faEnvelope} />
                    <span>wesleyRibeiro@gmail.com</span>
                </div>
                <div className="contact">
                    <FontAwesomeIcon icon={faWhatsapp} />
                    <span>(00) 00000-0000</span>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Footer
