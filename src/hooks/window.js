import { useEffect, useState } from 'react'

const getWindowsSize = () => ({
  width: window.innerWidth,
  height: window.innerHeight,
})

export function useWindowsSize() {
  const [size, setSize] = useState(getWindowsSize())

  const onResize = () => setSize(getWindowsSize())

  useEffect(() => {
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return size
}
