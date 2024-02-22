import React from 'react'
import { quotes } from '../assets'
import styles, {layout} from '../styles'
import { feedback } from '../constants'

const FeedbackCard = () => {
  return (
    <section id="feedbackCard" className="flex flex-col gap-y-12 sm:gap-y-20">
      <div className="flex flex-col sm:flex-row items-center">
        <h2 className={`${styles.heading3}`} >What people are{''}<br className='hidden sm:block'/>saying about us.</h2>
        <p className='font-poppins text-dimWhite text-xs sm:text-[18px] leading-normal sm:leading-relaxed py-2'>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
      </div>

      <div className="grid sm:grid-cols-3 gap-y-10 sm:gap-x-20">
        {feedback.map((item, index) => {
          return(
            <div key={item.id} className="flex justify-between flex-col gap-y-4 sm:gap-y-10">
              <div className="flex flex-col gap-y-2 sm:gap-y-4">
                <img src={quotes} alt="quote"  className='w-[30px] h-[30px]'/>
                <p className={`font-poppins font-normal text-sm sm:text-base leading-normal sm:leading-relaxed text-white max-w-[370px] `}>{item.content}</p>
              </div>
              <div className="flex flex-row ">
                <div className=" mr-4 flex justify-center items-center">
                  <img src={item.img} alt="profile image" className='w-[42px] h-[42px] rounded-full'/>
                </div>
                <div className="flex flex-col ">
                  <h4 className='font-poppins font-normal text-sm sm:text-base leading-normal sm:leading-loose text-white'>{item.name}</h4>
                  <p className={`${styles.paragraph}`}>{item.title}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default FeedbackCard