import {Link} from "react-router-dom";
import "./Home.css"
import image1 from '../assets/pozadina.png'
import image2 from '../assets/bannerDog.jpg'

function Home() {
  return (
    <div className='hero'>
    <div className='left'>
      <div className="leftText">
      <h1 className='heroHeading'>Ne kupuj, udomi</h1>
      <h2 className='heroText'>pronađi svog najboljeg prijatelja!</h2>
       <Link to="/adopt" className="usvojiLink"><button className="pronadji">udomi</button></Link>

      </div>
    <img src={image1} className='leftPic'/>
    </div>
    <div className="right">
      <img src={image2} className="rightPic"/>
    </div>
  </div>
  )
}

export default Home
