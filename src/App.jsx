import React from 'react'
import styles from './styles'

import {Navbar, Billing, Business, Button, CardDeal, Clients, CTA, FeedbackCard, Footer, GetStarted, Hero} from './components/Navbar'

const App = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`styles.boxWidth`}>
          Navbar
        </div>
      </div>

      <div className={`${styles.paddingX} ${styles.flexStart}`}>
        <div className={`styles.boxWidth`}>
          Hero
        </div>
      </div>
    </div>
  )
}

export default App