import './App.css';
import Form from './Components/Form/Form';

import { Container, Typography } from '@material-ui/core';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import Cpf from './Components/Form/CPF';

function App() {
  return (
    <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center" >Register Form</Typography>
        <Form onSend = {onSend} Cpf = {Cpf}></Form>
    </Container>
  );
}

function onSend(data) {
  alert(JSON.stringify(data, null, 2));
}

export default App;
