import React from 'react';
import styles from './Input.module.css';

const Input = ({ label, type, name }) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <input type={type} id={name} name={name} className={styles.input} />
      <p className={styles.error}>Erro</p>
    </div>
  );
};

export default Input;
