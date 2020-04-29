import React from 'react'
import { motion } from 'framer-motion'

import { useShowHeader } from '../../hooks/scroll'
import { scrollToTop } from '../../services/scroll'
import classes from './Header.module.css'

const Header = ({ items = [] }) => {
  const showHeader = useShowHeader()

  return (
    <motion.header
      className={classes.container}
      animate={{ opacity: showHeader ? 1 : 0 }}
      initial={{ opacity: 0 }}
      transition={{ opacity: { duration: 0.3 } }}
    >
      <h1 className={classes.title} onClick={scrollToTop}>
        BML
      </h1>
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
