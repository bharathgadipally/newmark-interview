interface FeaturesListProps {
  title: string
  items: string[]
  className?: string
  badgeVariant?: 'default' | 'secondary' | 'outline' | 'destructive'
}

const FeaturesList = ({
  title,
  items,
  className,
  badgeVariant = 'default'
}: FeaturesListProps) => {
  if (!items.length) return null

  const badgeStyles = {
    default: 'bg-blue-500 text-white',
    secondary: 'bg-gray-200 text-gray-700',
    outline: 'border border-gray-500 text-gray-700',
    destructive: 'bg-red-500 text-white'
  }

  return (
    <div className={`space-y-2 ${className}`}>
      <h4 className="text-sm font-medium text-gray-600">{title}</h4>
      <div className="flex flex-wrap gap-2">
        {items.map((item, index) => (
          <span
            key={index}
            className={`rounded-full px-3 py-1 text-sm ${badgeStyles[badgeVariant]}`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

export default FeaturesList
