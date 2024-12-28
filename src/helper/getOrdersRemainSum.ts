import Decimal from 'decimal.js'

import { IMarketOrder } from '@/model/apiModel'

const getOrdersRemainSum = (orders: Array<IMarketOrder> | undefined) => orders?.reduce((previousValue, order) => new Decimal(order.remain).add(previousValue).toNumber(), 0)

export default getOrdersRemainSum
