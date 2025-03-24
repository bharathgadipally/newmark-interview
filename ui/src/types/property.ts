export interface RentRoll {
  month: string
  rent: number
}

export interface Space {
  spaceId: string
  spaceName: string
  rentRoll: RentRoll[]
}

export interface Property {
  propertyId: string
  propertyName: string
  features: string[]
  hightlights: string[]
  transportation: Transportation[]
  spaces: Space[]
}

export interface Transportation {
  type: string,
  line: string,
  distance: string,
  station: string
}

export interface PropertyResponse {
  properties: Property[]
}
