import { NumberInput } from '@mantine/core'
import Decimal from 'decimal.js'
import { FC, useState } from 'react'

import { getPercentageBasedOrdersInfo } from '@/helper'
import { IMarketPercentageOrderProps } from '@/model/dataModel'

const MarketPercentageOrder: FC<IMarketPercentageOrderProps> = ({ ordersRemainSum, orders }) => {
  const [percentage, setPercentage] = useState<number | string>('')
  const [error, setError] = useState<string | null>(null)

  const handleChange = (newPercentage: number | string) => {
    if (+newPercentage > 100 || +newPercentage < 0) {
      setError('مقدار درصد باید عددی از ۰ تا ۱۰۰ باشد')
    } else {
      setError(null)
    }
    setPercentage(newPercentage)
  }

  const orderedRemain = ordersRemainSum ? new Decimal(ordersRemainSum).mul(+percentage).dividedBy(100).toFixed() : undefined
  const { totalValue, weightedAveragePrice } = getPercentageBasedOrdersInfo(orders, orderedRemain)

  return (
    <div>
      <NumberInput
        className="mx-auto sm:max-w-80"
        onChange={(value) => handleChange(value)}
        value={percentage}
        error={error}
        wrapperProps={{ dir: 'ltr' }}
        styles={{ input: { '--input-text-align': 'left' } }}
        placeholder="درصد ورودی"
        max={100}
        min={0}
      />
      <div className="mt-4 grid grid-cols-1 place-items-center gap-4 sm:grid-cols-3">
        <div>
          <span>مجموع حجم ارز قابل دریافت: </span>
          <span>{orderedRemain}</span>
        </div>
        <div>
          <span>میانگین قیمت ارز: </span>
          <span>{weightedAveragePrice}</span>
        </div>
        <div>
          <span>مجموع مبلغ قابل پرداخت: </span>
          <span>{totalValue}</span>
        </div>
      </div>
    </div>
  )
}

export default MarketPercentageOrder
