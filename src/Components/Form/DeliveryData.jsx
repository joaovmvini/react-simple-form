import React, { useState, useEffect } from 'react';
import { TextField, Button } from '@mui/material'
import { Box } from '@mui/system';

import { searchByCep } from '../../models/API';

export default function DeliveryData({ onSend, onReturn }) {

    const [cep, setCep] = useState('');
    const [address, setAddress] = useState('');
    const [state, setState] = useState('');
    const [number, setNumber] = useState('');
    const [city, setCity] = useState('');

    const setCepResults = async function(c) {
        const result = await searchByCep(c);

        if (result) {
            const { logradouro, bairro, complemento, localidade } = result;

            if (logradouro) {
                setAddress(`${bairro}, ${logradouro}, ${complemento}`);
            } else {
                setAddress('');
            }

            if (localidade) {
                setCity(localidade);
            } else {
                setCity('');
            }
        }
        
    }

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            onSend({ cep, address, state, number, city });
        }}>
            <TextField
                value={cep}
                onChange={(event) => {
                    let cepTemp = event.target.value;
                    setCep(cepTemp);
                    setCepResults(cepTemp);
                }}
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