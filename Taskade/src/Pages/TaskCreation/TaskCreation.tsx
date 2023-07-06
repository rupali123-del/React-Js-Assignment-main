import { useState } from 'react';
import {
  Grid,
  Box,
  FormControl,
  TextField,
  Button,
  Paper,
  Container,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Typography,
} from '@mui/material';
import styles from './taskCreation.module.css';
import Navbar from '../../Components/NavBar/Navbar';
import { useDispatch, useSelector } from 'react-redux';
// import { addTask } from '../../Redux/task/TaskSlice';
import { nanoid } from '@reduxjs/toolkit';

type TestState = any[];
function TaskCreation() {
  const [taskName, setTaskName] = useState('');
  const [taskDesc, setTaskDesc] = useState('');
  const [buttonStatus, setButtonStatus] = useState(true);
  const dispatch = useDispatch();
  const taskItem = useSelector((state: any[]) => state);
  console.log('Tasks', taskItem);
  function handleTaskName(event: any) {
    const name = event.target.value;
    setTaskName(name);
    if(name && taskDesc) handleTaskFinish();
  }
  function handleTaskDesc(event: any) {
    const desc = event.target.value;
    setTaskDesc(desc);
    if(desc && taskName) handleTaskFinish();
  }
  function handleTaskFinish() {
    setButtonStatus(false);
  }
  function handleTaskSubmit(event: any) {
    event.preventDefault();
    // Write the Form Submission functionality which will add the task detail to the dispatch function in line number 14
  }
  return (
    <>
      <Navbar />
      <Grid container sx={{ margin: 'auto' }}>
        <Grid item mt={2} ml={5}>
          <Button variant='contained' href='/'>
            Go to HomePage
          </Button>
        </Grid>
        <Grid container item xs={12} justifyContent={'center'}>
          <Paper className={styles.formContainer} elevation={8}>
            {/* Write code here to create a form with button , there should be two form field, Task Heading and Task Description */}

            <Box
              component='form'
              sx={{
                '& .MuiTextField-root': { m: 1, width: '50ch' },
              }}
              noValidate
              autoComplete='off'
            >
              <form onSubmit={handleTaskSubmit}>
                <TextField
                  required
                  variant={'outlined'}
                  name='Task Heading'
                  label={'Task Heading'}
                  placeholder='Enter the Task Heading'
                  onChange={handleTaskName}
                />
                <TextField
                  required
                  multiline
                  rows={5}
                  variant={'outlined'}
                  name='Task Description'
                  label={'Task Description'}
                  placeholder='Enter the Full Task Description'
                  onChange={handleTaskDesc}
                />
                <Button fullWidth type='submit' variant={'contained'} disabled={buttonStatus}>
                  Add Task
                </Button>
              </form>
            </Box>
          </Paper>
        </Grid>
      </Grid>
      <Grid container item columns={12} mt={4} ml={4} columnGap={2} pb={4}>
        <Container>
          <Grid item xs={12}>
            <Typography variant='h5' sx={{ textAlign: 'center' }}>
              Here is your Task Listed
            </Typography>
          </Grid>
          {taskItem.map((task: any) => (
            <Grid container item md={3} lg={3} pb={4} pt={3}>
              <Card
                sx={{
                  boxShadow: '2px',
                  padding: '10px',
                  border: '2px solid red',
                }}
              >
                <CardContent>
                  <Typography
                    variant='h5'
                    component='div'
                    sx={{ fontWeight: '600' }}
                  >
                    {task.taskDetail.name}
                  </Typography>
                  <Typography variant='body2'>
                    {task.taskDetail.desc}
                  </Typography>
                </CardContent>
                <CardActions></CardActions>
              </Card>
            </Grid>
          ))}
        </Container>
      </Grid>
    </>
  );
}
export default TaskCreation;
