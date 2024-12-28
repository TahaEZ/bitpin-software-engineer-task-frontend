import Decimal from 'decimal.js'

import { IMarketOrder } from '@/model/apiModel'

const getOrdersValueSum = (orders: Array<IMarketOrder> | undefined) => orders?.reduce((previousValue, order) => new Decimal(order.value).add(previousValue).toNumber(), 0)

export default getOrdersValueSum
