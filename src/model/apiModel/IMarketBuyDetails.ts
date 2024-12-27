import { IMarketOrder } from './IMarketOrder'

export type IMarketBuyDetails = {
  orders: Array<IMarketOrder>
  volume: string
}
