import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getData } from '../../redux/actions/asctions';
import Filter from '../Filter';
import Header from '../Header';
import Main from '../Main';
import classes from './App.module.scss';

const App = ({ tickets, onGetData }) => {
  useState(() => {
    if (tickets.length === 0) onGetData();
  }, [tickets.length, onGetData]);

  return (
    <section className={classes.app}>
      <Header />
      <section className={classes['flex-conteiner']}>
        <Filter />
        <Main />
      </section>
    </section>
  );
};

App.propTypes = {
  onGetData: PropTypes.func.isRequired,
  tickets: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = ({ getDataReduser }) => ({
  tickets: getDataReduser.tickets,
});

const mapDispatchToProps = (dispatch) => ({
  onGetData: () => dispatch(getData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
