import React from 'react'

import classes from './icon.module.css'

const Icon = ({ name, src }) => {
  return (
    <div className={classes.listItem}>
      <img src={src} className={classes.logo} alt={name} />
      <p>{name}</p>
    </div>
  )
}

export default Icon
