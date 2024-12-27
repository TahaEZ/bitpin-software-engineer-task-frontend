import Decimal from 'decimal.js'
import { FC } from 'react'

import { IMarketCardProps } from '@/model/dataModel'

const MarketCard: FC<IMarketCardProps> = ({ market }) => {
  return (
    <div className="bg-background-2 grid grid-cols-1 place-items-center gap-4 rounded-md p-4 md:grid-cols-3 md:place-items-start md:gap-0">
      <div className="flex items-center gap-2">
        <img className="size-10 object-contain" src={market.currency1.image} alt={market.currency1.title_fa} />
        <div className="flex flex-col gap-2">
          <span>{market.title_fa}</span>
          <span className="text-xs">{market.title}</span>
        </div>
      </div>
      <div className="flex flex-col items-center gap-2">
        <span>قیمت: {new Decimal(market.price).toFixed()}</span>
        <div className="flex items-center gap-2">
          <span className="text-xs">{market.currency2.title_fa}</span>
          <img className="size-6 object-contain" src={market.currency2.image} alt={market.currency2.title_fa} />
        </div>
      </div>
      <div className="flex flex-col items-center gap-2">
        <span>ارزش بازار: {new Decimal(market.market_cap).toFixed()}</span>
        <div>
          <span dir="rtl">حجم معاملات ۲۴h:</span> <span>{new Decimal(market.volume_24h).toFixed()}</span>
        </div>
      </div>
    </div>
  )
}

export default MarketCard
