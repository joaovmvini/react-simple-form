import React, { useState } from 'react';

import { TextField, Button } from '@mui/material';

export default function UserData({ nextStage, passwordValidator }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            nextStage({ email, password });
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
                value={password}
                onChange={(event) => setPassword(event.target.value)}
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