import { ActionTypes } from "../Constants/action_type";
const userOtp = {
  userOtp: {
    togle: false,
    email:"",
    verified: false,
    name: "",
    accID: ""
  }
}
export const OTPTogle: any = (state = userOtp, { type, payload }: any) => {
  switch (type) {

    case ActionTypes.OTP_Toggle:
      return { userOtp: payload };

    default:
      return state;
  }
};