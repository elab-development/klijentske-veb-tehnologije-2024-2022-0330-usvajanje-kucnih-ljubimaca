import "../style/Contact.css"
import img1 from '../assets/photo1.jpg'
import img2 from '../assets/photo3.jpg'
import img3 from '../assets/photo2.jpg'
import img4 from '../assets/photo4.jpg'

function Contact() {

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
    </div>
  )
}

export default Contact