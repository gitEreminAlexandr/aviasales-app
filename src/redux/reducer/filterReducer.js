import reduxState from '../reduxState/reduxState';

const filterReducer = (state = reduxState, action) => {
  switch (action.type) {
    case 'FILTER_ALL_CHEKC':
      return {
        ...state,
        filterAll: !state.filterAll,
        filterState: state.filterState.map((element) => ({
          ...element,
          checked: !state.filterAll,
        })),
      };
    case 'FILTER_CHEKC':
      // eslint-disable-next-line no-case-declarations
      const arrTransfer = state.filterState.map((element) =>
        element.name === action.payload ? { ...element, checked: !element.checked } : element
      );
      return {
        ...state,
        filterAll: !arrTransfer.some((elem) => !elem.checked),
        filterState: arrTransfer,
      };
    default:
      return state;
  }
};

export default filterReducer;
