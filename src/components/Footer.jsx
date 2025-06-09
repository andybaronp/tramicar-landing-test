import { Box, Typography, Link, useTheme, Container } from '@mui/material';
const footerLinks = ['Política de Privacidad', 'Política de Cookies', 'Aviso Legal', 'Condiciones de Uso']
const Footer = () => {
  const theme = useTheme();
  return (
    <Container
      component="footer"
      sx={{
        display: 'flex',
        justifyContent: { xs: 'center', md: 'space-between' },
        alignItems: 'center',
        color: theme.palette.custom.footerTextColor,
        textAlign: 'center',
        flexDirection: { xs: 'column', md: 'row' },
        flexWrap: 'wrap',
        p: 2,
      }}
      maxWidth='lg'
    >
      <Typography variant="body2" sx={{ mb: 1 }}>
        ©2023 Tramicar. Todos los derechos reservados.
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 2 }}>
        {footerLinks.map((text, i) => (
          <Link
            key={i}
            href="#"
            underline="hover"
            sx={{ fontSize: '0.875rem', color: theme.palette.custom.footerTextColor, borderRight: i < footerLinks.length - 1 ? '1px solid' : 'none', pr: i < footerLinks.length - 1 ? 2 : 0 }}
          >
            {text}
          </Link>
        ))}
      </Box>
    </Container>
  );
};

export default Footer;
