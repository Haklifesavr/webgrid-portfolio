import { Container, Box, Grid } from '@mui/material';
import Image from 'next/image'
import Typography from '@mui/material/Typography';
import ReadMore from '../ReadMore/ReadMore';
import background from '../../../../assets/icons/background2.jpg'
import { ColorModeContext } from '../../../../pages/_app';
import { useContext } from 'react';
const About = () => {
    const colorMode = useContext(ColorModeContext)
    return (
    <>
        <Container
        id='about'
            maxWidth='lg'
            sx={{
            margin: '0 auto',
            py: '6em',
          
        }}>
            <Grid
                container
                sx={{
                justifyContent: {
                    sm: 'center',
                    md: 'space-between'
                }
            }}>

                <Grid item xs={12} sm={12} md={4} lg={5}>
                    <Box
                        sx={{
                        maxWidth: '400px',
                        width: '100%',
                        height: '450px',
                        margin: '0 auto',
                        boxShadow: {
                            xs: '-.5em 1.5em 0px #0092ff',
                            sm: '-1.5em 1.5em 0px #0092ff'
                        },
                        position: 'relative'
                    }}>
                        <Box
                            sx={{
                            width: '100px',
                            height: '100px',
                            zIndex: '0',
                            position: 'absolute',
                            right: {
                                xs: '-4%',
                                sm: '90%'
                            },
                            
                            bottom: {
                                xs: '-5%',
                                sm: '-10%'
                            },
                            background: 'transparent',
                            backgroundImage:colorMode.mode === 'dark' ? 'radial-gradient(white 2px, transparent 0)' : 'radial-gradient(black 2px, transparent 0)',
                            backgroundSize: '15px 13px'
                        }}></Box>
                        <Image
                            alt='Personal Image'
                            className='img1 '
                            layout='fill'
                            src={background}/>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={7.5} lg={7}>
                    <Box sx={{
                        pb: '.5em'
                    }}>
                        <Typography
                            variant='h1'
                            sx={{
                            fontSize: {
                                xs: '2.2em',
                                sm: '2.5em',
                                md: '3em'
                            },
                            py: '.5em',
                            pt: {
                                xs: '1.8em',
                                md:0,
                            }
                        }}
                            fontWeight='600'>
                            About Us, We are WebGrid Developers
                        </Typography>
                        <Typography
                            variant='h2'
                            sx={{
                            maxWidth: '570px',
                            fontSize: {
                                xs: '.8em',
                                sm: '1em'
                            }
                        }}>
                        We are a Software Development Agency dedicated to delivering high-quality web and mobile applications. Our journey began with a passion for creating innovative solutions using cutting-edge technologies. Over the past three years, we have grown into a team of skilled professionals who specialize in various aspects of software development.
                        </Typography>
                    </Box>
                    <Typography
                            variant='h2'
                            sx={{
                            maxWidth: '570px',
                            fontSize: {
                                xs: '.8em',
                                sm: '1em'
                            },
                            pb:'.5em'
                        }}>
                            Our mission is to empower businesses by providing them with robust, scalable, and user-friendly digital solutions. We strive to stay ahead of the technology curve to ensure our clients receive the best possible service.
                        </Typography>
                    <ReadMore>
                        Our team consists of experienced developers, designers, and project managers who are passionate about technology and dedicated to delivering excellence. We work together to bring your ideas to life and ensure your projects are a success.
                    </ReadMore>
                </Grid>
            </Grid>

        </Container>

        </>
    
    )
}

export default About
