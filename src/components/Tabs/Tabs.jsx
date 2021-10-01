import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { sortingTabs } from '../../redux/actions/asctions';

import classes from './Tabs.module.scss';

const Tabs = ({ sortingTabsState, onSorting }) => {
  const classNameBtnCheap = classNames(
    classes.tabs__button,
    classes['tabs__button--cheap'],
    sortingTabsState === 'cheap' ? classes['active-tab'] : null
  );
  const classNameBtnFast = classNames(
    classes.tabs__button,
    classes['tabs__button--cheap'],
    sortingTabsState === 'fast' ? classes['active-tab'] : null
  );

  return (
    <nav className={classes.tabs}>
      <ul className={classes.tabs__list}>
        <li className={classes.tabs__item}>
          <button
            className={classNameBtnCheap}
            type="button"
            onClick={() => {
              onSorting('cheap');
            }}
          >
            САМЫЙ ДЕШЕВЫЙ
          </button>
        </li>
        <li className={classes.tabs__item}>
          <button
            className={classNameBtnFast}
            type="button"
            onClick={() => {
              onSorting('fast');
            }}
          >
            САМЫЙ БЫСТРЫЙ
          </button>
        </li>
      </ul>
    </nav>
  );
};

Tabs.propTypes = {
  sortingTabsState: PropTypes.string.isRequired,
  onSorting: PropTypes.func.isRequired,
};

const mapStateToProps = ({ sortingTabsReducer }) => ({
  sortingTabsState: sortingTabsReducer.sortingTabsState,
});

const mapDispatchToProps = (dispatch) => ({
  onSorting: (name) => dispatch(sortingTabs(name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Tabs);
