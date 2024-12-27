import { MutationCache, QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { FC } from 'react'

import { handleReactQueryCacheError } from '@/helper'
import { IProps } from '@/model/dataModel'

const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false } },
  queryCache: new QueryCache({
    onError: (error, query) => handleReactQueryCacheError(error, query),
  }),
  mutationCache: new MutationCache({
    onError: (error, _variables, _context, mutation) => handleReactQueryCacheError(error, mutation),
  }),
})

const ApplicationQueryClientProvider: FC<IProps> = ({ children }) => {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}

export default ApplicationQueryClientProvider
