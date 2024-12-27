import { IMarket } from '@/model/apiModel'
import { CurrencyBase } from '@/model/enum'

const filterMarketsByCurrency = (markets: Array<IMarket> | undefined, currency: CurrencyBase) => {
  if (!markets) return []
  return markets.filter((market) => market.currency2.code === currency)
}

export default filterMarketsByCurrency
