import React from 'react'
import About from '../../components/About'

import imagee1 from '../../assets/aboutDzeki/about1.jpg'
import imagee2 from '../../assets/aboutDzeki/about2.jpg'
import imagee3 from '../../assets/aboutDzeki/about3.jpg'

function AboutDzeki() {
    const opis="Džeki je nežan, nenametljiv, tih, miran, slaže se sa psima, lepo reaguje na mace. Treba mu dom u mirnom okruženju u s dobro ograđenim dvorištem i ljudima koji bi imali puno vremena i ljubavi za njega. Uredno je vakcinisan protiv svih bolesti i star je 2 godine."
    return (
      <div>
          <About image1={imagee1} image2={imagee2} image3={imagee3}name={'Dzeki'} species={'pas'} description={opis} />
      </div>
    )
}

export default AboutDzeki