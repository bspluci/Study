import { createAction, handleActions } from "redux-actions";
import axios from "axios";

const CHANGE_INPUT = "auth/CHANGE_INPUT";
const RESET_FORM = "auth/RESET_FORM";

const REGISTER_LOADING = "auth/REGISTER_LOADING";
const REGISTER_SUCCESS = "auth/REGISTER_SUCCESS";
const REGISTER_FAILURE = "auth/REGISTER_FAILURE";

const registerLoading = createAction(REGISTER_LOADING);
const registerSuccess = createAction(REGISTER_SUCCESS);
const registerFailure = createAction(REGISTER_FAILURE);

export const changeInput = createAction(CHANGE_INPUT, ({ type, key, value }) => ({
   type,
   key,
   value,
}));
export const resetForm = createAction(RESET_FORM, type => type);
export const registerThunk = ({ username, password }) => async dispatch => {
   dispatch(registerLoading(true));
   try {
      const data = await axios.post("localhost:4000/api/auth/login", {
         username,
         password,
      });
      dispatch(registerSuccess(data.repsonse));
   } catch (e) {
      dispatch(registerFailure(e));
   }
   dispatch(registerLoading(false));
};

const initialState = {
   register: {
      username: "",
      password: "",
      passwordConfirm: "",
   },
   login: {
      username: "",
      password: "",
   },
   loading: "",
   data: "",
   error: "",
};

export default handleActions(
   {
      [CHANGE_INPUT]: (state, action) => {
         return {
            ...state,
            [action.payload.type]: {
               ...state[action.payload.type],
               [action.payload.key]: action.payload.value,
            },
         };
      },
      [RESET_FORM]: (state, action) => ({
         ...state,
         [action.payload]: initialState[action.payload],
      }),
      [REGISTER_LOADING]: (state, action) => ({
         ...state,
         loading: action.payload,
         error: null,
      }),
      [REGISTER_SUCCESS]: (state, action) => ({
         ...state,
         loading: false,
         data: action.payload,
         error: null,
      }),
      [REGISTER_FAILURE]: (state, action) => ({
         ...state,
         loading: false,
         error: action.payload,
      }),
   },
   initialState
);
