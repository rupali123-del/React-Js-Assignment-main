import React from 'react'
import { Grid, Container, Button } from '@mui/material'
import styles from './Home.module.css'
import Navbar from '../../Components/NavBar/Navbar'
import {useNavigate} from 'react-router-dom'

function HomePage(){
    return(
        <>
            <Navbar/>
            <Grid container sx={{minHeight:'100vh'}} className={styles.homeGrid}>
                <Container>
                    <Grid container item xs={12} justifyContent={'center'} m={'auto'}>
                        <div className={styles.homeHeading}>Change the way you manage your Task with TASKADE</div>
                        <Button data-testid='button' href='/add-new-task' variant='contained' sx={{backgroundColor:'rgb(12, 141, 130)', fontSize: '20px', fontWeight:'600', padding:'20px 60px', border:'0px'}}>Create Task</Button>
                    </Grid>
                </Container>
            </Grid>
        </>
    )
}

export default HomePage