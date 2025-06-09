import './App.css'
import { Box } from '@mui/material'

import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import TransferSteps from './components/TransferSteps'
import BenefitsSection from './components/BenefitsSection'
import LegalNotice from './components/LegalNotice'

function App() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '80px 20px 20px 20px' }}  >
      <Header />
      <Box
        component="main"
        flex={1}
        sx={{
          mx: 'auto',
          px: { xs: 2, md: '40px' },
          display: 'flex',
          flexDirection: 'column',

        }}
      >
        {/* Hero */}
        <Hero />
        {/* StepSection */}
        <TransferSteps />
        {/* BenefitsSection */}
        <BenefitsSection />
        {/* LegalNotice */}
        <LegalNotice />
      </Box>
      <Footer />
    </Box>
  )
}

export default App
