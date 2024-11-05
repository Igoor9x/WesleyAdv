import React from 'react';
import "./Areas.css";
import cardImage1 from "../assets/mercado.jpg";
import cardImage2 from "../assets/uniaoestavel.jpg";
import cardImage3 from "../assets/inventario.jpg";
import cardImage4 from "../assets/direito.jpg";


function Areas() {
  return (
    <>
      <div className="areasContainer" id='areas'>
        <h2>Áreas de Atuação</h2>
        <div className="firstArea">
          <div className="areaCard">
            <img src={cardImage1} alt="" srcset="" className='ImageCardArea'/>
            <span>direito do consumidor</span>
          </div>
          <div className="areaCard">
            <img src={cardImage2} alt="" srcset="" className='ImageCardArea'/>
            <span>Fim de união estável</span>
          </div>
        </div>
        <div className="secondArea">
          <div className="areaCard">
            <img src={cardImage3} alt="" srcset="" className='ImageCardArea'/>
            <span>herança e inventário</span>
          </div>
          <div className="areaCard">
            <img src={cardImage4} alt="" srcset="" className='ImageCardArea'/>
            <span>direito tributário</span>        
          </div>
        </div>
      </div>
    </>
  )
}

export default Areas
