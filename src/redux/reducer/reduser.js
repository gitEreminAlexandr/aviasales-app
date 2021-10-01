import { combineReducers } from 'redux';
import filterReducer from './filterReducer';
import sortingTabsReducer from './sortingTabsReducer';
import getDataReduser from './getDataReduser';

const reducer = combineReducers({
  filterReducer,
  sortingTabsReducer,
  getDataReduser,
});

export default reducer;
