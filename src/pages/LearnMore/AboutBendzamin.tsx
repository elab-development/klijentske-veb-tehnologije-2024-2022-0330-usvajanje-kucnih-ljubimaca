import React from 'react'
import About from '../../components/About'

import imagee1 from '../../assets/aboutBendzamin/image1.jpg'
import imagee2 from '../../assets/aboutBendzamin/image2.jpg'
import imagee3 from '../../assets/aboutBendzamin/image3.jpg'


function AboutBendzamin() {
    const opis="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, autem placeat vitae maxime eligendi ducimus excepturi saepe impedit, commodi quisquam repellat rerum facere corrupti quos expedita sint? Dicta, inventore maiores?"
    return (
      <div>
          <About image1={imagee1} image2={imagee2} image3={imagee3}name={'Bendzamin'} species={'macka'} description={opis} />
      </div>
    )
}

export default AboutBendzamin