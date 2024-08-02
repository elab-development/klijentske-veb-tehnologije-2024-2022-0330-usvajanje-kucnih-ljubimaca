import { useState, useCallback, useRef} from "react"
import "../style/Contact.css"
import img1 from '../assets/photo1.jpg'
import img2 from '../assets/photo3.jpg'
import img3 from '../assets/photo2.jpg'
import img4 from '../assets/photo4.jpg'
import useFetch from '../components/useFetch';

interface DogFact {
  id: string;
  type: string;
  attributes: {
    body: string; 
  };
}

interface DogFactsResponse {
  data: DogFact[];
}

const DOG_FACTS_API_URL = 'https://dogapi.dog/api/v2/facts';


const Contact: React.FC = () => {

//useFetch za pribavljanje podataka sa Dog API
const [url, setUrl] = useState(`${DOG_FACTS_API_URL}?_=${Date.now()}`);
  
    const { data, loading, error } = useFetch<DogFactsResponse>(url);

    const factRef = useRef<HTMLDivElement>(null);

    const fetchRandomFact = useCallback(() => {
      setUrl(`${DOG_FACTS_API_URL}?_=${Date.now()}`);
      if (factRef.current) {
        factRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, []);
  
    if (loading) {
      return <div>Ucitavanje...</div>;
    }
  
    if (error) {
      return <div>Greska: {error.message}</div>;
    }
  
    const randomFact = data?.data[0]?.attributes.body;

  return (
    
    <div className="contact-all">
      <div className='gallery text'>
        <img className='imgg' src={img1} alt="" />
        <img className='imgg'src={img2} alt="" />
        <img className='imgg'src={img3} alt="" />
        <img className='imgg'src={img4} alt="" />
      </div>
      <div className='about'>
      <div className="crta"></div>
      <h1>Kontaktirajte nas</h1>
      <p>
        <p><img src="./src/assets/phone-icon.png" className="icon"/> 060/00-00-000</p>
        <p><img src="./src/assets/email-icon.png" className="icon"/> email@email.com</p>
        <p><img src="./src/assets/location-icon.png" className="icon"/> Beogradska 43, Beograd</p>
        <p><img src="./src/assets/location-icon.png" className="icon"/> Novosadska 53, Novi Sad</p>

      </p>
      <div className="crta"></div>
      <div className="facts" ref={factRef}>
        <h1>Zanimljivosti o psima</h1>
        <button onClick={fetchRandomFact} disabled={loading} className="facts-button">
        prikaži zanimljivost
        </button>
        {randomFact && <p>{randomFact}</p>}
      </div>
      </div>
    </div>
  )
}

export default Contact