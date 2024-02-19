import { useState, React } from 'react'
import styles from '../styles'
import { discount, arrowUp, robot } from '../assets'
import { navLinks } from '../constants'
import GetStarted from './GetStarted'

const Hero = () => {

  return (
    <section id="home" className="flex md:flex-row flex-col ">
      <div className="flex flex-col flex-1 justify-center pt-10 md:pt-0">
        <div className="flex flex-row items-center rounded-[10px] drop-shadow-xl bg-discount-gradient px-2 sm:px-4 py-[4px] w-full sm:w-[fit-content] mb-4 ">
            <img src={discount} alt="Discount" className='w-[24px] h-[24px]'/>
            <p className={`${styles.paragraph} ml-2 text-[14px] ss:text-[18px]`}>
              <span className='text-white mr-2'>20%</span>
              DISCOUNT FOR {" "}
              <span className='text-white mr-2'>1 MONTH</span>
              ACCOUNT
            </p>
        </div>

  
        <div className="flex flex-row justify-between">
          <div className="">
            <h1 className={`${styles.heading2}`}>
              The Next <br className='sm:block hidden'/>
              <span className={`${styles.heading2}  text-gradient`}>Generation</span>
            </h1>
          </div>
          <div className="sm:flex hidden">
            <GetStarted />
          </div>
        </div>

        <div className='flex mb-4'>
          <h1 className={`${styles.heading2} `}>Payment Method.</h1>
        </div>

        <div className='flex'>
          <p className={`${styles.paragraph} leading-relaxed`}>Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. 
          We examine annual percentage rates, annual fees.</p>
        </div>
      </div>

      <div className='flex-1 flex md:y-0 my-10 justify-center items-center relative'>
        <img src={robot} alt="billing" className="w-[100%] h-[100%] -right-[100px] relative z-[5]" />
        {/* gradient start  */}
        <div className="absolute z-[0] w-[50%] h-[100%] -top-[120px] bg-pink-gradient" />
        {/* <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bg-white bottom-40 opacity-25" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 bg-blue opacity-25" /> */}
        {/* gradient end  */}
      </div>

      <div className="flex sm:hidden justify-center items-center">
        <GetStarted />
      </div>

    
    </section>
  )
}

export default Hero