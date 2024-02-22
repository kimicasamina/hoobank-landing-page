import React from 'react'
import { footerLinks, socialMedia } from '../constants'
import { logo } from '../assets'
import styles from '../styles'

const Footer = () => {

  return (
    <section id="footer" className="flex flex-col gap-y-4">
      <div className="grid grid-cols-1 grid-rows-auto gap-y-8 sm:grid-cols-5 sm:gap-x-8 items-start ">
        <div className="sm:col-start-1 sm:col-end-3  ">
          <img src={ logo } alt="hoobank logo" className='mb-4'/>
          <p className={`font-poppins text-dimWhite font-normal text-base sm:text-[18px]leading-relaxed sm:max-w-[350px]`}>A new way to make the payments easy, reliable and secure.</p>
        </div>

        
        {footerLinks.map((footerLink) => {
          return(
            <div className="flex flex-col sm:justify-self-end">
              <h4 className="text-white font-poppins font-semibold sm:text-[16px] mb-4">{footerLink.title}</h4>
              <ul className="flex flex-col gap-y-2">
                {footerLink.links.map((link) => {
                  return(
                    <a href={link.link} className="text-dimWhite font-poppins font-normal sm:text-sm hover:text-white">{link.name}</a>
                  )
                })}
              </ul>
            </div>
          )
        })}
      </div>

      <div className="w-full flex flex-col sm:flex-row items-center justify-between border-t border-t-dimWhite my-4 py-4 gap-y-4">
        <div className="flex-1 flex flex-col justify-center items-center sm:items-start gap-y-2 gap-x-4">
          <img src={logo} alt="hoobank logo" className='max-h-[28px]'/>
          <p className="text-white font-poppins text-sm ">All rights reserved 20024.</p>
        </div>
        <div className="flex-1 flex flex-row justify-end gap-x-4">
          {socialMedia.map((social) => {
            return(
              <a key={social.id} href={social.link} className="">
                <img src={social.icon} alt={social.id} className=''/>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Footer