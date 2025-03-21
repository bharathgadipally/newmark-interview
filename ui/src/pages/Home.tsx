import { useFetch } from '../hooks/useFetch'
import PropertyList from '../components/PropertyList'
import { useState, useEffect } from 'react'
import { Property } from 'types/property'

const Home = () => {
  const { data, loading, error } = useFetch() as {
    data: Property[]
    loading: boolean
    error: unknown
  }
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear())

  useEffect(() => {
    setCurrentYear(new Date().getFullYear())
  }, [])

  return (
    <div className="mx-auto flex min-h-screen max-w-screen-xl flex-col px-4 py-8 md:px-8 md:py-16">
      <header className="mb-12 text-center">
        <div className="mx-auto max-w-2xl">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Property Explorer
          </h1>
          <p className="mt-4 text-gray-600">
            Browse and explore property data with detailed information on
            spaces, features, and rent.
          </p>
        </div>
      </header>

      <main className="flex-1">
        {loading ? (
          <div className="space-y-4">
            {[1, 2].map((i) => (
              <div
                key={i}
                className="animate-pulse space-y-4 rounded-xl border p-6"
              >
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-full bg-gray-300"></div>
                  <div className="h-8 w-56 rounded bg-gray-300"></div>
                </div>
              </div>
            ))}
          </div>
        ) : error ? (
          <div className="flex flex-col items-center justify-center rounded-xl border border-red-200 bg-red-50 p-12 text-center">
            <div className="size-10 text-red-500">🚫</div>{' '}
            {/* Placeholder for an error icon */}
            <h3 className="mt-4 text-xl font-medium">
              Failed to load properties
            </h3>
            <p className="mt-2 text-gray-600">
              Please try again later or contact support.
            </p>
          </div>
        ) : data ? (
          <PropertyList properties={data} />
        ) : (
          <div className="flex flex-col items-center justify-center rounded-xl border p-12 text-center">
            <h3 className="text-xl font-medium">No properties found</h3>
            <p className="mt-2 text-gray-600">
              There are no properties available at the moment.
            </p>
          </div>
        )}
      </main>

      <footer className="mt-12 text-center text-sm text-gray-500">
        <p>© {currentYear} Property Explorer. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Home
