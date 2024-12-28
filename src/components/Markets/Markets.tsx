import { Skeleton, Tabs } from '@mantine/core'
import { useState } from 'react'
import { Helmet } from 'react-helmet'

import SwipeableTabsPanel from '@/components/SwipeableTabsPanel'
import { MARKET_TABS } from '@/constants'
import { filterMarketsByCurrency, handleSwipeTabs } from '@/helper'
import { useMarkets } from '@/hooks'
import { CurrencyBase } from '@/model/enum'

import MarketCardList from './MarketCardList'

const Markets = () => {
  const { isLoading, data } = useMarkets()

  const [currentTab, setCurrentTab] = useState<CurrencyBase | null>(CurrencyBase.IRT)

  return (
    <div className="p-4">
      <Helmet>
        <title>بیت‌پین | بازارها</title>
      </Helmet>
      <Tabs value={currentTab} onChange={(value) => setCurrentTab(value as CurrencyBase)}>
        <Tabs.List>
          {MARKET_TABS.map((tab) => (
            <Tabs.Tab key={tab.value} disabled={isLoading} value={tab.value}>
              {tab.title}
            </Tabs.Tab>
          ))}
        </Tabs.List>
        {MARKET_TABS.map((tab, index) => (
          <SwipeableTabsPanel key={tab.value} onSwipe={(swipeDirection) => handleSwipeTabs({ swipeDirection, index, setTab: setCurrentTab, tabs: MARKET_TABS })} value={tab.value}>
            <MarketCardList markets={filterMarketsByCurrency(data?.results, tab.value)} />
          </SwipeableTabsPanel>
        ))}
        <div className="flex flex-col gap-4 p-4">{isLoading && Array.from({ length: 3 }).map((_, index) => <Skeleton key={`skeleton-${index}`} height={80} />)}</div>
      </Tabs>
    </div>
  )
}

export default Markets
