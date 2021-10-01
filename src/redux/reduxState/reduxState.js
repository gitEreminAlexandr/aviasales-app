const reduxState = {
  filterAll: false,
  filterState: [
    { name: 'Без пересадок', checked: true, id: 0 },
    { name: '1 пересадка', checked: false, id: 1 },
    { name: '2 пересадки', checked: false, id: 2 },
    { name: '3 пересадки', checked: false, id: 3 },
  ],
  sortingTabsState: 'cheap',
  tickets: [],
  errorStatus: false,
  loandingStatus: true,
};

export default reduxState;
