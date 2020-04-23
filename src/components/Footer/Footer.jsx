import React from 'react'

import classes from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.copyright}>BeatrizML©2020</div>
      <button>Download CV</button>
    </footer>
  )
}

export default Footer
