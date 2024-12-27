import { Skeleton } from '@mantine/core'
import Decimal from 'decimal.js'
import { useParams } from 'react-router'

import useMarketMatches from '@/hooks/useMarketMatches'

const MarketDetailsMatches = () => {
  const { id } = useParams()

  const { isLoading, data } = useMarketMatches(id)
  return (
    <div className="p-2 md:p-4">
      <div className="mb-4 grid grid-cols-3 place-items-center gap-2 border-b py-2 text-xs font-bold md:text-sm">
        <span>مقدار معامله</span>
        <span>قیمت</span>
        <span>زمان</span>
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
        {!isLoading &&
          data?.slice(0, 10).map((match) => (
            <div key={match.match_id} className="grid grid-cols-3 place-items-center gap-2">
              <div>{new Decimal(match.match_amount).toFixed()}</div>
              <div>{new Decimal(match.price).toFixed()}</div>
              <div dir="ltr">{new Date(match.time * 1000).toLocaleString('fa')}</div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default MarketDetailsMatches
