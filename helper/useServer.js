import { useState, useEffect } from 'react'

export default function useServer () {
  const [isServer, setIsServer] = useState(true);
  useEffect(() => {
    setIsServer(false)
  }, [])
  return isServer
}