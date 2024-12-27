import { useQuery } from '@tanstack/react-query'

import { getMarketMatches } from '@/service/market-service'

const useMarketMatches = (id: string | undefined) => {
  return useQuery({
    queryFn: async () => {
      if (!id || isNaN(+id)) return

      return (await getMarketMatches(+id)).data
    },
    queryKey: ['Market Matches', id ?? ''],
  })
}

export default useMarketMatches
