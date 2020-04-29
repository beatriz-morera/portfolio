import { useState, useEffect, useRef } from 'react'

export function useShowHeader() {
  const [show, setShow] = useState(true)
  const scrollY = useRef(0)
  useEffect(() => {
    function handler() {
      setShow(scrollY.current > window.scrollY)
      scrollY.current = window.scrollY
    }
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])
  return show
}
