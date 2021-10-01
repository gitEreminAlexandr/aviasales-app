import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';

import SpinnerIndicator from '../SpinnerIndicator';
import ErrorIndicator from '../ErrorIndicator';
import Ticket from '../Ticket';

const ListTicket = ({ listDataTicket, loandingStatus, errorStatus, sortingTabsState, filterState }) => {
  const filterSorting = (arr) => {
    const newArr = [];
    arr.forEach((item) => {
      filterState.forEach((elem) => {
        if (elem.checked && item.segments[0].stops.length === elem.id) {
          newArr.push(item);
        }
      });
    });

    return newArr;
  };

  const renderContent = () => {
    let listElement;

    if (errorStatus) {
      return <ErrorIndicator />;
    }

    if (sortingTabsState === 'cheap') {
      listElement = filterSorting(listDataTicket)
        .sort((elementA, elementB) => (elementA.price > elementB.price ? 1 : -1))
        .slice(0, 5);
    }
    if (sortingTabsState === 'fast') {
      listElement = filterSorting(listDataTicket)
        .sort((elementA, elementB) => (elementA.segments[0].duration > elementB.segments[0].duration ? 1 : -1))
        .slice(0, 5);
    }

    if (listElement.length === 0) {
      return <p>Рейсов, подходящих под заданные фильтры, не найдено</p>;
    }

    return listElement.map(({ carrier, ...element }) => <Ticket {...element} key={uniqid()} />);
  };

  const loandingSpinner = loandingStatus ? <SpinnerIndicator /> : null;

  return (
    <>
      {loandingSpinner}
      {renderContent()}
    </>
  );
};

ListTicket.propTypes = {
  listDataTicket: PropTypes.arrayOf(PropTypes.object).isRequired,
  loandingStatus: PropTypes.bool.isRequired,
  errorStatus: PropTypes.bool.isRequired,
  sortingTabsState: PropTypes.string.isRequired,
  filterState: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = ({ getDataReduser, sortingTabsReducer, filterReducer }) => ({
  listDataTicket: getDataReduser.tickets,
  loandingStatus: getDataReduser.loandingStatus,
  errorStatus: getDataReduser.errorStatus,
  sortingTabsState: sortingTabsReducer.sortingTabsState,
  filterState: filterReducer.filterState,
});

export default connect(mapStateToProps)(ListTicket);
