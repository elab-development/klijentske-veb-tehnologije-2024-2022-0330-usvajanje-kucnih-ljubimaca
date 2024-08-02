import React from 'react'
import About from '../../components/About'

import imagee1 from '../../assets/adoutBeni/image1.jpg'
import imagee2 from '../../assets/adoutBeni/image2.jpg'
import imagee3 from '../../assets/adoutBeni/image3.jpg'

function AboutBeni() {
    const opis="Beni je poslušan dečak, mužjak je niskog rasta. Ima 10 kg i tek je napunio 2 godine. Umiljat je, pametan, poslušan i drag. Prelep je pas, divne dlake. Vakcinisan, čipovan i kastriran. Naučen je na kućni red, nuždu obavlja van.";
  return (
    <div>
        <About image1={imagee1} image2={imagee2} image3={imagee3}name={'Beni'} species={'pas'} description={opis} />
    </div>
  )
}

export default AboutBeni