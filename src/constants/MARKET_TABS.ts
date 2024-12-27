import { IMarketTab } from '@/model/dataModel'
import { CurrencyBase } from '@/model/enum'

const MARKET_TABS: Array<IMarketTab> = [
  {
    title: 'پایه تومان',
    value: CurrencyBase.IRT,
  },
  {
    title: 'پایه دلار',
    value: CurrencyBase.USDT,
  },
]

export default MARKET_TABS
