import { createAction, handleActions } from 'redux-actions';

export const GET_USER_LIST = 'user/list/GET_USER_LIST';
export const getUserRequest = createAction(GET_USER_LIST);
export const RETURN_USER_LIST = 'user/list/RETURN_USER_LIST';
export const getUserResponse = createAction(RETURN_USER_LIST);


const initialState = {
  users: [],
  error: undefined
};

const reducer = handleActions(
  {
    [getUserRequest](state) {
      return { ...state, users: []};
    },
    [getUserResponse](state, action) {
        if (action.error) {
            return { ...state, error: action.payload };
        } else if (action.payload) {
            return { ...state, users: action.payload };
        }
        return state;
    },
  },
  initialState,
);

export default reducer;
