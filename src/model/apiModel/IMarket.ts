import { CurrencyBase } from '@/model/enum'

import { ICurrency } from './ICurrency'
import { IPriceInfo } from './IPriceInfo'

export type IMarket = {
  id: number
  currency1: ICurrency
  currency2: ICurrency<CurrencyBase>
  tradable: boolean
  otc_tradable: boolean
  coming_soon: boolean
  for_test: boolean
  otc_sell_percent: string
  otc_buy_percent: string
  otc_max_buy_amount: string
  otc_max_sell_amount: string
  order_book_info: IPriceInfo
  internal_price_info: IPriceInfo
  price_info: IPriceInfo
  price: string
  title: string
  code: string
  title_fa: string
  trading_view_source: string
  trading_view_symbol: string
  otc_market: boolean
  text: string
  volume_24h: string
  market_cap: string
  circulating_supply: string
  all_time_high: string
  popularity_weight: number
  freshness_weight: number
  price_increment: null
}
