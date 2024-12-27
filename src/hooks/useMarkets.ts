import { useQuery } from '@tanstack/react-query'

import { getMarketsList } from '@/service/market-service'
export const MARKET_QUERY_KEY = 'Markets'

const useMarkets = () => {
  return useQuery({
    queryFn: async () => (await getMarketsList()).data,
    queryKey: [MARKET_QUERY_KEY],
  })
}

export default useMarkets
