import React from 'react'
import styles, {layout} from '../styles'
import Button from './Button'

const CTA = () => {
  return (
    <section id="CTA" className="my-20 box-shadow-2xl">
      <div className="flex flex-col sm:flex-row justify-between sm:items-center bg-discount-gradient rounded-2xl py-10 px-10 sm:py-20 sm:px-20 gap-x-8 gap-y-8">
        <div className="flex-1 flex flex-col gap-4">
          <h2 className={`${styles.heading2}`}>Let's try our service now!</h2>
          <p className={`w-full sm:max-w-[450px] text-white ${styles.paragraph}`}>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
        </div>
        <div className="">
          <Button />
        </div>
      </div>
    </section>
  )
}

export default CTA