import { Space } from '../types/property'
import SpaceCard from './SpaceCard'

interface SpaceListProps {
  spaces: Space[]
}

const SpaceList = ({ spaces }: SpaceListProps) => {
  if (!spaces.length) return null

  return (
    // eslint-disable-next-line tailwindcss/no-custom-classname
    <div className="animate-fade-in space-y-3">
      <h3 className="text-sm font-medium text-gray-600">Spaces</h3>
      <div className="space-y-2">
        {spaces.map((space, index) => (
          <SpaceCard key={index} space={space} />
        ))}
      </div>
    </div>
  )
}

export default SpaceList
