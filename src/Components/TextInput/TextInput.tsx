import style from './TextInput.module.css'
interface GetComponents {
    Phone: Boolean;
    Text: Boolean;
    value: any;
    setStates: Function;
}

const TextInput = (props: GetComponents) => {
    const { Phone, Text, setStates, value } = props
    return (
        <>
            {Phone ? (
                <input placeholder="Ex (337) 378 8383" className={style.inputPhone} value={value} type="tel" onChange={(e) => setStates(e.target.value)} />
            ) : Text ? (
                <input placeholder="Enter your valid email..." className={style.inputPhone} value={value} type="tel" onChange={(e) => setStates(e.target.value)} />
            ) : null}
        </>
    )
}
export default TextInput