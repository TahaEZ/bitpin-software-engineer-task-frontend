export type ICurrency<TCode extends string = string> = {
  id: number
  title: string
  title_fa: string
  code: TCode
  tradable: boolean
  for_test: boolean
  image: string
  decimal: number
  decimal_amount: number
  decimal_irt: number
  color: string
  high_risk: boolean
  show_high_risk: boolean
  withdraw_commission: string
  tags: Array<{
    id: number
    name: string
    name_en: string
    has_chart: boolean
  }>
  etf: boolean
  for_binvest: boolean
  for_loan: boolean
  for_stake: boolean
  recommend_for_deposit_weight: number
}
