
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@material-ui';
import { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@mui/material';
// import { Delete } from '@material-ui/icons';
import { Delete } from '@mui/icons-material'
import { deleteNote } from '../redux/actions';

const NoteList = () => {
  const notes = useSelector((state) => state.notes);
  const dispatch = useDispatch();

  const handleDelete = (noteId) => {
    dispatch(deleteNote(noteId));
  };

  return (
    <List>
      {notes.map((note) => (
        <ListItem key={note.id}>
          <ListItemText primary={note.text} />
          <ListItemSecondaryAction>
            <IconButton onClick={() => handleDelete(note.id)} edge="end" aria-label="delete">
              <Delete />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
};

export default NoteList;
