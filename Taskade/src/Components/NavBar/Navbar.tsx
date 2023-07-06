import React from 'react';
import {Grid, Container, Typography} from '@mui/material'
import styles from './navBar.module.css'

function Navbar(){
    return(
        <>
            <Grid container className={styles.NavContainer}>
                <Container>
                    <Typography sx={{fontSize:'30px', fontWeight:'700', paddingTop:'15px', color:'white'}}>Taskade</Typography>
                </Container>
            </Grid>
        </>
    )
}

export default Navbar