import React from 'react'
import { arrowUp } from '../assets'

const GetStarted = () => {
  return (
    <div className="flex cursor-pointer">
      <div className="p-[2px] bg-blue-gradient h-[140px] w-[140px] rounded-full ">
        <div className="w-full h-full bg-primary rounded-full flex flex-col justify-center items-center ">
          <p className='flex flex-row text-gradient'>
            <span className='mr-[6px]'>Get</span>{" "}
            <img src={arrowUp} alt="arrow-up" className=''/>
          </p>
          <p className='text-gradient'>Started</p>
        </div>
      </div>
    </div>
  )
}

export default GetStarted