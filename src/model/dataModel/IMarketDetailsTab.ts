import { FC } from 'react'

import { MarketDetailsCategory } from '@/model/enum'

export type IMarketDetailsTab = {
  title: string
  value: MarketDetailsCategory
  CategoryPanel: FC
}
