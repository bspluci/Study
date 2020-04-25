import { createAction, handleActions } from "redux-actions";
const CHANGE_INPUT = "auth/CHANGE_INPUT";
const RESET_FORM = "auth/RESET_FORM";
export const changeInput = createAction(CHANGE_INPUT, (type, key, value) => ({
   type,
   key,
   value,
}));
export const resetForm = createAction(RESET_FORM, (type) => type);
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
      [CHANGE_INPUT]: (state, action) => ({
         ...state,
         [action.payload.type]: {
            ...state[action.payload.type],
            [action.payload.key]: action.payload.value,
         },
      }),
      [RESET_FORM]: (state, action) => ({
         ...state,
         [action.payload]: initialState[action.payload],
      }),
   },
   initialState
);
