import './App.css'

import { DirectionProvider, MantineProvider } from '@mantine/core'
import { Notifications } from '@mantine/notifications'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Route, Routes } from 'react-router'

import MarketDetails from '@/components/MarketDetails'
import Markets from '@/components/Markets'
import LINKS from '@/constants/LINKS'

import ApplicationQueryClientProvider from './components/ApplicationQueryClientProvider'

function App() {
  return (
    <DirectionProvider initialDirection="rtl">
      <MantineProvider defaultColorScheme="auto">
        <ApplicationQueryClientProvider>
          <Notifications />
          <Routes>
            <Route path={LINKS.MARKETS} element={<Markets />} />
            <Route path={LINKS.MARKET_DETAILS} element={<MarketDetails />} />
          </Routes>
          <div dir="ltr">
            <ReactQueryDevtools initialIsOpen={false} />
          </div>
        </ApplicationQueryClientProvider>
      </MantineProvider>
    </DirectionProvider>
  )
}

export default App
