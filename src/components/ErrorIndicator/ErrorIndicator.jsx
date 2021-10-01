import React from 'react';
import classes from './ErrorIndicator.module.scss';

const ErrorIndicator = () => (
  <section className={classes.error}>
    <p className={classes.error__text}>Ой😲 Что-то пошло не так :(</p>
  </section>
);

export default ErrorIndicator;
