import { combineReducers } from "redux";
import { OTPTogle } from "./SignupReducer";
const reducers = combineReducers({
  OTPTogle: OTPTogle,
});
export default reducers;