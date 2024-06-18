import { Box, Typography, Button } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { IProjectCard } from '../../../Types/Types';
import { btnStyles } from '../Hero/Hero';
import Image from 'next/image'

const ProjectCard = ({
  isReversed,
  img,
  className,
  repoUrl,
  title,
  description
}: IProjectCard) => {
  const ref = useRef(null);

  const [cursorPosition, setCursorPosition] = useState({ y: 0, x: 0 });
  const [elementSize, setElementSize] = useState({ x: 0, y: 0 });

  const onMouseMove = (e: any) => {
    setCursorPosition({ y: e.screenY, x: e.screenX });
  };

  useEffect(() => {
    if (ref && ref.current)
      setElementSize({ x: ref.current['offsetWidth'], y: ref.current['offsetHeight'] });
  }, []);

  const rotation = `rotateY(${(elementSize.x / 2 - cursorPosition.x) / 25}deg) rotateX(${(elementSize.y / 2 - cursorPosition.y) / 30}deg)`;

  return (
    <Box
      className={className}
      sx={{
        display: 'flex',
        my: {
          xs: '0em',
          sm: '1em',
          md: '3em'
        },
        flexDirection: {
          xs: 'column',
          md: `${isReversed ? 'row' : 'row-reverse'}`
        },
        alignItems: 'center',
        transform: isReversed ? 'translateX(-150%)' : 'translateX(150%)'
      }}
    >
      <Box
        sx={{
          width: {
            xs: '100%',
            sm: '600px'
          },
          minWidth: {
            xs: 'auto',
            sm: '250px',
            md: '390px'
          },
          height: '400px',
          position: 'relative'
        }}
      >
        {img ? (
          <Image
            alt='Project Image'
            src={img}
            layout='fill'
            objectFit='cover'
            className='img1'
           />
        ) : (
          <Typography variant='h5' sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: 'gray' }}>
            Image
          </Typography>
        )}
      </Box>
      <Box
        ref={ref}
        onMouseMove={onMouseMove}
        sx={{
          transition: 'all .1s ease',
          '&:hover': {
            transform: {
              xs: `translateY(-25%)`,
              md: `${rotation} ${isReversed ? 'translateX(-25%)' : 'translateX(25%)'}`
            }
          },
          borderRadius: '6px',
          width: {
            xs: '94%',
            md: 'auto'
          },
          position: 'relative',
          transform: {
            xs: 'translateY(-25%)',
            md: `${isReversed ? 'translateX(-25%)' : 'translateX(25%)'}`
          },
          maxWidth: '600px',
          padding: '2em 1.5em',
          textAlign: 'left',
          boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
          background: 'white',
          color: 'black',
          display: 'flex',
          flexDirection: 'row-reverse',
          alignItems: 'center'
        }}
      >
        <Box>
          <Typography
            color='black'
            sx={{
              fontSize: '1.4em',
              fontWeight: '500',
              pb: '.25em'
            }}
          >
            {title}
          </Typography>
          <Typography
            color='black'
            variant='h3'
            sx={{
              fontSize: {
                xs: '.83em',
                sm: '.9em'
              },
              fontWeight: '300'
            }}
          >
            {description}
          </Typography>
          <Box
            sx={{
              gap: '.5em',
              display: 'flex',
              flexWrap: 'wrap',
              mt: '1em'
            }}
          >
            <a href={repoUrl} rel="noreferrer" target="_blank">
              <Button
                variant='contained'
                sx={{
                    ...btnStyles,
                    padding: '.5em .8em',
                    color: 'white',
                    border: '1px solid #0092ff'
                  }}
              >
                <Typography fontSize='12px'>
                  Check Code
                </Typography>
              </Button>
            </a>

            {/* <a href={"https://crm-django-sz3c6uf2gq-uc.a.run.app/"} rel="noreferrer" target="_blank">
              <Button
                variant='contained'
                sx={{
                    ...btnStyles,
                    padding: '.5em .8em',
                    color: 'white',
                    border: '1px solid #0092ff'
                  }}
              >
                <Typography fontSize='12px'>
                  Live Preview
                </Typography>
              </Button>
            </a> */}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ProjectCard;
