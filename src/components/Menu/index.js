import React from 'react'
import { motion, useCycle } from 'framer-motion'

import MenuToggle from './menu-toggle'
import Navigation from './navigation'

import classes from './index.module.css'

const sidebar = {
  open: {
    clipPath: `circle(110% at 100% 0px)`,
    width: '100%',
    height: '100%',
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 10,
    },
  },
  closed: {
    clipPath: `circle(80px at 100% 0px)`,
    width: '80px',
    height: '80px',
    transition: {
      delay: 0.2,
      type: 'spring',
      stiffness: 100,
      damping: 20,
    },
  },
}

export default ({ links = [] }) => {
  const [isOpen, toggleOpen] = useCycle(false, true)

  return (
    <motion.nav
      className={classes.nav}
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
    >
      <motion.div className={classes.background} variants={sidebar}>
        <Navigation links={links} close={() => toggleOpen()} />
      </motion.div>

      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  )
}
