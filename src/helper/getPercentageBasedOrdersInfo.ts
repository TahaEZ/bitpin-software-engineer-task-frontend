import Decimal from 'decimal.js'

import { IMarketOrder } from '@/model/apiModel'

// TODO: This logic is based on my assumptions and may not be accurate. I might need to revise it once I receive clarification via email.
const getPercentageBasedOrdersInfo = (orders: Array<IMarketOrder> | undefined, orderedRemain: string | undefined) => {
  if (!orders || !orderedRemain || orderedRemain === '0') return { totalValue: 0, weightedAveragePrice: 0 }

  let accumulatedRemain = 0
  let accumulatedValue = 0
  let weightedPriceSum = 0

  for (const order of orders) {
    if (accumulatedRemain >= new Decimal(orderedRemain).toNumber()) break

    const usableRemain = Math.min(new Decimal(order.remain).toNumber(), new Decimal(orderedRemain).minus(accumulatedRemain).toNumber())
    accumulatedRemain += usableRemain
    accumulatedValue += +order.price * usableRemain
    weightedPriceSum += +order.price * usableRemain
  }

  return {
    weightedAveragePrice: new Decimal(weightedPriceSum).dividedBy(orderedRemain).toFixed(),
    totalValue: new Decimal(accumulatedValue).toFixed(),
  }
}

export default getPercentageBasedOrdersInfo
