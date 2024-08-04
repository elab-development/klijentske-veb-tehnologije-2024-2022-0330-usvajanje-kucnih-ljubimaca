import React, { useEffect, useState } from 'react';
import '../style/Login.css'
//import InputField from '../components/InputField';
import Inputfield from '../modules/Inputfield';
import { Link } from 'react-router-dom';

import Modal from 'react-modal';
import Popup from '../components/Popup'
Modal.setAppElement('#root');
import '../style/Popup.css'

const Login: React.FC = () => {
  const [petName, setPetName] = useState('');
  const [petSpecies, setPetSpecies] = useState('');
  const [petImage, setPetImage] = useState('');

  useEffect(() => {
    // citanje podataka iz localStorage
    const namee = localStorage.getItem('petName') || '';
    const speciess = localStorage.getItem('petSpecies') || '';
    const imagee = localStorage.getItem('petImage') || '';
    setPetName(namee);
    setPetSpecies(speciess);
    setPetImage(imagee);
  }, []);

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


  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const handleSubmit = () => {
    setIsPopupOpen(true);
  };

  return (
    <div className='request-all'>
      <h1>Posaljite upit</h1>
      <p>Ukoliko jos niste odabrali ljubimca kojeg zelite, to mozete uraditi ovde:</p>
      <Link to="/adopt">
        <button className='buttonn'>
            udomi
        </button>
      </Link>
      <div className="crta"></div>
      <h2>Odabrani ljubimac</h2>
      <h3>Ime ljubimca: {petName}</h3>
      <h3>Vrsta: {petSpecies}</h3>
      <img src={petImage} alt='slika ljubimca' style={{ width: '200px', height: '200px' }} />
      <div className='contact-form'>
        <Inputfield
            value={inputValue1}
            onChange={handleInputChange1}
            label="Upisite ime i prezime:"
          />
        <Inputfield
            value={inputValue2}
            onChange={handleInputChange2}
            label="Upisite adresu:"
          />
        <Inputfield
            value={inputValue3}
            onChange={handleInputChange3}
            label="Upisite e-mail adresu:"
        />
        <button onClick={handleSubmit}>pošalji upit</button>
      </div>
      <Popup 
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        name={petName}
        species={petSpecies} 
        nameSurname={inputValue1}
        address={inputValue2}
        email={inputValue3}                
      />
    </div>

  );
};

export default Login;