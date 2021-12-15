import { Fragment } from 'react';
import './App.css';
import Form from './Components/Form/Form';

import { Container } from '@material-ui/core';

function App() {
  return (
    <Container component="article" maxWidth="sm">
        <h2>Register Form</h2>
        <Form></Form>
    </Container>
  );
}

export default App;
