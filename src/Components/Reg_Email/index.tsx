import React, { useMemo, useState } from 'react'
import RegEmail from './Reg_Email'
import VerifyCode from '../VerifyCode/VerifyCode';
import { useSelector } from 'react-redux'
import NearAcc from '../NearAcc/NearAcc';

const SignUp = () => {
    const [getOptsdata, setgetOptsdata] = useState<any>()
    const data = useSelector<any>((state) => state.OTPTogle)

    useMemo(() => {
        setgetOptsdata(data)
    }, [data])
    return (
        <>
            {getOptsdata?.userOtp?.verified === false ? (
                <>
                    {!getOptsdata?.userOtp?.togle ? <RegEmail /> : <VerifyCode />}
                </>
            ) : (
                    <NearAcc />
                )}
        </>
    )
}
export default SignUp