import { Tabs } from '@mantine/core'
import { useState } from 'react'
import { Helmet } from 'react-helmet-async'

import SwipeableTabsPanel from '@/components/SwipeableTabsPanel'
import { MARKET_DETAILS_TABS } from '@/constants'
import { handleSwipeTabs } from '@/helper'
import { MarketDetailsCategory } from '@/model/enum'

const MarketDetails = () => {
  const [currentTab, setCurrentTab] = useState<MarketDetailsCategory | null>(MarketDetailsCategory.BUY)

  return (
    <div className="p-4">
      <Helmet>
        <title>بیت‌پین | جزئیات بازار</title>
      </Helmet>
      <Tabs keepMounted={false} value={currentTab} onChange={(value) => setCurrentTab(value as MarketDetailsCategory)}>
        <Tabs.List>
          {MARKET_DETAILS_TABS.map((tab) => (
            <Tabs.Tab key={tab.value} value={tab.value}>
              {tab.title}
            </Tabs.Tab>
          ))}
        </Tabs.List>
        {MARKET_DETAILS_TABS.map((tab, index) => (
          <SwipeableTabsPanel
            key={tab.value}
            onSwipe={(swipeDirection) => handleSwipeTabs({ swipeDirection, index, setTab: setCurrentTab, tabs: MARKET_DETAILS_TABS })}
            value={tab.value}
          >
            {tab.element}
          </SwipeableTabsPanel>
        ))}
      </Tabs>
    </div>
  )
}

export default MarketDetails
