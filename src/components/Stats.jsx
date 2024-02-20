import React from 'react'
import { stats } from '../constants'

const Stats = () => {
  
  return (
    <section id="stats" className='flex flex-col md:flex-row mb-20 md:mb-8'>
      {stats.map((stat, index) => {
          return(
              <li key={stat.id} className="flex-1 flex flex-row justify-center items-center my-8 relative">
                <div className={index !== stats.length - 1 ? `hidden md:flex absolute h-[18px] border-b-[100%] sm:border-r right-0` : `hidden`}></div>
                <h1 className='items-center text-white text-4xl font-bold mr-4'>{stat.value}</h1>
                <p className='text-gradient flex justify-between items-center text-[18px]'>{stat.title}
                </p>
              </li>
            
          )
        })}      
    </section>
  )
}

export default Stats