import { useState, React } from 'react'
import styles from '../styles'
import { discount, arrowUp, robot } from '../assets'
import { navLinks } from '../constants'
import GetStarted from './GetStarted'

const Hero = () => {

  return (
    <section id="home" className="flex md:flex-row flex-col ">
      <div className="flex flex-col flex-1 justify-center md:pt-0 relative z-1">

        <div className="absolute w-[50%] h-[50%] z-0 left-[-150px] bg-gradient bg-white rounded-[50%] blur-[100px] opacity-5"></div>

        <div className="flex flex-row items-center rounded-[10px] drop-shadow-xl bg-discount-gradient px-2 sm:px-4 py-[4px] w-auto sm:w-[fit-content] mb-4 ">
            <img src={discount} alt="Discount" className='w-[24px] h-[24px]'/>
            <p className={`${styles.paragraph} ml-2 text-[12px] md:text-[18px]`}>
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
          <p className={`${styles.paragraph} `}>Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. 
          We examine annual percentage rates, annual fees.</p>
        </div>
      </div>

      <div className='flex-1 flex md:y-0 my-10 justify-center items-center relative'>
        <img src={robot} alt="billing" className="w-[100%] h-[100%] bottom-0 -right-[50px] sm:-right-[100px] relative z-[5]" />
        <div className="absolute z-1 w-[50%] h-[60%] rounded-full top-[-50px] left-[150px] bg-gradient-to-r from-pink-300 to-white blur-[700px] opacity-20"></div>
        <div className="absolute z-2 w-[50%] h-[50%] right-[100px] bottom-[90px] rounded-full bg-blue-400 blur-[50px] opacity-20"></div>
        <div className="absolute z-3 w-[70%] h-[60%] bottom-[50px] right-[-70px] bg-gradient-to-br to-white from-blue-600 blur-[150px] opacity-10"  ></div>
      </div>

      <div className="flex sm:hidden justify-center items-center">
        <GetStarted />
      </div>

    
    </section>
  )
}

export default Hero