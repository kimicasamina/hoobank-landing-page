import React from 'react'

const Button = ({styles}) => {
  return (
    <button className={`${styles} bg-blue-gradient text-black rounded-lg px-10 py-4 w-[fit-content] font-poppins drop-shadow-lg `}>
      Get Started
    </button>
  )
}

export default Button