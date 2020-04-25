import { createAction, handleActions } from "redux-actions";

const CHANGE_INPUT = "input/CHANGE_INPUT";
const INSERT = "input/INSERT";

export const changeIput = createAction(CHANGE_INPUT, (input) => input);

const initialState = {
   input: "",
   list: [],
};

export default handleActions(
   {
      [CHANGE_INPUT]: (state, action) => ({
         ...state,
         input: action.payload,
      }),
   },
   initialState
);
