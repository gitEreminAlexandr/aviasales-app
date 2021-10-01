import React from 'react';
import classes from './Header.module.scss';
import logo from '../../img/logo.png';

const Header = () => (
  <header className={classes.header}>
    <img className={classes.header__logo} src={logo} alt="logo" />
  </header>
);

export default Header;
