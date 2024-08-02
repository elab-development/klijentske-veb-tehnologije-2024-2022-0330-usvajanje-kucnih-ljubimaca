import React from 'react'
import About from '../../components/About'

import imagee1 from '../../assets/aboutGarfild/image1.jpg'
import imagee2 from '../../assets/aboutGarfild/image2.jpg'
import imagee3 from '../../assets/aboutGarfild/image3.jpg'

function AboutCici() {
    const opis="Presladak mačak koji ima oko 1 godinu. Radoznao je i razdragan, avanturističnog je duha i ima potrebu za stalnim istraživanjem. Sterilisan, zdrav, druželjubiv i voli da se mazi."
    return (
      <div>
          <About image1={imagee1} image2={imagee2} image3={imagee3}name={'Cici'} species={'macka'} description={opis} />
      </div>
    )
}

export default AboutCici