import React, { useState, useMemo } from 'react'; // Import React modules
import style from './Reg_Email.module.css'; // Import style file
import Header from '../Heaader';
import TextInput from '../TextInput/TextInput';
import { formatPhoneNumber, CheckformatPhoneNumber } from '../../utils/FormatePhoneNumber'  //Helper Function
import Button from '../Button/Button';
import { validateEmail } from '../../utils/Emailvalidator'

const RegEmail = () => {
    const [setPhone, setsetPhone] = useState<String>('');
    const [formateOk, setFormateOk] = useState<Boolean>(false)
    const [selectorEmail, setSelectorEmail] = useState<String>('Email')
    const [email, setemail] = useState<String>('')
    const [checkEmailFormate, setcheckEmailFormate] = useState<any>(null)
    useMemo(() => {
        formatPhoneNumber(setPhone, setsetPhone);
        CheckformatPhoneNumber(setPhone, setFormateOk)
    }, [setPhone])
    useMemo(() => {
        setcheckEmailFormate(validateEmail(email));
    }, [email])
    return (
        <>
            <Header />
            <div className={style.Selection}>
                <div>
                    <button onClick={() => {
                        setSelectorEmail('Email')
                        setemail('')
                        setsetPhone('')
                    }} className={selectorEmail === "Email" ? style.ActiveButton : style.DisableButton}>Email</button>
                </div>
                <div>
                    <button onClick={() => {
                        setSelectorEmail('Phone')
                        setsetPhone('')
                        setemail('')
                    }} className={selectorEmail === "Phone" ? style.ActiveButton : style.DisableButton}>Phone</button>
                </div>
            </div>

            <div className={style.container}>
                {selectorEmail === "Phone" ? (
                    <>
                        <TextInput Phone={true} value={setPhone} Text={false} setStates={setsetPhone} />
                        <div className={style.ButtonAlign}>
                            <Button email={setPhone} checkEmailFormate={checkEmailFormate} formateOk={formateOk} title="Continue" />
                        </div>
                    </>
                ) : (
                        <>
                            <TextInput Phone={false} value={email} Text={true} setStates={setemail} />
                            <div className={style.ButtonAlign}>
                                <Button email={email}  checkEmailFormate={checkEmailFormate} formateOk={formateOk} title="Continue" />
                            </div>
                        </>
                    )}
            </div>
        </>
    )
}
export default RegEmail