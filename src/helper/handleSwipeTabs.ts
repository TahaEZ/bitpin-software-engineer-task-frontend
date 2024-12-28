import { ITab } from '@/model/dataModel'
import { SwipeDirection } from '@/model/enum'

const handleSwipeTabs = <T extends string = string>({
  index,
  swipeDirection,
  tabs,
  setTab,
}: {
  swipeDirection: SwipeDirection
  index: number
  tabs: Array<ITab<T>>
  setTab: (tab: ITab<T>['value']) => void
}) => {
  switch (swipeDirection) {
    case SwipeDirection.RIGHT:
      if (index === tabs.length - 1) return
      setTab(tabs[index + 1].value)

      break
    case SwipeDirection.LEFT:
      if (index === 0) return
      setTab(tabs[index - 1].value)

      break
  }
}

export default handleSwipeTabs
