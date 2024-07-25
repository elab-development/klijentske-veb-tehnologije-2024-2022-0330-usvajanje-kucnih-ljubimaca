import './Hero.css'
import {Link} from "react-router-dom";
import React from 'react';


export default function Hero() {
  return (
    <div className='hero'>
      <div className='left'>
        <div className="leftText">
        <h1 className='heroHeading'>Ne kupuj, udomi</h1>
        <h2 className='heroText'>pronađi svog najboljeg prijatelja!</h2>
         <Link to="/adopt" className="usvojiLink"><button className="pronadji">udomi</button></Link>

        </div>
      <img src='./src/assets/pozadina.png' className='leftPic'/>
      </div>
      <div className="right">
        <img src='./src/assets/bannerDog.jpg' className="rightPic"/>
      </div>
    </div>
  )
}
