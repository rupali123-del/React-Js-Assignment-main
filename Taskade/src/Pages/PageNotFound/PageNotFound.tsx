import {Button, Grid, Typography} from '@mui/material'
import Navbar from '../../Components/NavBar/Navbar'
import styles from './PageNotFound.module.css'

export default function PageNotFound(){
    return(
        <>
            <Navbar/>
            <Grid container pt={4} justifyContent={'center'} sx={{textAlign:'center'}}>
               {/* Create Page Not Found as shown in Question Paper, image is available in public folder */}
            </Grid>
        </>
    )
}