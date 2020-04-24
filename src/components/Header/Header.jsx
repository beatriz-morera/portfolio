import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import classes from './Header.module.css'

function useShowHeader() {
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

const Header = ({ items = [] }) => {
  const showHeader = useShowHeader()

  return (
    <motion.header
      className={classes.container}
      animate={{ opacity: showHeader ? 1 : 0 }}
      initial={{ opacity: 0 }}
      transition={{ opacity: { duration: 0.3 } }}
    >
      <h1 className={classes.title}>BML</h1>
      <ul className={classes.menu}>
        {items.map(([title, clickHandlder]) => (
          <li key={title} className={classes.item} onClick={clickHandlder}>
            {title}
          </li>
        ))}
      </ul>
    </motion.header>
  )
}

export default Header
