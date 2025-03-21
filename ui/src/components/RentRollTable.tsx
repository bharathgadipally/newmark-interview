import { RentRoll as RentRollType } from '../types/property'

interface RentRollTableProps {
  rentRoll: RentRollType[]
}

const RentRollTable = ({ rentRoll }: RentRollTableProps) => {
  if (!rentRoll.length) return null

  return (
    <div className="max-h-[150px] w-full overflow-y-auto rounded-md border">
      <table className="w-full min-w-full border-collapse">
        {/* Table Header */}
        <thead className="sticky top-0 border-b bg-gray-100 shadow-sm">
          <tr>
            <th className="whitespace-nowrap px-4 py-2 text-left text-xs font-medium text-gray-600">
              Month
            </th>
            <th className="whitespace-nowrap px-4 py-2 text-right text-xs font-medium text-gray-600">
              Amount
            </th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {rentRoll.map((rent, index) => (
            <tr key={index} className="border-b transition hover:bg-gray-50">
              <td className="px-4 py-2 text-left text-sm">{rent.month}</td>
              <td className="px-4 py-2 text-right text-sm font-medium">
                ${rent.amount.toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default RentRollTable
