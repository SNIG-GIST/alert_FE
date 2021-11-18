const ALERT_SUCCESS = 'error/ALERT_SUCCESS';
const ALERT_ERROR = 'error/ALERT_ERROR';
const RESET_ERROR_INFO = 'error/RESET_ERROR_INFO';

export const alertError = (actionType, payload) => ({
  type: ALERT_ERROR,
  actionType: actionType,
  payload: payload,
});
export const alertSuccess = actionType => ({
  type: ALERT_SUCCESS,
  actionType: actionType,
});
export const resetErrorInfo = () => ({
  type: RESET_ERROR_INFO,
});

const initialState = {};

export default function errorReducer(state = initialState, action) {
  switch (action.type) {
    case ALERT_ERROR:
      return {
        ...state,
        [action.actionType]: action.payload,
      };
    case ALERT_SUCCESS:
      return {
        ...state,
        [action.actionType]: false,
      };
    case RESET_ERROR_INFO:
      return initialState;
    default:
      return state;
  }
}
