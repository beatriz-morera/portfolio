import React from 'react'

import { ArrowRightOutlined } from '@ant-design/icons'

import classes from './Row.module.css'

const Row = ({ title, subtitle, content, link }) => {
  return (
    <div className={classes.row}>
      <div className={classes.info}>
        <div>
          <h1 className={classes.title}>{title}</h1>
          <p className={classes.subtitle}>{subtitle}</p>
        </div>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className={classes.actionContainer}
          href={link}
        >
          <p>View on GitHub</p>
          <ArrowRightOutlined />
        </a>
      </div>
      <div className={classes.rightCol}>{content}</div>
    </div>
  )
}

export default Row
