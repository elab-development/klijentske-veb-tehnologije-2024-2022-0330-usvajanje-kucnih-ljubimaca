import React, { useState } from 'react'
import "../style/Contact.css"
import InputField from '../components/InputField';
import img1 from '../assets/photo1.jpg'
import img2 from '../assets/photo3.jpg'
import img3 from '../assets/photo2.jpg'
import img4 from '../assets/photo4.jpg'

function Contact() {
  const [inputValue1, setInputValue1] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  const [inputValue3, setInputValue3] = useState('');

  const handleInputChange1 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue1(e.target.value);
  };
  const handleInputChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue2(e.target.value);
  };
  const handleInputChange3 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue3(e.target.value);
  };

  return (
    
    <div className="contact-all">
      <div className='gallery'>
        <img className='imgg' src={img1} alt="" />
        <img className='imgg'src={img2} alt="" />
        <img className='imgg'src={img3} alt="" />
        <img className='imgg'src={img4} alt="" />
      </div>
      <div className='about'>
      <h1>Kontaktirajte nas</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores, id! Temporibus quod dolores laudantium eius quas sint sunt, perspiciatis placeat, dolorum amet aliquid repudiandae fugiat maiores dolorem laboriosam, neque cupiditate.
      </p>
      </div>
      
      <div className='contact-form'>
      <InputField
          value={inputValue1}
          onChange={handleInputChange1}
          label="Upisite ime i prezime:"
        />
      <InputField
          value={inputValue2}
          onChange={handleInputChange2}
          label="Upisite e-mail adresu:"
        />
      <InputField
          value={inputValue3}
          onChange={handleInputChange3}
          label="Napomena:"
      />
      </div>
    </div>
  )
}

export default Contact