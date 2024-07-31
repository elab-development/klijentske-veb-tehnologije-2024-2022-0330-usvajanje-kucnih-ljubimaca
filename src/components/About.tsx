import { useNavigate } from 'react-router-dom';
import '../style/About.css'

interface AboutProps{
    image1 : string;
    image2 : string;
    image3 : string;
    name: string; 
    species: string; 
    description: string; 
}

const About = ({ image1, image2, image3, name, species, description }: AboutProps) => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate('/inquiry', { state: { name, species } });
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
                <button onClick={handleSubmit}>Posalji upit</button>
            </div>
        </div>
    </div>
  );
};

export default About;
