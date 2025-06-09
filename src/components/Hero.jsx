import { Box, Button, Container, Typography, useTheme } from "@mui/material"
import HeroImage from '../assets/hero-image.svg'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import ButtomCTA from "./ButtomCTA";
const Hero = () => {
  const theme = useTheme();
  return (
    <Container component={'section'} color={theme.palette.custom.textBlack} sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: { xs: 'column', md: 'row' },
      flexWrap: 'wrap',
      lineHeight: '52px',
      textAlign: 'left',

    }}
      maxWidth='lg'
    >
      {/* TEXTO */}
      <Box flex={1} mt={15} mr={{ xs: 0, lg: -10 }}>
        <Typography variant="h3" component="h1" gutterBottom fontWeight="bold" sx={{ fontSize: '46px', }}  >
          <Box component="span" fontWeight="bold" color="primary.main">Esto es una prueba</Box> para demostrar tus capacidades de <Box component="span" color="primary.main">maquetación</Box>
        </Typography>

        <Typography color="primary.main" fontWeight="medium" fontFamily='DM Sans' fontSize={'19px'}  >
          Solo pagarás los impuestos (ITP) y tasas (DGT).
        </Typography>
        <Typography color="primary.main" fontFamily='DM Sans' fontWeight="bold" sx={{ mb: 3 }} fontSize={'19px'}>
          <Box component="span" sx={{ fontWeight: 'bold' }}>Línea Directa</Box> te regala el 100% de los gastos de gestión*
        </Typography>

        <Box maxWidth={480}>

          <Typography variant="body1" fontFamily='DM Sans' sx={{ fontSize: '20px', lineHeight: '28px', mb: 2 }}>
            En Tramicar, tenemos un equipo de profesionales listos para gestionar el cambio de nombre de tu vehículo de manera completamente online, desde cualquier lugar y en cualquier momento del año.
          </Typography>
        </Box>
        <Box px={2}>

          <ButtomCTA />
        </Box>

      </Box>

      {/* IMAGEN */}
      <Box flex={1} display="flex" justifyContent="center"  >
        <Box
          component="img"
          src={HeroImage}
          alt="Ilustración de personas estrechando la mano"
          sx={{ width: '605px', maxWidth: '605px', height: 'auto', objectFit: 'contain' }}
        />
      </Box>

    </Container>
  )
}
export default Hero