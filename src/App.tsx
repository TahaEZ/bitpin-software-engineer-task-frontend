import './App.css'

import { DirectionProvider, MantineProvider } from '@mantine/core'
import { Notifications } from '@mantine/notifications'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Route, Routes } from 'react-router'

import ApplicationQueryClientProvider from '@/components/ApplicationQueryClientProvider'
import { MarketDetails } from '@/components/MarketDetails'
import Markets from '@/components/Markets/Markets'
import { THEME } from '@/constants'
import LINKS from '@/constants/LINKS'

function App() {
  return (
    <DirectionProvider initialDirection="rtl">
      <MantineProvider defaultColorScheme="auto" theme={THEME}>
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
