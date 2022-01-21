import { useMemo, useState } from 'react'
import style from './Header.module.css'
import Logo from '../../Assets/homepage.svg'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { OTPTogle } from '../../Redux/Actions/SignupActions';
//Header Components For all Reg Pages

const Header = () => {
    const [getOtpData, setGetOtpData] = useState<any>()
    const dispatch = useDispatch()
    const data = useSelector<any>((state) => state.OTPTogle)
    useMemo(() => {
        setGetOtpData(data)
    }, [data])
    return (
        <div className={style.headerContainer}>
            {getOtpData?.userOtp?.verified === false ? (
                <>
                    {!getOtpData?.userOtp?.togle ? (
                        <div className={style.box}>
                            <img src={Logo} alt="logoImage" />
                        </div>
                    ) : (
                            <>
                                <div className={style.box}>
                                    <h3 className={style.verification}>Verification</h3>
                                </div>
                                <div onClick={() => dispatch(OTPTogle({ togle: false, verified: false,name:"",accID:"" }))} className={style.closealign}>
                                    <h3 className={style.close}>X</h3>
                                </div>
                            </>
                        )}
                </>
            ) : (
                    <>
                        <div className={style.box}>
                            <h3 className={style.verification}>Create NEAR Account</h3>
                        </div>
                        <div onClick={() => dispatch(OTPTogle({ togle: false, verified: false,name:"",accID:"" }))} className={style.closealign}>
                            <h3 className={style.close}>X</h3>
                        </div>
                    </>
                )}
        </div>
    )
}
export default Header