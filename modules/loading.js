const START_LOADING = 'loading/START_LOADING';
const FINISH_LOADING = 'loading/FINISH_LOADING';
const RESET_LOADING_STATUS = 'loading/RESET_LOADING_STATUS';

export const startLoading = actionType => ({
  type: START_LOADING,
  actionType: actionType,
});
export const finishLoading = actionType => ({
  type: FINISH_LOADING,
  actionType: actionType,
});
export const resetLoadingStatus = () => ({
  type: RESET_LOADING_STATUS,
});

const initialState = {};

export default function loadingReducer(state = initialState, action) {
  switch (action.type) {
    case START_LOADING:
      return {...state, [action.actionType]: true};
    case FINISH_LOADING:
      return {...state, [action.actionType]: false};
    case RESET_LOADING_STATUS:
      return initialState;
    default:
      return state;
  }
}
