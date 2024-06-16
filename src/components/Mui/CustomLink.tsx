import { Typography } from '@mui/material';
import Link from 'next/link';
import { ICustomLink } from '../../Types/Types';

const CustomLink = ({
  fontWeight = '300',
  text,
  href,
  handleClick,
  color = 'white',
  source,
}: ICustomLink) => {
  // Determine the fontSize based on the source prop
  const fontSize = source === 'Drawer' ? '14px' : 'inherit';

  return (
    <Link href={href}>
      <Typography
        onClick={handleClick && handleClick}
        sx={{
          cursor: 'pointer',
          color,
          fontWeight,
          fontSize, // Apply the dynamic fontSize
        }}
      >
        {text}
      </Typography>
    </Link>
  );
};

export default CustomLink;
