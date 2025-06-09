import './App.css'
import { Box, Container } from '@mui/material'

import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'

function App() {
  return (
    <Container maxWidth="xl" >
      <Header />
      <Box
        component="main"

      >
        {/* Hero */}
        <Hero />
        {/* Features */}
        {/* Testimonials */}
        {/* Call to Action */}
        {/* Sections */}
      </Box>
      <Footer />
    </Container>
  )
}

export default App
