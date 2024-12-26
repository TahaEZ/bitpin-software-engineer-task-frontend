import './App.css'

import { Route, Routes } from 'react-router'

import MarketDetails from '@/components/MarketDetails'
import Markets from '@/components/Markets'
import LINKS from '@/constants/LINKS'

function App() {
  return (
    <Routes>
      <Route path={LINKS.MARKETS} element={<Markets />} />
      <Route path={LINKS.MARKET_DETAILS} element={<MarketDetails />} />
    </Routes>
  )
}

export default App
