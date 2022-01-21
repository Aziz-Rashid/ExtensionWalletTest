import style from './Button.module.css';
import { OTPTogle } from '../../Redux/Actions/SignupActions'
import Arrow from '../../Assets/Icon.svg'
import { useDispatch } from 'react-redux';
interface buttonprops {
    title: String;
    formateOk: Boolean;
    checkEmailFormate: String;
    email: String;
}
const Button = (props: buttonprops) => {
    const dispatch = useDispatch()
    const { title, email, formateOk, checkEmailFormate } = props
    return (
        <>
            <button onClick={() => {
                if (formateOk || checkEmailFormate) {
                    dispatch(OTPTogle({
                        togle: true,
                        verified: false,
                        email,
                        name: "",
                        accID: ""
                    }))
                }
            }} className={`${style.buttonContinue} ${formateOk || checkEmailFormate ? style.buttonContinueActtive : ""}`}>{title}<img src={Arrow} alt="arrow" /></button>
            <p className={style.Termspara}>by clicking continue you must agree to near labs <br /><span className={style.termcolor}>Terms & Conditions ans Privacy Policy</span></p>
            <h4 className={style.Exist}>Already have NEAR account?</h4>
            <button className={`${style.buttonNear} ${style.buttonContinue}`}>Log in with NEAR<img src={Arrow} alt="arrow" /></button>
        </>
    )
}
export default Button