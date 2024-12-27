import MARKETS_API from '@/constants/MARKETS_API'
import { IMarket, IResponse } from '@/model/apiModel'

import instance from './instance'

export const getMarketsList = () => {
  return instance.get<IResponse<IMarket>>(MARKETS_API.MARKETS)
}
