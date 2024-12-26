import './App.css'

import { DirectionProvider, MantineProvider } from '@mantine/core'
import { Notifications } from '@mantine/notifications'
import { Route, Routes } from 'react-router'

import MarketDetails from '@/components/MarketDetails'
import Markets from '@/components/Markets'
import LINKS from '@/constants/LINKS'

function App() {
  return (
    <DirectionProvider initialDirection="rtl">
      <MantineProvider defaultColorScheme="auto">
        <Notifications />
        <Routes>
          <Route path={LINKS.MARKETS} element={<Markets />} />
          <Route path={LINKS.MARKET_DETAILS} element={<MarketDetails />} />
        </Routes>
      </MantineProvider>
    </DirectionProvider>
  )
}

export default App
