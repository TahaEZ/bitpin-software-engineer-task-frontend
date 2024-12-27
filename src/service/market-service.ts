import MARKETS_API from '@/constants/MARKETS_API'
import { IMarket, IMarketBuyDetails, IMarketMatch, IPaginatedResponse } from '@/model/apiModel'
import { MarketDetailsCategory } from '@/model/enum'

import instance from './instance'

export const getMarketsList = () => {
  return instance.get<IPaginatedResponse<IMarket>>(MARKETS_API.MARKETS)
}

export const getMarketActivities = (id: number, type: MarketDetailsCategory) => {
  return instance.get<IMarketBuyDetails>(`${MARKETS_API.MARKET_ACTIVITIES}${id}/`, { params: { type } })
}

export const getMarketMatches = (id: number) => {
  return instance.get<Array<IMarketMatch>>(`${MARKETS_API.MARKET_MATCHES}${id}/`)
}
