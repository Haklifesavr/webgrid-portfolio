import {Box} from "@mui/material"
import SocialMediaIcon from './SocialMediaIcon';

export const SocialMediaArray = [
    {
        title: 'LinkedIn',
        href: 'https://www.linkedin.com/company/webgrid-developers/about/',
        color: '#0e76a8',
        svg: 'https://www.svgrepo.com/show/138936/linkedin.svg'

    }, {
        color: '#171515',
        title: 'Github',
        href: 'https://github.com/Haklifesavr',
        svg: 'https://www.svgrepo.com/show/343674/github.svg'
    }, {
        title: 'Upwork',
        href: "https://www.upwork.com/freelancers/~01f826f8688a29cb1a",
        color: '#4267B2',
        svg: 'https://www.svgrepo.com/show/349549/upwork.svg'
    }
]

const SocialMedia = () => {

    return (
        <Box sx={{
            pt: '1em',
            pb:'3em',
            display: 'flex'
        }}>
            {SocialMediaArray.map(icon => {

                return <SocialMediaIcon
                    svg={icon.svg}
                    key={icon.href}
                    title={icon.title}
                    href={icon.href}
                    color={icon.color}/>
            })}
        </Box>

    )
}

export default SocialMedia
