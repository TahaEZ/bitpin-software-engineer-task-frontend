import { IMarketOrder } from '@/model/apiModel'

export type IMarketPercentageOrderProps = {
  orders: Array<IMarketOrder> | undefined
  ordersRemainSum: number | undefined
}
