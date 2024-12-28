import { Tabs } from '@mantine/core'
import { Helmet } from 'react-helmet'

import { MARKET_DETAILS_TABS } from '@/constants'
import { MarketDetailsCategory } from '@/model/enum'

const MarketDetails = () => {
  return (
    <div className="p-4">
      <Helmet>
        <title>بیت‌پین | جزئیات بازار</title>
      </Helmet>
      <Tabs keepMounted={false} defaultValue={MarketDetailsCategory.BUY}>
        <Tabs.List>
          {MARKET_DETAILS_TABS.map((tab) => (
            <Tabs.Tab key={tab.value} value={tab.value}>
              {tab.title}
            </Tabs.Tab>
          ))}
        </Tabs.List>
        {MARKET_DETAILS_TABS.map((tab) => (
          <Tabs.Panel key={tab.value} value={tab.value}>
            {tab.element}
          </Tabs.Panel>
        ))}
      </Tabs>
    </div>
  )
}

export default MarketDetails
