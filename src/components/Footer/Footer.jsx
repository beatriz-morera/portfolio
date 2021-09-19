import React from 'react'

import classes from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.copyright}>BeatrizML©2020</div>
      <a
        href="https://1drv.ms/b/s!AtVfglJsBuRfgRKL-GMb0JIhtOKg?e=M2neaH"
        target="_blank"
        rel="noopener noreferrer"
      >
        Download CV
      </a>
    </footer>
  )
}

export default Footer
