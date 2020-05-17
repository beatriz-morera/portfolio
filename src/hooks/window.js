import { useEffect, useState } from 'react'

const getWindowsSize = () => {
  if (typeof window === 'undefined') {
    return {
      width: 0,
      height: 0,
    }
  }
  return {
    width: window.innerWidth,
    height: window.innerHeight,
  }
}

export function useWindowsSize() {
  const [size, setSize] = useState(getWindowsSize())

  const onResize = () => setSize(getWindowsSize())

  useEffect(() => {
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return size
}

export function useIsLandscape() {
  const [display, setDisplay] = useState(true)
  const { width, height } = useWindowsSize()

  useEffect(() => {
    if (width > height && height < 600) {
      setDisplay(false)
    } else {
      setDisplay(true)
    }
  }, [width, height])

  return display
}
