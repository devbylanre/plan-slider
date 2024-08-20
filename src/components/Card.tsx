import React from 'react';
import Styles from './styles.module.css';
import { motion } from 'framer-motion';

type CardProps = {
  name: string;
  price: number;
  description: string;
  features: string[];
};

const Card = ({ name, price, description, features }: CardProps) => {
  return (
    <React.Fragment>
      <div className={Styles.cardHeader}>
        <h3 className={Styles.cardName}>{name}</h3>
        <p className={Styles.cardPrice}>${price}</p>
      </div>
      <p className={Styles.cardDescription}>{description}</p>

      <ul className={Styles.cardFeatures}>
        {features.map((feature, index) => (
          <li
            key={index}
            className={Styles.cardFeature}
          >
            <svg
              stroke='currentColor'
              fill='none'
              stroke-width='2'
              viewBox='0 0 24 24'
              stroke-linecap='round'
              stroke-linejoin='round'
              height='1em'
              width='1em'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M5 12l5 5l10 -10'></path>
            </svg>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <motion.button
        initial={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 0.95, opacity: 0.8 }}
        className={Styles.cardBtn}
      >
        Buy {name}
      </motion.button>
    </React.Fragment>
  );
};

export default Card;
