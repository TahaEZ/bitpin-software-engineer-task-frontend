import { Skeleton } from '@mantine/core'
import Decimal from 'decimal.js'
import { FC } from 'react'
import { useParams } from 'react-router'

import { getOrdersRemainSum, getOrdersValueSum } from '@/helper'
import { useMarketActivities } from '@/hooks'
import { IMarketOrderProps } from '@/model/dataModel'

import MarketPercentageOrder from './MarketPercentageOrder'

const MarketOrders: FC<IMarketOrderProps> = ({ type }) => {
  const { id } = useParams()

  const { isLoading, data } = useMarketActivities(id, type)

  const ordersRemainSum = getOrdersRemainSum(data?.orders)
  const ordersValueSum = getOrdersValueSum(data?.orders)

  return (
    <div className="p-2 md:p-4">
      <div className="mb-4 grid grid-cols-3 place-items-center gap-2 border-b py-2 text-xs font-bold md:text-sm">
        <span>مقدار باقی‌مانده</span>
        <span>قیمت واحد</span>
        <span>ارزش</span>
      </div>
      <div className="flex flex-col gap-2">
        {isLoading &&
          Array.from({ length: 3 }).map(() => (
            <div key={crypto.randomUUID()} className="grid grid-cols-3 place-items-center gap-2">
              {Array.from({ length: 3 }).map(() => (
                <Skeleton key={crypto.randomUUID()} my={2} height={10} />
              ))}
            </div>
          ))}
        {!isLoading && (
          <div>
            {data?.orders?.slice(0, 10).map((order) => (
              <div key={crypto.randomUUID()} className="grid grid-cols-3 place-items-center gap-2">
                <div>{new Decimal(order.remain).toFixed()}</div>
                <div>{new Decimal(order.price).toFixed()}</div>
                <div>{new Decimal(order.value).toFixed()}</div>
              </div>
            ))}
            <div className="mt-8 grid grid-cols-1 place-items-center gap-4 sm:grid-cols-3">
              <div>
                <span>مجموع باقی‌مانده: </span>
                <span>{ordersRemainSum}</span>
              </div>
              <div>
                <span>مجموع ارزش: </span>
                <span>{ordersValueSum}</span>
              </div>
              <div>
                <span>مجموع باقی‌مانده: </span>
                <span>{ordersRemainSum}</span>
              </div>
            </div>
            <div className="mt-12">
              <MarketPercentageOrder orders={data?.orders} ordersRemainSum={ordersRemainSum} />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default MarketOrders
