export const SELECT_FELLOW = 'redux-training/fellows/SELECT_FELLOW';
export const GET_FELLOWS = 'redux-training/fellows/GET_FELLOWS';
export const GET_FELLOWS_SUCCESS = 'redux-training/fellows/GET_FELLOWS_SUCCESS';
export const GET_FELLOWS_FAIL = 'redux-training/fellows/GET_FELLOWS_FAIL';
export const GET_FELLOW = 'redux-training/fellows/GET_FELLOW';
export const GET_FELLOW_SUCCESS = 'redux-training/fellows/GET_FELLOW_SUCCESS';
export const GET_FELLOW_FAIL = 'redux-training/fellows/GET_FELLOW_FAIL';

const initialState = {
  fellowList: [],
  isLoading: false,
  isLoaded: false,
  error: null,
};

/* REDUCER
 ================================================================================================ */
export default function reducer(state = initialState, action = {}) {
  const { type } = action;

  switch (type) {
    case SELECT_FELLOW:
      return { ...state, fellowSelected: action.fellow };

    case GET_FELLOWS:
      return { ...state, isLoading: true };

    case GET_FELLOWS_SUCCESS:
      return { ...state, isLoading: false, isLoaded: true, error: null, fellowList: action.result };

    case GET_FELLOWS_FAIL:
      return { ...state, isLoading: false, error: action.error, fellowList: [] };

    case GET_FELLOW:
      return { ...state, isLoading: true };

    case GET_FELLOW_SUCCESS:
      return { ...state, isLoading: false, error: null, fellowSelected: action.result[0] };

    case GET_FELLOW_FAIL:
      return { ...state, isLoading: false, error: action.error, fellowSelected: null };

    default:
      return state;
  }
}

/* ACTIONS CREATORS
 ================================================================================================ */
export function selectFellow(fellow) {
  return { type: SELECT_FELLOW, fellow };
}

export function getFellows(data) {
  return {
    types: [GET_FELLOWS, GET_FELLOWS_SUCCESS, GET_FELLOWS_FAIL],
    promise: new Promise((resolve) => resolve(data)), // TODO
  };
}

export function getFellow(data) {
  return {
    types: [GET_FELLOW, GET_FELLOW_SUCCESS, GET_FELLOW_FAIL],
    promise: new Promise((resolve) => resolve(data)), // TODO
  };
}
