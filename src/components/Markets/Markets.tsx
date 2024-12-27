import { Skeleton, Tabs } from '@mantine/core'

import { MARKET_TABS } from '@/constants'
import { filterMarketsByCurrency } from '@/helper'
import useMarkets from '@/hooks/useMarkets'
import { CurrencyBase } from '@/model/enum'

import MarketCardList from './MarketCardList'

const Markets = () => {
  const { isLoading, data } = useMarkets()

  return (
    <div className="p-4">
      <Tabs defaultValue={CurrencyBase.IRT}>
        <Tabs.List>
          {MARKET_TABS.map((tab) => (
            <Tabs.Tab key={tab.value} disabled={isLoading} value={tab.value}>
              {tab.title}
            </Tabs.Tab>
          ))}
        </Tabs.List>
        {MARKET_TABS.map((tab) => (
          <Tabs.Panel key={tab.value} value={tab.value}>
            <MarketCardList markets={filterMarketsByCurrency(data?.results, tab.value)} />
          </Tabs.Panel>
        ))}
        <div className="flex flex-col gap-4 p-4">{isLoading && Array.from({ length: 3 }).map((_, index) => <Skeleton key={`skeleton-${index}`} height={80} />)}</div>
      </Tabs>
    </div>
  )
}

export default Markets
