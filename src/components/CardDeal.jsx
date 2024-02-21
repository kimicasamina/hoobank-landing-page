import React from 'react'
import {card} from '../assets'
import styles, {layout} from '../styles'
import Button from './Button'

const CardDeal = () => {
  return (
    <div className={`${layout.section}`}>
      <div className={`${layout.sectionInfo} `}>
        <h2 className={`${styles.heading3} mb-4`}>Find a better card deal <br className='block sm:hidden'/>
        in few easy steps.</h2>
        <p className={`${styles.paragraph}`}>Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</p>
        <Button styles='mt-8'/>
      </div>
      <div className={`${layout.sectionImg} `}>
        <img src={card} alt="card deal" />
      </div>
    </div>
  )
}

export default CardDeal