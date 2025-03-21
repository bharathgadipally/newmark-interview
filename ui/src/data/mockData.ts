import { PropertyResponse } from '../types/property'

// Mock data for development
export const mockData: PropertyResponse = {
  properties: [
    {
      name: 'Sunset Plaza',
      features: ['24/7 Security', 'High-Speed Internet', 'Parking Available'],
      highlights: ['LEED Certified', 'Recently Renovated'],
      transportation: ['Subway Nearby', 'Bus Stop at Entrance'],
      spaces: [
        {
          name: 'Office Space A',
          rentRoll: [
            { month: 'January', amount: 1000 },
            { month: 'February', amount: 1200 }
          ]
        },
        {
          name: 'Office Space B',
          rentRoll: [
            { month: 'January', amount: 1500 },
            { month: 'February', amount: 1600 }
          ]
        }
      ]
    },
    {
      name: 'Ocean View Apartments',
      features: ['Swimming Pool', 'Gym Access', 'Concierge Service'],
      highlights: ['Ocean View', 'Pet Friendly'],
      transportation: ['Close to Airport', 'Train Station Nearby'],
      spaces: [
        {
          name: 'Luxury Apartment 101',
          rentRoll: [
            { month: 'March', amount: 2000 },
            { month: 'April', amount: 2100 }
          ]
        }
      ]
    }
  ]
}
