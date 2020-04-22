import React from 'react'

import classes from './Row.module.css'

const Row = ({ title }) => {
  return (
    <div className={classes.row}>
      <div className={classes.info}>
        <h1 className={classes.title}>{title}</h1>
        <p>View on GitHub</p>
      </div>
      <div className={classes.rightCol}></div>
    </div>
  )
}

export default Row
