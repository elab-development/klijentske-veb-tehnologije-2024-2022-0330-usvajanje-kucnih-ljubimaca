import "../style/ImageCard.css"
import { Link } from 'react-router-dom';

interface ImageCardProps{
  imagee: string;
  title: string;
  text: string;
  buttonText: string;
  path: string;
  categories :string[]
}

function ImageCard ({imagee, title, text, buttonText, path, categories} : ImageCardProps) {
  return (
    <div className='card' >
      <div>
        <img src={imagee} alt={title} className="image" />
      </div>
      <div className='card1'>
        <h3 className="title">{title}</h3>
        <p className="text">{text}</p>
        <Link to={path}>
            <button>{buttonText}</button>
        </Link>
      </div>
    </div>
  )
}

export default ImageCard
