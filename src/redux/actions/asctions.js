import getDataTicketsApi from '../../service/api';

export const filterCheck = (name) => ({
  type: 'FILTER_CHEKC',
  payload: name,
});
export const filterAllCheck = () => ({ type: 'FILTER_ALL_CHEKC' });
export const sortingTabs = (name) => ({
  type: 'SORTING_TABS',
  payload: name,
});
export const addData = (tickets) => ({
  type: 'ADD_DATA',
  payload: tickets,
});

export const errorStatus = (status) => ({ type: 'ERROR_CHEKC', payload: status });
export const loadingStatus = (status) => ({ type: 'LOANDING_CHEKC', payload: status });

export const getData = () => (dispatch) => {
  let errorCount = 0;
  const getDataApi = () => {
    getDataTicketsApi()
      .then(({ tickets, stop }) => {
        dispatch(addData(tickets));

        if (!stop) {
          getDataApi();
        } else {
          sessionStorage.removeItem('searchId');
          dispatch(loadingStatus(false));
        }
      })
      .catch(() => {
        errorCount += 1;
        if (errorCount === 10) {
          dispatch(errorStatus(true));
          dispatch(loadingStatus(false));
        } else {
          getDataApi();
        }
      });
  };

  getDataApi();
};
