export type IResponse<TData> = {
  count: number
  previous: string | null
  next: string | null
  results: Array<TData>
}
