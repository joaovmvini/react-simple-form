import React, { useState, useContext } from 'react';
 
import Validations from '../../contexts/FormValidations';
import { TextField, Button } from '@mui/material';

import useErrors from '../../hooks/useErrors';

export default function UserData({ nextStage }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const validations = useContext(Validations);
    const [errors, validateData, isAllValid] = useErrors(validations);

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            
            return isAllValid() ? nextStage({ email, password }) : null;
        }}>
            <TextField 
                onChange={(event) => setEmail(event.target.value)}
                value={email}
                id='email' 
                label='Email' 
                type='email'
                variant='outlined'
                margin='normal'
                fullWidth
                required
            >
            </TextField>

            <TextField 
                onBlur={(event) => validateData(event)}
                error={! errors.password.valid}
                helperText = {errors.password.text}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                name='password'
                id='password' 
                label='Password' 
                type='password'
                variant='outlined'
                margin='normal'
                fullWidth
                required
            >
            </TextField>

            <Button type='submit' variant='contained' color='primary'>Next</Button>
        </form>
    )
}