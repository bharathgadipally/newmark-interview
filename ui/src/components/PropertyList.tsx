import { Property } from '../types/property'
import PropertyCard from './PropertyCard'

interface PropertyListProps {
  properties: Property[]
}

const PropertyList = ({ properties }: PropertyListProps) => {
  if (!properties.length) return null

  return (
    <div className="space-y-4">
      {properties.map((property, index) => (
        <PropertyCard key={index} property={property} />
      ))}
    </div>
  )
}

export default PropertyList
