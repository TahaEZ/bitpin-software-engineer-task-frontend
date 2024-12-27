import { useQuery } from '@tanstack/react-query'

import { MarketDetailsCategory } from '@/model/enum'
import { getMarketActivities } from '@/service/market-service'

export const MARKET_ACTIVITIES_QUERY_KEY = 'Market Activities'

const useMarketActivities = (id: string | undefined, type: MarketDetailsCategory) => {
  return useQuery({
    queryFn: async () => {
      if (!id || isNaN(+id)) return

      return (await getMarketActivities(+id, type)).data
    },
    queryKey: [MARKET_ACTIVITIES_QUERY_KEY, id ?? '', type],
    refetchInterval: 3000,
  })
}

export default useMarketActivities
