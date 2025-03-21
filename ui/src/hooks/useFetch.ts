import { useState, useEffect } from 'react'
import { fetchData } from '../api/fetchData'

export const useFetch = () => {
  const [data, setData] = useState<unknown[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchData()
        setData(result)
      } catch (err) {
        setError('Failed to fetch data')
      } finally {
        setLoading(false)
      }
    }
    getData()
  }, [])

  return { data, loading, error }
}
