import './App.css'

import { DirectionProvider, MantineProvider } from '@mantine/core'
import { Notifications } from '@mantine/notifications'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { HelmetProvider } from 'react-helmet-async'
import { Route, Routes } from 'react-router'

import ApplicationQueryClientProvider from '@/components/ApplicationQueryClientProvider'
import { MarketDetails } from '@/components/MarketDetails'
import Markets from '@/components/Markets/Markets'
import { THEME } from '@/constants'
import LINKS from '@/constants/LINKS'

import ApplicationLayout from './components/ApplicationLayout'

function App() {
  return (
    <HelmetProvider>
      <DirectionProvider initialDirection="rtl">
        <MantineProvider defaultColorScheme="auto" theme={THEME}>
          <ApplicationQueryClientProvider>
            <ApplicationLayout>
              <Notifications />
              <Routes>
                <Route path={LINKS.MARKETS} element={<Markets />} />
                <Route path={LINKS.MARKET_DETAILS} element={<MarketDetails />} />
              </Routes>
              <div dir="ltr">
                <ReactQueryDevtools initialIsOpen={false} />
              </div>
            </ApplicationLayout>
          </ApplicationQueryClientProvider>
        </MantineProvider>
      </DirectionProvider>
    </HelmetProvider>
  )
}

export default App
