import React from "react"

import classes from "./Header.module.css"

const Header = () => {
  return (
    <header className={classes.container}>
      <div className={classes.title}>
        <h1>BML</h1>
      </div>
      <ul className={classes.menu}>
        <li>About</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
    </header>
  )
}

export default Header
