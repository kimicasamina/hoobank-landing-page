import React from 'react'
import { features } from '../constants'
import styles, {layout} from '../styles'
import Button from './Button'

const FeatureCard = ({icon, title, content, index}) => {
  return (
    <div className={`w-full flex flex-row ${index !== features.length -1 ? 'mb-4' : 'mb-0'}`}>
      <div className="w-[64px] h-[64px] rounded-full flex justify-center items-center bg-dimBlue mr-4 " style={{aspectRatio:'1/1'}}>
        <img src={icon} alt="icon" className='object-contain w-[50%] h-[50%]'  />
      </div>
      <div className="flex flex-col">
        <h4 className='font-poppins font-normal text-white'>{title}</h4>
        <p className={`${styles.paragraph}`}>{content}</p>
      </div>
    </div>
  )
}

const Business = () => {
  // console.log(features)

  return (
    <section className={`${layout.section}`}>
      <div className={`${layout.sectionInfo}`}>
        <h3 className={`${styles.heading3}  mb-4 text-center lg:text-left`}>
          You do the business, {''}<br className='hidden sm:block'/>
          we'll handle the money.
        </h3>
        <p className={`${styles.paragraph} mb-8 text-justify lg:text-left`}>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
        <Button/>
      </div>
      <div className={`${layout.sectionImg} flex-col items-start`}>
        {features.map((feature, index) => {
          return(
            <FeatureCard key={feature.id} {...feature} index={index}/>
          )
        })}
      </div>
    </section>
  )
}

export default Business