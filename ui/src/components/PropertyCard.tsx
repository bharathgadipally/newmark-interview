import { useState } from 'react'
import { Property } from '../types/property'
import FeaturesList from './FeatureList'
import SpaceList from './SpaceList'

interface PropertyCardProps {
  property: Property
}

const PropertyCard = ({ property }: PropertyCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="overflow-hidden rounded-lg border bg-white shadow-sm transition-all duration-300">
      <div
        className="flex cursor-pointer items-center justify-between p-6"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-full bg-blue-100 text-blue-600">
            🏢
          </div>
          <h2 className="text-xl font-medium">{property.name}</h2>
        </div>
        <span className="text-gray-500">
          {isExpanded ? '▼' : '▶'}{' '}
          {/* Replace with Tailwind icons if available */}
        </span>
      </div>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isExpanded
            ? 'grid-rows-[1fr] opacity-100'
            : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <div className="space-y-6 p-6 pt-0">
            <div className="grid gap-6 md:grid-cols-3">
              <FeaturesList
                title="Features"
                items={property.features}
                badgeVariant="outline"
              />
              <FeaturesList
                title="Highlights"
                items={property.highlights}
                badgeVariant="secondary"
              />
              <FeaturesList
                title="Transportation"
                items={property.transportation}
                badgeVariant="default"
              />
            </div>
            <SpaceList spaces={property.spaces} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PropertyCard
