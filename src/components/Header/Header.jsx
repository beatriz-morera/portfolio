import React from 'react'

import classes from './Header.module.css'

const Header = () => {
  return (
    <header className={classes.container}>
      <h1 className={classes.title}>BML</h1>
      <ul className={classes.menu}>
        <li className={classes.item}>About</li>
        <li className={classes.item}>Portfolio</li>
        <li className={classes.item}>Contact</li>
      </ul>
    </header>
  )
}

export default Header
