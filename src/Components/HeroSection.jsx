import React from 'react'
import "./HeroSection.css"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';


import heroImage1 from "../assets/hero1.jpg";
import heroImage2 from "../assets/hero2.jpg";
import heroImage3 from "../assets/hero3.jpg";
import heroImage4 from "../assets/hero4.jpg";
import heroImageMobile1 from "../assets/heroMob1.jpg";
import heroImageMobile2 from "../assets/heroMob2.jpg";
import heroImageMobile3 from "../assets/heroMob3.jpg";
import heroImageMobile4 from "../assets/heroMob4.jpg";

function HeroSection() {

    const handleSendMessage = () => {
        const recipient = "5577999456129";
        const url = `https://wa.me/${recipient}?text=${encodeURIComponent}`;
        window.open(url, "_blank");
    };

  return (
    <>
    <div className='heroSectionContainer heroSectionDesktop'>
      <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={1}
      navigation
      pagination={{clickable: true}}
      autoplay={{delay: 4000, disableOnInteraction: false}}
      >
        <SwiperSlide>
            <img src={heroImage1} className='heroImage'/>
        </SwiperSlide>
        <SwiperSlide>
            <img src={heroImage2} className='heroImage'/>
        </SwiperSlide>
        <SwiperSlide>
            <img src={heroImage3} className='heroImage'/>
        </SwiperSlide>
        <SwiperSlide>
            <img src={heroImage4} className='heroImage'/>
        </SwiperSlide>
      </Swiper>
        <div className="heroSectionContent">
            <h1>Fale agora mesmo com um advogado</h1>
            <span>advogado especialista</span>
            <div className="btnsHeroSection">
                <button className='btnWhatsapp' onClick={handleSendMessage}>Chamar no whatsapp</button>
                <button className='btnAddress'>Conheça o escritório</button>
            </div>
        </div>
    </div>
    <div className='heroSectionContainer heroSectionMobile'>
      <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={1}
      navigation
      pagination={{clickable: true}}
      autoplay={{delay: 4000, disableOnInteraction: false}}
      >
        <SwiperSlide>
            <img src={heroImageMobile1} className='heroImage'/>
        </SwiperSlide>
        <SwiperSlide>
            <img src={heroImageMobile2} className='heroImage'/>
        </SwiperSlide>
        <SwiperSlide>
            <img src={heroImageMobile3} className='heroImage'/>
        </SwiperSlide>
        <SwiperSlide>
            <img src={heroImageMobile4} className='heroImage'/>
        </SwiperSlide>
      </Swiper>
        <div className="heroSectionContent">
            <h1>Fale agora mesmo com um advogado</h1>
            <span>advogado especialista</span>
            <div className="btnsHeroSection">
                <button className='btnWhatsapp'>Chamar no whatsapp</button>
                <button className='btnAddress'>Conheça o escritório</button>
            </div>
        </div>
    </div>
    </>
    
  )
}

export default HeroSection
