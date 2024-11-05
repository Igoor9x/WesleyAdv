
import './App.css'
import Header from './Components/Header'
import HeroSection from './Components/HeroSection'
import Areas from './Components/Areas'
import About from './Components/About'
import Reviews from './Components/Reviews'
import Footer from './Components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons/faArrowAltCircleUp'

function App() {

const handleTop = () => {
  window.scrollTo({top: 0, behavior: "smooth"});
};

  return (
    <>
      <Header />
      <HeroSection />
      <Areas />
      <About />
      <Reviews />
      <Footer />
      <div className="buttonUp">
          <FontAwesomeIcon icon={faArrowAltCircleUp} className='btnUpPage'  onClick={handleTop}/>
      </div>
    </>
  )
}

export default App
