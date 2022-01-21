import { ActionTypes } from "../Constants/action_type";

export const OTPTogle = (optdata:any) => {
  return {
    type: ActionTypes.OTP_Toggle,
    payload: optdata,
  };
};

