import React, { useState } from 'react';

const useErrors = function(validations) {
    const [errors, setErrors] = useState(createInitialState(validations));

    const validateData = function(event) {
        const { name, value } = event.target;
        const newState = { ...errors };
        newState[name] = validations[name](value);

        setErrors(newState);
    }

    const isAllValid = function() {
        for (let attr in errors) {
            if (! errors[attr].valid) {
                return false;
            }
        }
        return true;
    }

    return [errors, validateData, isAllValid];
}

const createInitialState = function(validations) {
    const initialState = {};

    for (let attr in validations) {
        initialState[attr] = { valid: true, text: ''};
    }

    return initialState;
}

export default useErrors;