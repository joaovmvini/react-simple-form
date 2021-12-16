import './App.css';
import Form from './Components/Form/Form';

import { Container, Typography } from '@mui/material';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import validations from './models/Validations';

function App() {
  return (
    <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center" >Register Form</Typography>
        <Form onSend = {onSend} validations = {{ ...validations }}></Form>
    </Container>
  );
}

function onSend(data) {
  return alert(JSON.stringify(data, null, 2));
}

export default App;
