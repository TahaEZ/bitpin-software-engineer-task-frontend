import { TabsPanelProps } from '@mantine/core'

import { SwipeDirection } from '@/model/enum'

export type SwipeableTabsPanelProps = {
  onSwipe: (direction: SwipeDirection) => void
} & TabsPanelProps
