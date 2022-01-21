import React, { useState } from 'react'
import Header from '../Heaader'
import style from './Near.module.css'
import Arrow from '../../Assets/Icon.svg'
import { useDispatch } from 'react-redux'
import { OTPTogle } from '../../Redux/Actions/SignupActions'
const NearAcc = () => {
    const dispatch = useDispatch()
    const [userInfo, setuserInfo] = useState({
        name: "",
        accID: ''
    })
    const onChangeHandler = (e: any) => {
        setuserInfo({
            ...userInfo,
            [e.target.name]: e.target.value
        })
    }

    return (
        <>
            <Header />
            <div className={style.Contaner}>
                <p className={style.para}>Enter an Account ID to use with your NEAR account. Your Account ID will be used for all NEAR operations, including sending and receiving assets.</p>
                <p className={style.fullname}>Full Name</p>
                <input name="name" onChange={onChangeHandler} value={userInfo.name} className={style.fullNameInput} type="text" placeholder="Ex. John doe..." />
                <p className={style.fullname}>Account ID</p>
                <div className={`${style.input_group} ${style.suffix}`}>
                    <input name="accID" onChange={onChangeHandler} value={userInfo.accID} placeholder="Your Name..." className={`${style.input} ${style.fullNameInput}`} type="text" />
                    <span className={style.input_group_addon}>.near</span>
                </div>
                <button onClick={() => {
                    if (userInfo.name !== '' && userInfo.accID !== '' && userInfo.accID.length > 10) {
                        dispatch(OTPTogle({
                            togle: false,
                            verified: false,
                            name: userInfo.name,
                            accID: userInfo.accID
                        }))}}}
                    className={`${style.buttonContinue} ${userInfo.name !== '' && userInfo.accID !== '' && userInfo.accID.length > 10 ? style.buttonContinueActtive : ""}`}>Continue<img src={Arrow} alt="arrow" /></button>
                <p className={style.Termspara}>by clicking continue you must agree to near labs <br /><span className={style.termcolor}>Terms & Conditions ans Privacy Policy</span></p>
                <h4 className={style.Exist}>Already have NEAR account?</h4>
                <button className={`${style.buttonNear} ${style.buttonContinue}`}>Log in with NEAR<img src={Arrow} alt="arrow" /></button>
            </div>
        </>
    )
}

export default NearAcc
