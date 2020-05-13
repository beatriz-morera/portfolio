import React from 'react'

import { motion } from 'framer-motion'
import { Parallax } from 'react-scroll-parallax'

const Image = ({ children }) => {
  return (
    <motion.div whileHover={{ scale: 1.2, transition: { duration: 0.4 } }}>
      <Parallax y={[30, -30]}>{children}</Parallax>
    </motion.div>
  )
}

export default Image
