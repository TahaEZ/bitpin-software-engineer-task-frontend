import { Skeleton } from '@mantine/core'
import Decimal from 'decimal.js'
import { FC } from 'react'
import { useParams } from 'react-router'

import { useMarketActivities } from '@/hooks'
import { IMarketOrderProps } from '@/model/dataModel'

const MarketOrders: FC<IMarketOrderProps> = ({ type }) => {
  const { id } = useParams()

  const { isLoading, data } = useMarketActivities(id, type)

  const ordersRemainSum = data?.orders?.reduce((previousValue, order) => new Decimal(order.remain).add(previousValue).toNumber(), 0)
  const ordersValueSum = data?.orders?.reduce((previousValue, order) => new Decimal(order.value).add(previousValue).toNumber(), 0)

  return (
    <div className="p-2 md:p-4">
      <div className="mb-4 grid grid-cols-3 place-items-center gap-2 border-b py-2 text-xs font-bold md:text-sm">
        <span>مقدار باقی‌مانده</span>
        <span>قیمت واحد</span>
        <span>ارزش</span>
      </div>
      <div className="flex flex-col gap-2">
        {isLoading &&
          Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="grid grid-cols-3 place-items-center gap-2">
              <Skeleton my={2} height={10} />
              <Skeleton my={2} height={10} />
              <Skeleton my={2} height={10} />
            </div>
          ))}
        {!isLoading && (
          <div>
            {data?.orders?.slice(0, 10).map((order, index) => (
              <div key={index} className="grid grid-cols-3 place-items-center gap-2">
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
          </div>
        )}
      </div>
    </div>
  )
}

export default MarketOrders
