import { MarketDetailsBuy, MarketDetailsMatches, MarketDetailsSell } from '@/components/MarketDetails'
import { IMarketDetailsTab } from '@/model/dataModel/IMarketDetailsTab'
import { MarketDetailsCategory } from '@/model/enum'

const MARKET_DETAILS_TABS: Array<IMarketDetailsTab> = [
  {
    title: 'سفارشات خرید',
    value: MarketDetailsCategory.BUY,
    CategoryPanel: MarketDetailsBuy,
  },
  {
    title: 'سفارشات فروش',
    value: MarketDetailsCategory.SELL,
    CategoryPanel: MarketDetailsSell,
  },
  {
    title: 'معاملات',
    value: MarketDetailsCategory.MATCHES,
    CategoryPanel: MarketDetailsMatches,
  },
]

export default MARKET_DETAILS_TABS
