import React from 'react'

import { ArrowRightOutlined } from '@ant-design/icons'

import classes from './InfoRow.module.css'

const InfoRow = ({ title1, title2, content1, content2, actionLabel }) => {
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
        <a className={classes.actionContainer}>
          <p>{actionLabel}</p>
          <ArrowRightOutlined />
        </a>
      </div>
    </div>
  )
}

export default InfoRow
