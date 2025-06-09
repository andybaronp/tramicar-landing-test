import { Box, Typography, Button, Stack, useTheme, Container } from '@mui/material';
import ButtomCTA from './ButtomCTA';

const steps = [
  {
    number: 1,
    title: 'Matrícula y datos',
    description:
      'Ingresa la matrícula del coche, comunidad autónoma del comprador, precio de venta del coche, y tus datos básicos de contacto.',
  },
  {
    number: 2,
    title: 'Presupuesto y pago',
    description: (
      <>
        ¡Calculamos tu presupuesto al momento!{' '}
        <Box component="span" color="primary.main" fontWeight={500} display="inline">
          Solo pagarás las tasas DGT e impuestos ITP
        </Box>
        . Se aplicará tu descuento automático y continúa para realizar el pago.
      </>
    ),
  },
  {
    number: 3,
    title: 'Identificación biométrica',
    description:
      'Es hora de identificar vuestras identidades mediante la captura de ambos lados del DNI/NIE y un reconocimiento facial.¡100% online!',
  },
  {
    number: 4,
    title: 'Firma electrónica',
    description:
      'Firma digitalmente los documentos. ¡Y listo! Tramicar se encarga de la gestión con la DGT y de enviarte tu nuevo permiso de circulación a casa.',
  },
];

const TransferSteps = () => {
  const theme = useTheme();
  return (


    <Box
      component="section"
      sx={{
        backgroundColor: theme.palette.custom.translucentBackground,
        borderRadius: '30px',
        maxWidth: '1352px',
        py: 10,
        px: { xs: 2, md: 6 },
        textAlign: 'center',
        color: theme.palette.custom.textBlack,
        mx: 'auto',
        my: 8,
      }}
    >
      <Box component='div' display='flex' justifyContent='center' maxWidth={780} alignContent={'center'} mx='auto' mb={4}>

        <Box component='div'   >
          <Typography
            variant="h4"
            component="h2"
            sx={{ fontWeight: 600, fontSize: '44px', mb: 4 }}
          >
            <Box component="span" color="primary.main">Pasos</Box>{' '}
            para hacer la transferencia de tu coche con nosotros:
          </Typography>
        </Box>
      </Box>
      <Box sx={{ position: 'relative', width: '100%' }}>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={4}
          justifyContent="space-between"
          alignItems="flex-start"
          sx={{ mb: 5 }}
        >
          {steps.map(({ number, title, description }) => (
            <Box
              key={number}
              component="article"
              sx={{ maxWidth: 250, textAlign: 'center', mx: 'auto' }}
            >
              <Typography
                variant="h6"
                fontWeight={700}
                sx={{ mb: 1 }}
                fontFamily={'DM Sans, sans-serif'}
                fontSize={'20px'}
              >
                {title}
              </Typography>

              <Box
                sx={{
                  width: '61px',
                  height: '61px',
                  borderRadius: '50%',
                  backgroundColor: 'primary.main',
                  color: '#fff',
                  mx: 'auto',

                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mb: 3,
                  fontSize: '30px',
                }}
              >

                {number}
              </Box>
              <Box
                sx={{
                  position: 'absolute',
                  top: '70px',
                  width: '80%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  right: 0,
                  height: '1px',
                  backgroundColor: '#67BFF9',
                  zIndex: -1,
                  display: { xs: 'none', md: 'block' },
                }}
              />
              <Typography variant="body2" sx={{ fontSize: '16px', lineHeight: '22px', color: theme.palette.custom.textBlack, letterSpacing: '0' }}>
                {description}
              </Typography>

            </Box>
          ))}
        </Stack>

      </Box>
      <ButtomCTA />
    </Box>


  );
};

export default TransferSteps;
