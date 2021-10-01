import reduxState from '../reduxState/reduxState';

const sortingTabsReducer = (state = reduxState, action) => {
  switch (action.type) {
    case 'SORTING_TABS':
      return {
        ...state,
        sortingTabsState: action.payload,
      };
    default:
      return state;
  }
};

export default sortingTabsReducer;
