import { notifications } from '@mantine/notifications'
import type { Mutation, Query } from '@tanstack/react-query'
import { AxiosError } from 'axios'

import { SERVICE_GLOBAL_ERROR } from '@/constants'

const handleQueryCacheError = (error: Error, cacheData: Query<unknown, unknown> | Mutation<unknown, unknown>) => {
  if (!(error instanceof AxiosError) || cacheData.meta?.disableNotificationOnError) {
    return
  }

  const { response } = error
  const message = !response?.data || !response?.data[0] ? SERVICE_GLOBAL_ERROR : response?.data[0]

  notifications.show({ color: 'red', message })
}

export default handleQueryCacheError
