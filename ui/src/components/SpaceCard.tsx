import { useState } from 'react'
import { Space } from '../types/property'
import RentRollTable from './RentRollTable'

interface SpaceCardProps {
  space: Space
}

const SpaceCard = ({ space }: SpaceCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="overflow-hidden rounded-lg border bg-white shadow-sm transition-all duration-300">
      <div
        className="flex cursor-pointer items-center justify-between bg-gray-100 p-4 transition hover:bg-gray-200"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h2 className="text-base font-medium">{space.spaceName}</h2>
        <span className="text-gray-500">{isExpanded ? '▼' : '▶'}</span>
      </div>

      <div
        className={`transition-all duration-300 ease-in-out ${
          isExpanded ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}
      >
        <div className="p-4">
          <RentRollTable rentRoll={space.rentRoll} />
        </div>
      </div>
    </div>
  )
}

export default SpaceCard
