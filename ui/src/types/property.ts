export interface RentRoll {
  month: string
  amount: number
}

export interface Space {
  name: string
  rentRoll: RentRoll[]
}

export interface Property {
  name: string
  features: string[]
  highlights: string[]
  transportation: string[]
  spaces: Space[]
}

export interface PropertyResponse {
  properties: Property[]
}
