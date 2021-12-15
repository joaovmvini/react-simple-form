import React, { useState } from 'react';

import { Button, TextField, Switch, FormControlLabel } from '@material-ui/core';

export default function Form() {
    let [name, setName] = useState("");
    let [secondName, setSecondName] = useState("");
    let [cpf, setCpf] = useState("");
    let [promotions, setPromotions] = useState(true);
    let [newsletter, setNewsletter] = useState(true);

    return (
        <form>
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
            value={cpf}
            onChange={(event) => {    
                setCpf(event.target.value)
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
                type="submit">Register
            </Button>

        </form>
    )
}