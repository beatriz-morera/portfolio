import * as React from "react"
import { motion } from "framer-motion"

import classes from "./menu-item.module.css"

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
}

export default ({ title }) => {
  return (
    <motion.li
      className={classes.item}
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className={classes.textPlaceholder}>{title}</div>
    </motion.li>
  )
}
