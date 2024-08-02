import React from 'react'
import About from '../../components/About'

import imagee1 from '../../assets/aboutCupko/image1.jpg'
import imagee2 from '../../assets/aboutCupko/image2.jpg'
import imagee3 from '../../assets/aboutCupko/image3.jpg'

function AboutCupko() {
    const opis="Cupko je Pipin sin, koji je takođe došao iz prenatrpanog doma. Cupku u početku treba vremena da se navikne na novo okruženje i malo je plašljiv i nepoverljiv, ali njegovo poverenje se brzo može steći i on postaje privržen i umiljat dečak. On je radoznao, a pritom obožava hranu! Vakcinisan je, kastriran i spreman da nađe novi dom, a možete ga udomiti zajedno sa njegovom mamom Pipi"
    return (
      <div>
          <About image1={imagee1} image2={imagee2} image3={imagee3}name={'Cupko'} species={'zec'} description={opis} />
      </div>
    )
}

export default AboutCupko