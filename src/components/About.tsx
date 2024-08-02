import { useNavigate } from 'react-router-dom';
import '../style/About.css'
import { AboutProps } from '../modules/aboutModel';

const About = ({ image1, image2, image3, name, species, description }: AboutProps) => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    // cuvanje podataka u localStorage
    localStorage.setItem('petName', name);
    localStorage.setItem('petSpecies', species);
    localStorage.setItem('petImage', image1);

    //navigacija za dugme
    navigate('/login');
  };

  return (
    <div className='pet-all'>
        <div className='container'>
            <div className='imagess'>
                <img className='aboutt' src={image1} alt="" />
                <img className='aboutt' src={image2} alt="" />
                <img className='aboutt' src={image3} alt="" />
            </div>
            <div className='about-text'>
                <h2>Ime: {name}</h2>
                <h4>Vrsta: {species}</h4>
                <h4>Opis:</h4>
                <p>{description}</p>
                <button onClick={handleSubmit} className='submit'>pošalji upit</button>
            </div>
        </div>
    </div>
  );
};

export default About;
