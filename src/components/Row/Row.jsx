import React from 'react'

import { motion } from 'framer-motion'
import { ArrowRightOutlined } from '@ant-design/icons'

import classes from './Row.module.css'

const Row = ({ title, subtitle, list = [], content, link }) => {
  return (
    <div className={classes.row}>
      <div className={classes.info}>
        <div>
          <h1 className={classes.title}>{title}</h1>
          <p className={classes.subtitle}>{subtitle}</p>
          <ul className={classes.list}>
            {list && list.map((el, index) => <li key={index}>{el}</li>)}
          </ul>
        </div>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className={classes.actionContainer}
          href={link}
        >
          <motion.div
            whileHover={{
              marginRight: '25px',
              marginLeft: '25px',
              transition: { duration: 0.4 },
            }}
          >
            <p>View on GitHub</p>
            <ArrowRightOutlined />
          </motion.div>
        </a>
      </div>
      <div className={classes.rightCol}>{content}</div>
    </div>
  )
}

export default Row
