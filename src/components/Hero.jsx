import { useState, React } from 'react'
import styles from '../styles'
import { discount, arrowUp, robot } from '../assets'
import { navLinks } from '../constants'
import GetStarted from './GetStarted'

const Hero = () => {

  return (
    <section id="home" className="flex md:flex-row flex-col ">
      <div className="flex flex-col flex-1 justify-center md:pt-0 relative z-1 my-[50px]">

        <div className="absolute w-[60%] h-[60%] z-0 left-[-150px] bg-gradient bg-white rounded-[50%] blur-[100px] opacity-10"></div>

        <div className="flex flex-row items-center rounded-[10px] drop-shadow-xl bg-discount-gradient px-2 sm:px-4 py-[4px] w-full sm:w-[fit-content] mb-4 ">
            <img src={discount} alt="Discount" className='w-[24px] h-[24px]'/>
            <p className={`${styles.paragraph} ml-2 text-[12px] ss:text-[18px]`}>
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
        <img src={robot} alt="billing" className="w-[100%] h-[100%] bottom-0 -right-[100px] relative z-[5]" />
        <div className="absolute z-1 w-[60%] h-[50%] top-[-50px] left-10 bg-gradient-to-br from-pink-300 to-white blur-[100px] opacity-10"></div>
        <div className="absolute z-2 w-[50%] h-[50%] right-[100px] rounded-full bg-white blur-[50px] opacity-10"></div>
        <div className="absolute z-3 w-[70%] h-[50%] bottom-[70px] right-[-100px] bg-gradient-to-br from-white to-blue-300 blur-[240px] opacity-15"  ></div>
      </div>

      <div className="flex sm:hidden justify-center items-center">
        <GetStarted />
      </div>

    
    </section>
  )
}

export default Hero