import React from 'react';

import { Button, TextField, Switch, FormControlLabel } from '@material-ui/core';

export default function Form() {
    return (
        <form>
            <TextField margin="normal" variant="outlined" fullWidth id="name" label="Name"/>
            <TextField margin="normal" variant="outlined" fullWidth id="secondName" label="Second Name"/>
            <TextField margin="normal" variant="outlined" fullWidth id="cpf" label="CPF"/>


            <FormControlLabel label="Promotions" control={<Switch name="promotions" defaultChecked color="primary" />}></FormControlLabel>
            <FormControlLabel label="Newsletter" control={<Switch name="newsletter" defaultChecked color="primary" />}></FormControlLabel>


            <Button 
                variant="contained" 
                color="primary" 
                type="submit">Register
            </Button>

        </form>
    )
}