import React from 'react'

import classes from './Header.module.css'

const Header = ({ items = [] }) => {
  return (
    <header className={classes.container}>
      <h1 className={classes.title}>BML</h1>
      <ul className={classes.menu}>
        {items.map(([title, clickHandlder]) => (
          <li key={title} className={classes.item} onClick={clickHandlder}>
            {title}
          </li>
        ))}
      </ul>
    </header>
  )
}

export default Header
