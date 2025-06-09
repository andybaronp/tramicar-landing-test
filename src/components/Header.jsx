import { Box, Container } from '@mui/material';
import Logo from '../assets/logo.svg';

const Header = () => {
  return (
    <Container   >
      <Box
        component="header"
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: '88px',
          width: '100%',
          marginBottom: '40px',
        }}
      >
        <Box
          component="img"
          src={Logo}
          alt="Logo"
          sx={{
            width: '120.71px',
            height: '69.27px',
          }}
        />
      </Box>

    </Container>
  );
};

export default Header;
