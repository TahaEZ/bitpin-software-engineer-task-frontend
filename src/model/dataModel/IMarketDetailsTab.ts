import { ReactNode } from 'react'

import { MarketDetailsCategory } from '@/model/enum'

import { ITab } from './ITab'

export type IMarketDetailsTab = ITab<MarketDetailsCategory> & {
  element: ReactNode
}
