import { combineReducers } from "redux";

import loginReducer from "../header/redux/reducer";

export const rootReducer = combineReducers({
  login: loginReducer
});

export type RootState = ReturnType<typeof rootReducer>;
