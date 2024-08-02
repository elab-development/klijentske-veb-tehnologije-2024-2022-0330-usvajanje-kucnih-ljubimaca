import React from 'react'
import About from '../../components/About'

import imagee1 from '../../assets/aboutPipi/image1.jpg'
import imagee2 from '../../assets/aboutPipi/image2.jpg'
import imagee3 from '../../assets/aboutPipi/image3.jpg'

type Props = {}

function AboutPipi({}: Props) {
    const opis="Predivna dvogodišnja Pipi došla je iz prenatrpanog doma zajedno sa svojom bebom Cupkom koji je takođe dostupan za usvajanje. Pipi je u početku vrlo stidljiva, ali nakon što zadobijete njeno poverenje, ona je ljupka i rado će biti uz vas. Ima super mekano krzno​. Vakcinisana je, kastrirana i spremna za povratak u dom."
    return (
      <div>
          <About image1={imagee1} image2={imagee2} image3={imagee3}name={'Pipi'} species={'zec'} description={opis} />
      </div>
    )
}

export default AboutPipi