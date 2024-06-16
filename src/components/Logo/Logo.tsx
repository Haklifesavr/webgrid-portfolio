import {Box} from '@mui/material'
import CustomLink from '../Mui/CustomLink'
import {useRouter} from 'next/router';
import Image from 'next/image';
import logo from '../../../assets/icons/webgrid.png'
import gsap from 'gsap';

const Logo = ({toggleDrawer, colorMode, color, source} : any) => {
    const router = useRouter()
    const imageStyle = {
        filter: colorMode.mode === 'dark' ? 'none' : 'invert(1)',
      };
    return (
        <Box
            onClick={() => {
            toggleDrawer(false);
            if (router.pathname !== '/') {
                router.push('/');
            }
            gsap.to(window, {
                duration: 1,
                scrollTo: `#hero`
            });
            }}
            sx={{
                flex:1,
                cursor: 'pointer',
            display: 'flex',
            alignItems: 'center'
        }}>
        <div style={{position: 'relative', top: '2.5px'}}>
            <Image
                src={logo}
                alt="WebGrid Logo"
                style={imageStyle}
                width={50}
                height={40}
            />
        </div>
            <CustomLink color={color} fontWeight='600' text='WebGrid Developers' source={source} href='/'/>
        </Box>
    )
}

export default Logo