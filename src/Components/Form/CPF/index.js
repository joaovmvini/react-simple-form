export default (function() {
    const o = {};

    o.initialState = {
        cpf: {
            valid: true,
            text: ''
        }
    }

    o._validate = function(cpf) {
        if (cpf.length != 11) {
            return {
                valid: false,
                text: 'CPF must contains 11 digits.'
            }
        }

        return o.initialState.cpf;
    }

    return o;
})();