import React from 'react'
import {apple, google, bill} from '../assets'
import styles, {layout} from '../styles'
const Billing = () => {

  return (
    <section id="billing" className={`${layout.sectionReverse} `}>
      <div className={`${layout.sectionImgReverse} `}>
        <img src={bill} alt="billing" className='w-[100%] h-[100%] relative z-[5]'/>
              {/* ----- GRADIENT ---- */}
        <div className="absolute z-[1] rounded-full  w-[50%] h-[50%] top-0 left-[-30%] bg-gradient-to-r from-white to-white blur-[150px] opacity-10"  ></div>
        <div className="absolute z-[2] w-[100%] h-[100%] rounded-full bottom-0 left-[-50%] bg-gradient-to-t from-pink-300 from-pink-300 blur-[750px] opacity-25"></div>
      </div>
      <div className={`${layout.sectionInfo} `}>
        <h3 className={`${styles.heading3}`}>Easily control your <br />
        billing & invoicing.</h3>
        <p className={`${styles.paragraph} mb-8 mt-4`}>
        Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
        </p>
        <div className="flex flex-wrap gap-x-4">
          <img src={apple} alt="apple" />
          <img src={google} alt="google" />
        </div>
      </div>

    </section>
  )
}

export default Billing