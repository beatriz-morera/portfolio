import React from 'react'

import classes from './Header.module.css'

const Header = () => {
  return (
    <header className={classes.container}>
      <h1 className={classes.title}>BML</h1>
      <ul className={classes.menu}>
        <li>About</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
    </header>
  )
}

export default Header
