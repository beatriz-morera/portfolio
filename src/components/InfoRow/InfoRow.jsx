import React from 'react'

import { motion } from 'framer-motion'
import { ArrowRightOutlined } from '@ant-design/icons'

import classes from './InfoRow.module.css'

const InfoRow = ({
  title1,
  title2,
  content1,
  content2,
  actionLabel,
  link,
  scrollTo,
  showHyperlink = true,
}) => {
  return (
    <div className={classes.row}>
      <div className={classes.leftCol}>
        <h5 className={classes.title}>{title1}</h5>
        <div className={classes.content}>{content1}</div>
        <div className={classes.divider}></div>
      </div>
      <div className={classes.rightCol}>
        <h5 className={classes.title}>{title2}</h5>
        <div>{content2}</div>
        {showHyperlink ? (
          <a
            target="_blank"
            rel="noopener noreferrer"
            className={classes.hyperlinkContainer}
            href={link}
          >
            <motion.div
              whileHover={{
                marginRight: '25px',
                marginLeft: '25px',
                transition: { duration: 0.4 },
              }}
            >
              <p>{actionLabel}</p>
              <ArrowRightOutlined />
            </motion.div>
          </a>
        ) : (
          <div
            className={classes.scrollToContainer}
            onClick={scrollTo}
            role="button"
            tabIndex={0}
          >
            <motion.div
              whileHover={{
                marginRight: '25px',
                marginLeft: '25px',
                transition: { duration: 0.4 },
              }}
            >
              <p>{actionLabel}</p>
              <ArrowRightOutlined />
            </motion.div>
          </div>
        )}
      </div>
    </div>
  )
}

export default InfoRow
