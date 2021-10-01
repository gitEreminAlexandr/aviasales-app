import reduxState from '../reduxState/reduxState';

const getDataReduser = (state = reduxState, action) => {
  switch (action.type) {
    case 'ADD_DATA':
      return {
        ...state,
        tickets: [...state.tickets, ...action.payload],
      };

    case 'LOANDING_CHEKC':
      return {
        ...state,
        loandingStatus: action.payload,
      };

    case 'ERROR_CHEKC':
      return {
        ...state,
        errorStatus: action.payload,
      };

    default:
      return state;
  }
};

export default getDataReduser;
