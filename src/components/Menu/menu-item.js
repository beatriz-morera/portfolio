import * as React from 'react'
import { motion } from 'framer-motion'

import classes from './menu-item.module.css'

export default ({ title, onSelect, onClose }) => {
  const clickHandler = React.useCallback(() => {
    onSelect()
    onClose()
  }, [onSelect, onClose])
  return (
    <motion.li
      onClick={clickHandler}
      className={classes.item}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className={classes.textPlaceholder}>{title}</div>
    </motion.li>
  )
}
