import React, {useState} from 'react'
import "./Header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faDiamond } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import logoAdv from "../assets/logoAdv.png"
import { Link } from 'react-scroll'


function Header() {
  
  const [menuActive, setMenuActive] = useState(false);
  
  const activeMenuModal = () => {
    setMenuActive(!menuActive);
    if (!menuActive){
      document.body.style.overflow = "hidden";
    }else{
       document.body.style.overflow = "auto";
    };
  };

  const linkSection = () => {
    setMenuActive(false);
     document.body.style.overflow = "auto";
  };

  return (
    <>
      <div className="headerContainer">
        <div className="header">
          <div className="clientNameLogo">
            <img src={logoAdv} alt=""  className='logoIcon'/>
              <div className="nameHeader">
                <span>Escritório de Advocacia</span>
              </div>
          </div>
          <div className="menuDesktop">
              <div className="addressAndPhone">
                  <div className="address">
                      <FontAwesomeIcon icon={faLocationDot} className='iconMenu'/>
                      <span>Vitória da Conquista - BA | Patagônia, 1</span>
                  </div>
                  <div className='barMenu'></div>
                  <div className="phone">
                      <FontAwesomeIcon icon={faWhatsapp} className='iconMenu'/>
                      <span>(77) 98836-5040</span>
                  </div>
              </div>
              <ul className='menuNav'>
                  <li><Link to="areas" smooth={true} duration={400}>Áreas de atuação</Link></li>
                  <FontAwesomeIcon icon={faDiamond} className='diamondIcon'/>
                  <li><Link to="about" smooth={true} duration={400}>Sobre</Link></li>
                  <FontAwesomeIcon icon={faDiamond} className='diamondIcon'/>
                  <li><Link to="reviews" smooth={true} duration={400}>Avaliações</Link></li>
                  <FontAwesomeIcon icon={faDiamond} className='diamondIcon'/>
                  <li><a href="">fale conosco</a></li>
              </ul>
            </div>
          <FontAwesomeIcon icon={faBars} className='menuMobileBars' onClick={activeMenuModal}/>
        </div>
        <div className="menuMobileContainer" style={{display: menuActive ? "flex" : "none"}} onClick={linkSection}>
          <div className="menuMobile" onClick={(e) => e.stopPropagation()}>
            <h2>MENU</h2>
            <FontAwesomeIcon icon={faXmark} className='closeMenuModal' onClick={activeMenuModal}/>
            <ul className='menuNav'>
                <li><Link to="areas" smooth={true} duration={400}  onClick={linkSection}>Áreas de atuação</Link></li>
                <li><a href="">nossa equipe</a></li>
                <li><a href="">contato</a></li>
                <li><a href="">fale conosco</a></li>
            </ul>
            <div className="addressAndPhone">
              <div className="address">
                <FontAwesomeIcon icon={faLocationDot} className='iconMenu'/>
                <span>Vitória da Conquista - BA | Patagônia, 1</span>
              </div>
              <div className="phone">
                <FontAwesomeIcon icon={faWhatsapp} className='iconMenu'/>
                <span>(77) 98836-5040</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
