const isValid = function (value) {
    if (typeof value === String && value.trim().length === 0) return false
    if (typeof value === "undefined" || value === "null") return false
    return true;
}
const regexName = function (name) {
    return (/^[a-zA-Z ]{2,30}$/.test(name))
}

const regexPhone = function (phone) {
    return (/^(\+91[\-\s]?)?[0]?(91)?[6789]\d{9}$/.test(phone))
}


const regexPassword = function (password) {
    return (/^(?=.*[A-Z0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/)
        .test(password)
}
const regexPincode = function (pincode) {
    return (/^(\d{4}|\d{6})$/
        .test(pincode))
}
const regexemail = function (email) {
    return ((/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/)
        .test(email))
}
function checkObject(value) {
    if (typeof value == "undefined" || typeof value == null || typeof value != 'object') {
        return false
    } else {
        return true
    }
}

module.exports={isValid,regexName,regexPassword,regexPhone,regexPincode,regexemail,checkObject};