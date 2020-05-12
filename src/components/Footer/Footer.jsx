import React from 'react'

import classes from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.copyright}>BeatrizML©2020</div>
      <a
        href="https://1drv.ms/b/s!AtVfglJsBuRfbgg0NNfwMbMPisk"
        target="_blank"
        rel="noopener noreferrer"
      >
        Download CV
      </a>
    </footer>
  )
}

export default Footer
