import './App.css';
import Form from './Components/Form/Form';

import { Container, Typography } from '@material-ui/core';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
  return (
    <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center" >Register Form</Typography>
        <Form></Form>
    </Container>
  );
}

export default App;
