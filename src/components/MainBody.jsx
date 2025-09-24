import '../App.css'
import { FaChevronRight } from 'react-icons/fa'
import sportCar from '../assets/front-white.png'
import spCar from '../assets/front-blue.png'
import rcar from '../assets/blue.png'
import rcar1 from '../assets/white.png'

function MainBody() {
  return (
    <div className='main-body'>
      <div className="left">
        <div className="title">
            <h1>Beyond Speed,</h1>
            <h1>Beyond Time</h1>
        </div>
        <div className="description">
            <p>Where Innovation <br/> Meets the Road.</p>
            <button className='btn'>Explore More <FaChevronRight /><FaChevronRight /><FaChevronRight /></button>
        </div>
      </div>
      <div className="middle">
        <div className='overlay'>
            <img src={sportCar} alt="sport-car" className='sport-car' />
        </div>
        <div className='overlay2'>
            <img src={spCar} alt="sport-car" className='sport-car' />
        </div>
      </div>
      <div className="right">
        <div className="car-box">
            <img src={rcar} alt="sport-car" className='spcar'/>
        </div>
        <div className="car-box">
            <img src={rcar1} alt="sport-car" className='spcar' />
        </div>
      </div>
    </div>
  )
}

export default MainBody
