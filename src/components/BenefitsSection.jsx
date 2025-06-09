import { Box, Typography, Stack, Button } from '@mui/material';
import OnlineIcon from '../assets/icon-online.svg';
import SecureIcon from '../assets/icon-secure.svg';
import FastIcon from '../assets/icon-fast.svg';
import EasyIcon from '../assets/icon-easy.svg';
import ButtomCTA from './ButtomCTA';

const benefits = [
  {
    icon: OnlineIcon,
    title: '100% Online',
    description:
      'Identificación y Firma telemática, envío a tu domicilio de tu nuevo Permiso de Circulación.',
  },
  {
    icon: SecureIcon,
    title: 'Seguro',
    description:
      'Garantizamos la seguridad del proceso, evita fraudes y/o estafas.',
  },
  {
    icon: FastIcon,
    title: 'Rápido',
    description:
      'En 15 minutos, habrás tramitado la transferencia.',
  },
  {
    icon: EasyIcon,
    title: 'Cómodo',
    description:
      'Sin enviar papeles, sin tener que moverte, desde tu teléfono u ordenador.',
  },
];

const BenefitsSection = () => {
  return (
    <Box
      component="section"
      sx={{
        backgroundColor: '#fff',
        py: 8,
        px: { xs: 2, md: 6 },
        textAlign: 'center',
        maxWidth: '1400px',
        mx: 'auto',
      }}
    ><Box component='div' display='flex' justifyContent='center' maxWidth={780} alignContent={'center'} mx='auto' mb={4}>

        <Box component='div'   >
          <Typography
            variant="h4"
            component="h2"
            sx={{
              fontWeight: 600,
              fontSize: '44px',
              mb: 6,
            }}
          >
            <Box component="span" color="primary.main">Ventajas</Box>{' '}
            de hacer el cambio de titularidad online con Tramicar.
          </Typography>
        </Box>
      </Box>
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={4}
        justifyContent="space-between"
        alignItems="flex-start"
        sx={{ mb: 6 }}
      >
        {benefits.map(({ icon, title, description }, index) => (
          <Box
            key={index}
            component="article"
            sx={{ maxWidth: 250, textAlign: 'center', mx: 'auto' }}
          >
            <Box
              component="img"
              src={icon}
              alt={title}
              sx={{ width: 50, height: 50, mb: 2 }}
            />

            <Typography
              variant="h6"

              fontWeight={700}
              sx={{ mb: 1, color: '#191919', }}
              fontSize="32px"
            >
              {title}
            </Typography>

            <Typography
              variant="body2"
              sx={{
                fontSize: '16px',
                color: '#2B2B2B',
                fontFamily: 'DM Sans, sans-serif'
              }}
            >
              {description}
            </Typography>
          </Box>
        ))}
      </Stack>

      <ButtomCTA />
    </Box>
  );
};

export default BenefitsSection;
