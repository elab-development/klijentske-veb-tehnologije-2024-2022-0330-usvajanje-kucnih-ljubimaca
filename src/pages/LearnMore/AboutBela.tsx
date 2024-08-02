import React from 'react'
import About from '../../components/About'

import imagee1 from '../../assets/aboutBela/image1.jpg'
import imagee2 from '../../assets/aboutBela/image2.jpg'
import imagee3 from '../../assets/aboutBela/image3.jpg'

function AboutBela() {
    const opis="Preslatka ženkica, puna energije i ljubavi za sve što je okružuje. Mila, nežna, znatiželjna. Dobro se slaže sa decom i odlično će se uklopiti ukoliko imate porodicu. 10   meseci  stara, ima 20 kg. Potpuno veterinarski obrađena, redovno čišćena od parazita i čipovana."
    return (
      <div>
          <About image1={imagee1} image2={imagee2} image3={imagee3}name={'Bela'} species={'pas'} description={opis} />
      </div>
    )
}

export default AboutBela