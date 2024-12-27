import { notifications } from '@mantine/notifications'
import type { Mutation, Query } from '@tanstack/react-query'
import { AxiosError } from 'axios'

import { SERVICE_GLOBAL_ERROR } from '@/constants'

const handleQueryCacheError = (error: Error, cacheData: Query<unknown, unknown> | Mutation<unknown, unknown>) => {
  if (!(error instanceof AxiosError) || cacheData.meta?.disableNotificationOnError) {
    return
  }

  const message = SERVICE_GLOBAL_ERROR

  notifications.show({ color: 'red', message })
}

export default handleQueryCacheError
