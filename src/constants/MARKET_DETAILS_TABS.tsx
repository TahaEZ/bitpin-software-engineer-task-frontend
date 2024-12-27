import { MarketDetailsMatches, MarketOrders } from '@/components/MarketDetails'
import { IMarketDetailsTab } from '@/model/dataModel'
import { MarketDetailsCategory } from '@/model/enum'

const MARKET_DETAILS_TABS: Array<IMarketDetailsTab> = [
  {
    title: 'سفارشات خرید',
    value: MarketDetailsCategory.BUY,
    element: <MarketOrders type={MarketDetailsCategory.BUY} />,
  },
  {
    title: 'سفارشات فروش',
    value: MarketDetailsCategory.SELL,
    element: <MarketOrders type={MarketDetailsCategory.SELL} />,
  },
  {
    title: 'معاملات',
    value: MarketDetailsCategory.MATCHES,
    element: <MarketDetailsMatches />,
  },
]

export default MARKET_DETAILS_TABS
