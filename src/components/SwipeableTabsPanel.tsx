import { Tabs } from '@mantine/core'
import { FC, TouchEvent, useRef } from 'react'

import { SwipeableTabsPanelProps } from '@/model/dataModel'
import { SwipeDirection } from '@/model/enum'

const SWIPE_THRESHOLD = 50

const SwipeableTabsPanel: FC<SwipeableTabsPanelProps> = ({ onSwipe, children, ...rest }) => {
  const touchStart = useRef<number | null>(null)
  const touchEnd = useRef<number | null>(null)

  const onTouchStart = (e: TouchEvent<HTMLElement>) => {
    touchEnd.current = null
    touchStart.current = e.targetTouches[0].clientX
  }

  const onTouchMove = (e: TouchEvent<HTMLElement>) => {
    touchEnd.current = e.targetTouches[0].clientX
  }

  const onTouchEnd = () => {
    if (!touchStart.current || !touchEnd.current) return

    const distance = touchStart.current - touchEnd.current
    const isLeftSwipe = distance > SWIPE_THRESHOLD
    const isRightSwipe = distance < -SWIPE_THRESHOLD

    if (!isLeftSwipe && !isRightSwipe) return

    onSwipe(isLeftSwipe ? SwipeDirection.LEFT : SwipeDirection.RIGHT)
  }

  return (
    <Tabs.Panel onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd} {...rest}>
      {children}
    </Tabs.Panel>
  )
}

export default SwipeableTabsPanel
