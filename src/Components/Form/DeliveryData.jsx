import React, { useState } from 'react';
import { TextField, Button } from '@mui/material'
import { Box } from '@mui/system';

export default function DeliveryData({ onSend, onReturn }) {

    const [cep, setCep] = useState('');
    const [address, setAddress] = useState('');
    const [state, setState] = useState('');
    const [number, setNumber] = useState('');
    const [city, setCity] = useState('');

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            onSend({ cep, address, state, number, city });
        }}>
            <TextField
                value={cep}
                onChange={(event) => setCep(event.target.value)}
                id='cep' 
                label='Cep' 
                type='number'
                variant='outlined'
                margin='normal'
            >
            </TextField>

            <TextField
                value={address} 
                onChange={(event) => setAddress(event.target.value)}
                id='address' 
                label='Address' 
                type='text'
                variant='outlined'
                margin='normal'
                fullWidth
            >
            </TextField>

          
            <TextField
                value={number} 
                onChange={(event) => setNumber(event.target.value)}
                xs = {12}
                id='number'
                size='large' 
                label='Number' 
                type='number'
                variant='outlined'
                margin='normal'
                >
            </TextField>

            <TextField
                value={state}
                onChange={(event) => setState(event.target.value)}
                sx = {{ ml: 2 }}
                id='state' 
                size='large'
                label='State' 
                type='text'
                variant='outlined'
                margin='normal'
            >
            </TextField>
           

            <TextField
                value={city}
                onChange={(event) => setCity(event.target.value)}
                id='city' 
                label='City' 
                type='text'
                variant='outlined'
                margin='normal'
                fullWidth
            >
            </TextField>

            <Box sx={{ mt: 2 }}>
                <Button 
                    variant="contained" 
                    color="primary" 
                    type="submit"
                >
                Register
                </Button>

                <Button 
                    onClick={() => {
                        onReturn();
                    }}
                    sx = {{ ml: 1 }}
                    variant="contained" 
                    color="primary" 
                    type="button">Return
                </Button>
            </Box>

        </form>
    )
}