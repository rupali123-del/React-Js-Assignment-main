import React from 'react';
import { Provider } from 'react-redux';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import store from './redux/store';
import { Container, Typography } from '@mui/material';
// import NoteForm from './components/NoteFOrm';

const App = () => {
  return (
    <Provider store={store}>
      <Container maxWidth="sm">
        <Typography variant="h4" component="h1" align="center" gutterBottom>
          Note Taking App
        </Typography>
        <NoteForm />

        <NoteList />
      </Container>
    </Provider>
  );
};

export default App;