import React, { useEffect, useRef } from 'react'
import { motion, useCycle } from 'framer-motion'

import MenuToggle from './menu-toggle'
import Navigation from './navigation'

import classes from './index.module.css'

export const useDimensions = ref => {
  const dimensions = useRef({ width: 0, height: 0 })

  useEffect(() => {
    dimensions.current.width = ref.current.offsetWidth
    dimensions.current.height = ref.current.offsetHeight
  }, [ref])

  return dimensions.current
}

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 100% 0px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: `circle(80px at 100% 0px)`,
    transition: {
      delay: 0.2,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
}

export default ({ links = [] }) => {
  const [isOpen, toggleOpen] = useCycle(false, true)
  const containerRef = useRef(null)
  const { height } = useDimensions(containerRef)

  return (
    <motion.nav
      className={classes.nav}
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      custom={height}
      ref={containerRef}
    >
      <motion.div className={classes.background} variants={sidebar} />
      <Navigation links={links} close={() => toggleOpen()} />
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  )
}
