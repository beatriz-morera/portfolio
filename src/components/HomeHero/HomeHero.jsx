import React from 'react'

import Typical from 'react-typical'
import { motion } from 'framer-motion'
import { rightEnter, bottomEnter } from '../../services/motion'
import { ArrowDownOutlined } from '@ant-design/icons'

import classes from './HomeHero.module.css'

const HomeHero = () => {
  return (
    <section className={classes.homeHero}>
      <div className={classes.row}>
        <motion.div className={classes.greetings} variants={rightEnter}>
          <p>HELLO!</p>
          <Typical steps={['', 1000, "I'm Beatriz", 10000]} wrapper="h1" />
        </motion.div>
        <div className={classes.intro}>
          <motion.h1 variants={rightEnter} className={classes.title}>
            Front-end
          </motion.h1>

          <motion.h1 className={classes.subtitle} variants={bottomEnter}>
            Developer
          </motion.h1>
        </div>
      </div>
      <motion.div className={classes.divider} variants={bottomEnter}>
        <p>Scroll</p>
        <ArrowDownOutlined />
      </motion.div>
    </section>
  )
}

export default HomeHero
