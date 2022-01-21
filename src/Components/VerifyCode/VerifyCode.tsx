import React, { useMemo, useState } from 'react';
import Header from '../Heaader';
import style from '../VerifyCode/VerifyCode.module.css'
import Arrow from '../../Assets/Icon.svg'
import { useDispatch, useSelector } from 'react-redux';
import { OTPTogle } from '../../Redux/Actions/SignupActions';

const VerifyCode = () => {
    const arr = [1, 2, 3, 4, 5, 6]
    const dispatch = useDispatch()
    const state = useSelector<any>(state => state.OTPTogle)
    const [getdata, setgetdata] = useState<any>()
    useMemo(() => setgetdata(state), [state])
    const [otpCode, setotpCode] = useState({
        opt1: '',
        opt2: '',
        opt3: '',
        opt4: '',
        opt5: '',
        opt6: '',
    })
    const onChangeHandler = (e: any) => {
        setotpCode({
            ...otpCode,
            [e.target.name]: e.target.value
        })
    }

    const VerificationCodeSubmit = () => {
        if(otpCode.opt1 === '0'&& otpCode.opt2 === '0'&& otpCode.opt3 === '0'&& otpCode.opt4 === '0'&&otpCode.opt5 === '0'&& otpCode.opt6 === '0'){
           dispatch(OTPTogle({ togle: false,verified:true }))
        }
    }
    return (
        <>
            <Header />
            <div className={style.container}>
                <div className={style.box}>
                    <p className={style.description}>We've sent a 6-digit verification code to the email address <br /><span className={style.email}>{getdata?.userOtp?.email}</span></p>
                    <p className={style.enterverifycode}>Enter verification code</p>
                    <div className={style.flex}>
                        {arr.map((el) => (
                            <div>
                                <input key={el} value={el === 1 ? otpCode.opt1 : el === 2 ? otpCode.opt2 : el === 3 ? otpCode.opt3 : el === 4 ? otpCode.opt4 : el === 5 ? otpCode.opt5 : el === 6 ? otpCode.opt6 : ""} name={`opt${el}`} onChange={(e) => e.target.value.length > 1 ? false : onChangeHandler(e)} className={style.otpInput} type="number" />
                            </div>
                        )
                        )}
                    </div>
                    <div>
                        <button onClick={VerificationCodeSubmit} className={`${style.buttonContinue} ${otpCode.opt1 === '0' && otpCode.opt4 === '0' && otpCode.opt6 === '0' && style.buttonContinueActtive}`}>Continue<img src={Arrow} alt="arrow" /></button>
                        <p className={style.recive}>Didn't receive your code?</p>
                        <p className={style.diff}>Send to a different email address</p>
                        <p className={style.diff}>Resend your code </p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default VerifyCode