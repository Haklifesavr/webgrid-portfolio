import gsap from 'gsap';
import {Box, Typography, Divider, Grid} from '@mui/material';

import Link from 'next/link';
import { useRouter } from 'next/router';
function Copyright() {
    return (
<>
        <Divider/>
        <Box
        maxWidth='lg' 
        sx={{
            textAlign:'center',
            margin : '1em auto'
        }}>
            {/* <Typography variant='h1' fontSize='1em'>
                {'Copyright © '}
                <Link color="inherit" target='_blank'  rel="noreferrer" href="https://onbeirut.onrender.com">
                    onbeirut.onrender.com
                </Link>{' '} {new Date().getFullYear()}
                {'.'}
            </Typography> */}
            <Typography variant="body2" color="textSecondary" component="p">
                &copy; {new Date().getFullYear()} WebGrid Developers. All rights reserved.
            </Typography>
        </Box>
        </>

    );
}
const styles = {
    mt: '1em',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    flexWrap: 'wrap',
    color: 'white'
}

function Footer() {
    const router = useRouter()
    return (
        <Box >
            <Divider/>
            <Box
                sx={{
                width: '100%',
                color: 'white',
                minHeight: '200px',
                display: 'flex',
                margin: '0 auto'
            }}>
                <Grid
                    sx={{
                    gap: '1.5em',
                    mx: {
                        xs: '3vw',
                        lg: 'auto'
                    },
                    my: '2em'
                }}
                    maxWidth='lg'
                    container>
                    <Grid item xs={12} sm={6} md={5}>
                        <Typography variant='h1' fontSize='1.4em' fontWeight='400'>About</Typography>

                        <Box sx={styles}>
                            <Typography variant='h3' fontSize='1em'>
                            We at WebGrid Developers are committed to delivering innovative and efficient solutions to solve complex business challenges.
                            </Typography>
                        </Box>

                    </Grid>
                    <Grid item xs={12} sm={4} md={3}>
                        <Typography variant='h1' fontSize='1.4em' fontWeight='400'>Links</Typography>

                        <Box className='link' sx={styles}>
                            <Typography 
                            className='FooterLink'
                            onClick={()=>{router.push('/'); gsap.to(window, {duration: .8, scrollTo: `#hero`})}}
                            >Home</Typography>
                            <Link href='/contact'>Contact</Link>
                         
                            <Typography 
                            className='FooterLink'
                            onClick={()=>{router.push('/'); gsap.to(window, {duration: .5, scrollTo: `#about`})}}
                            >About</Typography>
                        </Box>

                    </Grid>
                    <Grid item xs={12} sm={3} md={3}>
                        <Typography variant='h1' fontSize='1.4em' fontWeight='400'>Contact</Typography>
                        <Box className='link' sx={styles}>
                            {/* <a target='_blank' rel="noreferrer" href='https://github.com/VitoMedlej'>Github</a> */}
                            <Typography variant='h1' fontSize='1em'>webgrid.developers@gmail.com</Typography>
                            <Typography variant='h1' fontSize='1em'>Lahore/Pakistan</Typography>
                            <Typography variant='h1' fontSize='1em'>+92 3219427983</Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Copyright/>
        </Box>

    );

}
export default Footer