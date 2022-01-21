export function formatPhoneNumber(phoneNumberString: String,setsetPhone:Function) {
    var cleaned = ('' + phoneNumberString).replace(/\D/g, '')
    var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
    if (match) {
        setsetPhone('(' + match[1] + ') ' + match[2] + '-' + match[3])
    } else {
        setsetPhone(phoneNumberString)
    }
}
export function CheckformatPhoneNumber(phoneNumberString: String,setsetPhone:Function) {
    var cleaned = ('' + phoneNumberString).replace(/\D/g, '')
    var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
    if (match) {
        setsetPhone(true)
    } else {
        setsetPhone(false)
    }
}