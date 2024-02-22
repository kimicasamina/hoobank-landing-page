import { React, useState } from 'react'
import { logo, menu, close } from '../assets'
import { navLinks } from '../constants'
import styles from '../styles'

const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    const [active, setActive] = useState('Home')

  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
        <img src={logo} alt="HooBank" className='w-[124px] h-[32px]' />
        <ul className="list-none sm:flex hidden justify-end items-center text-white flex-1">
            {navLinks.map((nav, index) => {
                return(
                    <li
                        key={nav.id}
                        className={`font-poppins text-white font-normal cursor-pointer text-[16px] hover:text-gray-400 transition-all}
                        ${active === nav.title ? "text-white" : "text-gray-300"}
                        ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}
                        onClick={() => setActive(nav.title)}
                    >
                        <a href={`#${nav.id}`}>
                            {nav.title}
                        </a>
                    </li>
                )
            })}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
            <img src={toggle ? close : menu} 
                alt="menu"
                className='w-[24px] h-[24px] object-contain'
                onClick={() => setToggle((prev) => !prev)}
            />
            <div className={`${toggle ? 'flex' : 'hidden'} bg-primary p-6 absolute top-20 right-0 mx-4 my-2 min-w-[150px] rounded-xl sidebar z-[5]`}>
            <ul className="list-none flex flex-col justify-end items-start flex-1">
                {navLinks.map((nav, index) => {
                    return(
                        <li
                            key={nav.id}
                            className={`font-poppins text-white font-medium cursor-pointer text-[16px] hover:text-gray-400 transition-all
                            ${active === nav.title ? 'text-white' : 'text-gray-300'}
                            ${index === navLinks.length - 1 ? 'mb-0' : 'mb-4'}`}
                            onClick={() => setActive(nav.title)}
                        >
                            <a href={`#${nav.id}`}>
                                {nav.title}
                            </a>
                        </li>
                    )
                })}
            </ul>
            </div>
        </div>

    </nav>
  )
}

export default Navbar