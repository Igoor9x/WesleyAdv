import React from 'react'
import "./About.css"
import profile from "../assets/wr_profile.jpg"
import imageHand from "../assets/ft.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faScaleBalanced } from '@fortawesome/free-solid-svg-icons'

function About() {

  const handleSendMessage = ()  => {
    const recipient =  "5577999456129";
    const  url = `https://wa.me/${recipient}?text=${encodeURIComponent}`;

    window.open(url, "_blank")
  };

  return (
    <>
      <div className="aboutContainer" id='about'>
        <div className="aboutFirstCard">
          <img src={imageHand} alt="" />
          <div className="aboutInfo">
            <h2>Sobre nós</h2>
            <span>Fundado em 2016 pelo advogado Wesley Ribeiro, nosso escritório busca oferecer atendimento de excelência aos clientes, sempre atuando com a máxima urgência para resolver seu problema.</span>
            <span>Privilegiando atuação de qualidade em detrimento da quantidade de causas, o escritório prima pelo atendimento personalizado aos clientes, com atuação firme e segura, pautada na ética e transparência.</span>
          </div>
        </div>
        <div className="aboutAdvCard">
          <h2>Dr. Wesley Ribeiro</h2>
          <div className="advContent">
            <img src={profile} alt="" />
            <div className="advInfo">
              <span>O Dr. Wesley ajuda a população rio-grandina a mais de 10 anos. Atua em diversas áreas, como causas civis, trabalhistas e também criminal. </span>
              <span>Preza por uma advocacia criminal combativa e atualizada aos mais recentes entendimentos doutrinários e jurisprudenciais, atuando de forma estratégica e operacional no melhor interesse de seus clientes.</span>
              <div className="oab">
                <FontAwesomeIcon icon={faScaleBalanced} className='iconBalance'/>
                <span>OAB/BA 000.000</span>
              </div>
              <button className='btnWhatsapp' onClick={handleSendMessage}>Chamar no whatsapp</button>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default About
