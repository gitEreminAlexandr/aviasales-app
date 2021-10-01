import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';
import classes from './Filter.module.scss';
import classesCheck from './FilterCheckbox.module.scss';
import { filterCheck, filterAllCheck } from '../../redux/actions/asctions';

const Filter = ({ filterAllState, filterState, onFilterCheck, onAllCheck }) => {
  const classNameLabel = classNames(classes['filter__item--label'], classesCheck.check);
  const classNameInput = classNames(classes['filter__item--input'], classesCheck.check__input);

  return (
    <aside className={classes.filter}>
      <h4 className={classes.filter__title}>КОЛИЧЕСТВО ПЕРЕСАДОК</h4>
      <ul className={classes.filter__list}>
        <li className={classes.filter__item}>
          <label className={classNameLabel}>
            <input className={classNameInput} type="checkbox" checked={filterAllState} onChange={() => onAllCheck()} />
            <span className={classesCheck.check__box} />
            Все
          </label>
        </li>
        {filterState.map((element) => (
          <li className={classes.filter__item} key={element.id}>
            <label className={classNameLabel}>
              <input
                className={classNameInput}
                type="checkbox"
                checked={element.checked}
                onChange={() => onFilterCheck(element.name)}
              />
              <span className={classesCheck.check__box} />
              {element.name}
            </label>
          </li>
        ))}
      </ul>
    </aside>
  );
};

Filter.propTypes = {
  filterAllState: PropTypes.bool.isRequired,
  filterState: PropTypes.arrayOf(PropTypes.object).isRequired,
  onAllCheck: PropTypes.func.isRequired,
  onFilterCheck: PropTypes.func.isRequired,
};

const mapStateToProps = ({ filterReducer }) => ({
  filterAllState: filterReducer.filterAll,
  filterState: filterReducer.filterState,
});

const mapDispatchToProps = (dispatch) => ({
  onFilterCheck: (name) => dispatch(filterCheck(name)),
  onAllCheck: () => dispatch(filterAllCheck()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
