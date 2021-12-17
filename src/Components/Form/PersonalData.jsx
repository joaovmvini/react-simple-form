import React, { useState, useContext } from 'react';

import { Button, TextField, Switch, FormControlLabel } from '@mui/material';
import Validations from '../../contexts/FormValidations';
import useErrors from '../../hooks/useErrors';

export default function PersonalData({ nextStage, onReturn }) {

    const [name, setName] = useState("");
    const [secondName, setSecondName] = useState("");
    const [cpf, setCpf] = useState("");
    const [promotions, setPromotions] = useState(true);
    const [newsletter, setNewsletter] = useState(true);
    
    const validations = useContext(Validations);
    const [errors, validateData, isAllValid] = useErrors(validations);

    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                return isAllValid() ? nextStage({ name, secondName, cpf, promotions, newsletter }) : null;
            }}
        >
            <TextField 
            error={! errors.username.valid}
            helperText={errors.username.text}
            onBlur={(event) => {
                validateData(event);
            }}
            name="username"
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
            name="username"
            error={! errors.username.valid}
            helperText={errors.username.text}
            onBlur={(event) => {
                validateData(event);
            }}
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
            name='cpf'
            error = {! errors.cpf.valid}
            helperText= {errors.cpf.text}
            value={cpf}
            onChange={(event) => {    
                setCpf(event.target.value)
            }}
            onBlur={(event) => {
                validateData(event);
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