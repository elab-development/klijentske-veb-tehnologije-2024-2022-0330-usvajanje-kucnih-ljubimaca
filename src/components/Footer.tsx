import React from 'react'
import img1 from '../assets/email-icon.png'
import img2 from '../assets/phone-icon.png'
import img3 from '../assets/location-icon.png'
import img4 from '../assets/footer-removebg.png'
import '../style/Footer.css'


function Footer() {
  return (
    <div className="footer">
        <div>
            <h3>Za pitanja i sugestije</h3>
                <div className='footer11'>
                    <img className='icon' src={img1} alt="" />
                    <p>email@email.com</p>
                </div>
                <div className='footer11'>
                    <img className='icon' src={img2} alt="" />
                    <p>060/00-00-000</p>
                </div>
        </div>
        <div>
            <h3>Mozete nas pronaci na</h3>
                <div className='footer11'>
                    <img className='icon' src={img3} alt="" />
                    <p>Beogradska 43, Beograd</p>
                </div>
                <div className='footer11'>
                    <img className='icon' src={img3} alt="" />
                    <p>Novosadska 54, Novi Sad</p>
                </div>
        </div>
        <div className="footer1" >
            <img  className='footer-img' src={img4} alt="" />
        </div>
    </div> 
  )
}

export default Footer