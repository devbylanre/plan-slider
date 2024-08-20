import React, { useState } from 'react';
import Styles from './styles.module.css';
import plans from './data';
import Card from './components/Card';
import { motion } from 'framer-motion';

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const onNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % plans.length);
  };

  const onPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? plans.length - 1 : prevIndex - 1
    );
  };

  return (
    <main className={Styles.main}>
      <section className={Styles.section}>
        <motion.div
          className={Styles.pricingBox}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <h2>Choose a Plan</h2>
          <p>Purchase a plan for your business</p>
        </motion.div>
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          className={Styles.cards}
          animate={{ x: -currentIndex * 330, opacity: 1 }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 30,
            x: { duration: 0.4 },
            opacity: { duration: 0.4 },
          }}
        >
          {plans.map((plan, index) => {
            const isCurrentIndex = index === currentIndex;

            return (
              <motion.div
                className={Styles.card}
                initial={{ y: isCurrentIndex ? -24 : 0, opacity: 0.5 }}
                animate={{
                  y: isCurrentIndex ? -24 : 0,
                  opacity: isCurrentIndex ? 1 : 0.4,
                  filter: isCurrentIndex ? 'blur(0px)' : 'blur(2px)',
                }}
                transition={{ delay: 0.3, duration: 0.3 }}
              >
                <Card
                  name={plan.name}
                  price={plan.price}
                  features={plan.features}
                  description={plan.description}
                />
              </motion.div>
            );
          })}
        </motion.div>

        <div className={Styles.btns}>
          <motion.button
            className={Styles.btn}
            initial={{ x: 0 }}
            whileHover={{ x: -4 }}
            transition={{ duration: 0.1 }}
            onClick={onPrev}
          >
            <svg
              stroke='currentColor'
              fill='none'
              strokeWidth='2'
              viewBox='0 0 24 24'
              strokeLinecap='round'
              strokeLinejoin='round'
              height='1em'
              width='1em'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M15 6l-6 6l6 6'></path>
            </svg>
          </motion.button>
          <motion.button
            className={Styles.btn}
            initial={{ x: 0 }}
            whileHover={{ x: 4 }}
            transition={{ duration: 0.1 }}
            onClick={onNext}
          >
            <svg
              stroke='currentColor'
              fill='none'
              strokeWidth='2'
              viewBox='0 0 24 24'
              strokeLinecap='round'
              strokeLinejoin='round'
              height='1em'
              width='1em'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M9 6l6 6l-6 6'></path>
            </svg>
          </motion.button>
        </div>
      </section>
    </main>
  );
}

export default App;
