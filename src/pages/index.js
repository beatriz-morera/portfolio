import React from 'react'

import SEO from '../components/seo'

import { Sugar } from 'react-preloaders'
import { motion } from 'framer-motion'

import Header from '../components/Header'
import HomeHero from '../components/HomeHero'
import { container } from '../services/motion'
import classes from './Home.module.css'

const IndexPage = () => (
  <>
    <>
      <SEO title="Beatriz ML" />
      <Header />
      <motion.main
        variants={container}
        initial="exit"
        animate="enter"
        className={classes.container}
      >
        <HomeHero />
        <div className={classes.row}>
          <div className={classes.info}>
            <h1 className={classes.projectName}>About Cooking</h1>
            <p>View on GitHub</p>
          </div>
          <div className={classes.first}></div>
        </div>
        <div className={classes.row}>
          <div className={classes.info}>
            <h1 className={classes.projectName}>Lyrics Finder</h1>
            <p>View on GitHub</p>
          </div>
          <div className={classes.second}></div>
        </div>
        <div className={classes.row}>
          <div className={classes.info}>
            <h1 className={classes.projectName}>Shows Explorer</h1>
            <p>View on GitHub</p>
          </div>
          <div className={classes.third}></div>
        </div>
      </motion.main>
    </>
    <Sugar background="#0f0f0f" color="white" customLoading={false} />
  </>
)

export default IndexPage
