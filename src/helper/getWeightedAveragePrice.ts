import Decimal from 'decimal.js'

import { IMarketOrder } from '@/model/apiModel'

// TODO: This logic is based on my assumptions and may not be accurate. I might need to revise it once I receive clarification via email.
const getWeightedAveragePrice = (orders: Array<IMarketOrder> | undefined, ordersRemainSum: number | undefined) => {
  if (!orders || !ordersRemainSum) return

  const weightedPriceSum = orders.reduce((previousValue, order) => new Decimal(order.remain).mul(order.price).add(previousValue).toNumber(), 0)

  return new Decimal(weightedPriceSum).dividedBy(ordersRemainSum).toFixed()
}

export default getWeightedAveragePrice
