export interface VehicleListResponse {
  count: number
  next: string
  previous: any
  results: Result[]
}

export interface Result {
  name: string
  model: string
  url: string
}