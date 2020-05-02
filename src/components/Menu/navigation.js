import React, { useCallback } from 'react'

import { motion } from 'framer-motion'
import {
  GithubFilled,
  LinkedinFilled,
  DribbbleOutlined,
} from '@ant-design/icons'

import { scrollToTop } from '../../services/scroll'
import MenuItem from './menu-item'

import classes from './navigation.module.css'

const variants = {
  open: {
    opacity: 1,
  },
  closed: {
    opacity: 0,
  },
}

export default ({ links = [], close }) => {
  const scrollHandler = useCallback(() => {
    scrollToTop()
    close()
  }, [close])
  return (
    <>
      <motion.div variants={variants} className={classes.line}>
        <motion.h1 variants={variants} onClick={scrollHandler}>
          BML
        </motion.h1>
        <motion.a
          href="mailto:morerabeatriz@outlook.com"
          className={classes.email}
          variants={variants}
        >
          morerabeatriz@outlook.com
        </motion.a>
      </motion.div>
      <motion.div variants={variants} className={classes.container}>
        <motion.ul className={classes.list} variants={variants}>
          {links.map(([title, clickHandler]) => (
            <MenuItem
              key={title}
              title={title}
              onSelect={clickHandler}
              onClose={close}
            />
          ))}
          <motion.div className={classes.socialContainer} variants={variants}>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/beatriz-morera-l%C3%B3pez-2a53441a3/"
              rel="noopener noreferrer"
            >
              <LinkedinFilled className={classes.icon} />
            </a>
            <a
              target="_blank"
              href="https://dribbble.com/beatriz-morera"
              rel="noopener noreferrer"
            >
              <DribbbleOutlined className={classes.icon} />
            </a>
            <a
              target="_blank"
              href="https://github.com/beatriz-morera"
              rel="noopener noreferrer"
            >
              <GithubFilled className={classes.icon} />
            </a>
          </motion.div>
        </motion.ul>
      </motion.div>
    </>
  )
}
