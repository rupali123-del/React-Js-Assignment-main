
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNote } from '../redux/actions';
import { TextField, Button } from '@mui/material';

const NoteForm = () => {
  const [note, setNote] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (note.trim() === '') return;

    const newNote = {
      id: Date.now(),
      text: note,
    };

    dispatch(addNote(newNote));
    setNote('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Note"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary">
        Add Note
      </Button>
    </form>
  );
};

export default NoteForm;
