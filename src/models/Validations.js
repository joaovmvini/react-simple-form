
const cpfValidator = function(cpf) {
    if (cpf.length !== 11) {
        return {
            valid: false,
            text: 'CPF must contains 11 digits.'
        }
    }
    return {
        valid: true,
        text: ''
    }
}

const passwordValidator = function(password) {
    if (password.length < 6 || password.length > 60) {
        return {
            valid: false,
            text: 'Password is not valid'
        }
    }
    return {
        valid: true,
        text: ''
    }
}

const nameValidator = function(username) {
    if (username.length < 4) {
        return {
            valid: false,
            text: 'Invalid input'
        }
    }
    return {
        valid: true,
        text: ''
    }
}

export { cpfValidator, passwordValidator, nameValidator }