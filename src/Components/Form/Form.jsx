import React, { useState, useEffect } from 'react';

import PersonalData from './PersonalData';
import UserData from './UserData';
import DeliveryData from './DeliveryData';
import { Typography, Stepper, Step, StepLabel } from '@mui/material';

export default function Form({ onSend }) {
    const [currentStage, setCurrentStage] = useState(0);
    const [collectedData, setData] = useState({});

    useEffect(function submit() {
        if (currentStage === components.length) {
            onSend(collectedData);
        }
    })

    const collectData = function(data) {
        setData({ ...collectedData, ...data })
    }

    const gotoNextStage = function(stageData) {
        collectData(stageData);
        setCurrentStage(currentStage + 1);
    }

    const gotoPreviousStage = function() {
        setCurrentStage(currentStage - 1);
    }

    const components = [
        <UserData nextStage = { gotoNextStage } ></UserData>,
        <PersonalData nextStage = { gotoNextStage } onReturn = { gotoPreviousStage } ></PersonalData>,
        <DeliveryData onSend = { gotoNextStage } onReturn = { gotoPreviousStage }></DeliveryData>,
        <Typography sx={{ mt: 3 }} align='center' color='primary' variant="h5">Thank you for register!</Typography>
    ];
    
    return (
        <>
            <Stepper sx={{ mt: 4 }} activeStep={currentStage}>
                <Step><StepLabel>Login</StepLabel></Step>
                <Step><StepLabel>Personal Data</StepLabel></Step>
                <Step><StepLabel>Delivery Data</StepLabel></Step>
            </Stepper>

            { components[currentStage] }
        </>
    )
}
