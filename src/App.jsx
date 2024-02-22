import React from 'react';
import styles from './styles';
import Navbar from './components/Navbar';
import { Billing, Business, CTA, CardDeal, Clients, FeedbackCard, Footer, Hero, Stats } from './components';

const App = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <FeedbackCard />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App