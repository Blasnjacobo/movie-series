import { useState } from 'react'

export function useLocalStorage (key, initialvalue) {
  const [storeValue, setStorevalue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialvalue
    } catch (error) {
      return initialvalue
    }
  })

  const setValue = value => {
    try {
      setStorevalue(value)
      window.localStorage.getItem(key, (value))
    } catch (error) {
      console.error(error)
    }
  }
  return [storeValue, setValue]
}
