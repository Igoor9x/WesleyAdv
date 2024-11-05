import React from 'react'
import "./Reviews.css"
import estrelas from "../assets/estrelas.png"
import fakeProfile from "../assets/fakeProfile.png"

function Reviews() {
  return (
    <>
      <div className="reviewsContainer" id='reviews'>
       <div className="titleSection">
        <h2>feedback dos clientes</h2>
        <span>Selecionamos alguns depoimentos de clientes que já foram atendimentos pelo nosso escritório e recomendam-nos para todos, devido ao competende serviço prestado.</span>
       </div>
        <div className="reviews">
            <div className="reviewCard">
                <img src={fakeProfile} alt="" className='perfilReview'/>
                <h3 className='nameReview'>Nome da Pessoa</h3>
                <span className='reviewText'>Fui muito bem atendida. Me ouviram e fizeram todo o possível para me auxiliar indico e super recomendo os serviços prestados por vocês. Obrigado pela dedicação que tiveram com minha causa, fiquei muito satisfeita pelo resultado obtido.</span>
                <img src={estrelas} alt="" className='starsReview'/>
            </div>
            <div className="reviewCard">
                <img src={fakeProfile} alt="" className='perfilReview'/>
                <h3 className='nameReview'>Nome da Pessoa</h3>
                <span className='reviewText'>Fui muito bem atendida. Me ouviram e fizeram todo o possível para me auxiliar indico e super recomendo os serviços prestados por vocês. Obrigado pela dedicação que tiveram com minha causa, fiquei muito satisfeita pelo resultado obtido.</span>
                <img src={estrelas} alt="" className='starsReview'/>
            </div>
            <div className="reviewCard">
                <img src={fakeProfile} alt="" className='perfilReview'/>
                <h3 className='nameReview'>Nome da Pessoa</h3>
                <span className='reviewText'>Fui muito bem atendida. Me ouviram e fizeram todo o possível para me auxiliar indico e super recomendo os serviços prestados por vocês. Obrigado pela dedicação que tiveram com minha causa, fiquei muito satisfeita pelo resultado obtido.</span>
                <img src={estrelas} alt="" className='starsReview'/>
            </div>
        </div>
      </div>
    </>
  )
}

export default Reviews
