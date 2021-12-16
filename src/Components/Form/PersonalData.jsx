import React, { useState } from 'react';

import { Button, TextField, Switch, FormControlLabel } from '@mui/material';

export default function PersonalData({ nextStage, Cpf, onReturn }) {

    const [name, setName] = useState("");
    const [secondName, setSecondName] = useState("");
    const [cpf, setCpf] = useState("");
    const [promotions, setPromotions] = useState(true);
    const [newsletter, setNewsletter] = useState(true);

    const [errors, setErrors] = useState({ ...Cpf.initialState });

    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                nextStage({ name, secondName, cpf, promotions, newsletter });
            }}
        >
            <TextField 
            value={name}
            onChange={(event) => {    
                let tempName = event.target.value;

                if (tempName.length > 20) {
                    tempName = tempName.substr(0, 20);
                }

                setName(tempName);
            }}
            margin="normal" 
            variant="outlined" 
            fullWidth id="name" 
            label="Name"/>

            <TextField 
            value={secondName}
            onChange={(event) => {
                let tempSecondName = event.target.value;

                if (tempSecondName.length > 15) {
                    tempSecondName = tempSecondName.substr(0, 15);
                }

                setSecondName(tempSecondName);
            }}
            margin="normal" 
            variant="outlined" 
            fullWidth id="secondName" 
            label="Second Name"/>

            <TextField 
            error = {! errors.cpf.valid}
            helperText= {errors.cpf.text}
            value={cpf}
            onChange={(event) => {    
                setCpf(event.target.value)
            }}
            onBlur={(event) => {
                const isValid = Cpf._validate(event.target.value);

                setErrors({ cpf: isValid });
            }}
            margin="normal" 
            variant="outlined" 
            fullWidth id="cpf" 
            label="CPF"/>


            <FormControlLabel 
            label="Promotions" 
            control={<Switch 
                checked={promotions}
                onChange={(event) => {
                    setPromotions(event.target.checked)
                }} 
            name="promotions" 
            color="primary" />}
            >
            </FormControlLabel>

            <FormControlLabel 
            label="Newsletter" 
            control={<Switch 
            checked={newsletter}
            onChange={(event) => {
                setNewsletter(event.target.checked);
            }}
            name="newsletter" 
            color="primary" />}></FormControlLabel>


            <Button 
                variant="contained" 
                color="primary" 
                type="submit">Next
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

        </form>
    )
}