import './App.css';
import Form from './Components/Form/Form';

import { Container, Typography } from '@mui/material';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { cpfValidator, passwordValidator, nameValidator } from './models/Validations';
import FormValidations from './contexts/FormValidations';

function App() {
  return (
    <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center" >Register Form</Typography>
        <FormValidations.Provider 
          value={{ cpf: cpfValidator, password: passwordValidator, username: nameValidator}}
        >
          <Form onSend = {onSend}></Form>
        </FormValidations.Provider>
    </Container>
  );
}

function onSend(data) {
  return alert(JSON.stringify(data, null, 2));
}

export default App;
