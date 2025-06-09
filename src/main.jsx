import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#5956E9'
    },
    secondary: { main: '#3F65F0' },

    custom: {
      translucentBackground: 'rgba(228, 231, 250, 0.52)',
      footerTextColor: '#919090',
      textBlack: '#272D38',
    },
  },
  typography: {
    fontFamily: 'Poppins, sans-serif',
  },
})
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
