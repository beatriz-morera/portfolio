import React from 'react'

import SEO from '../components/seo'

import { Sugar } from 'react-preloaders'
import { motion } from 'framer-motion'
import { container } from '../services/motion'

import Header from '../components/Header'
import Menu from '../components/Menu'
import HomeHero from '../components/HomeHero'
import Row from '../components/Row'
import About from '../containers/About'
import Contact from '../containers/Contact'
import Footer from '../components/Footer'

import classes from './Home.module.css'

const IndexPage = () => (
  <>
    <>
      <SEO title="Beatriz ML" />

      <Header />
      <Menu links={['About.', 'Portfolio.', 'Contact.']} />
      <motion.main
        variants={container}
        initial="exit"
        animate="enter"
        className={classes.container}
      >
        <HomeHero />
        <About />
        <Row title="About Cooking" />
        <Contact />
        <Footer />
      </motion.main>
    </>
    <Sugar background="#0f0f0f" color="white" customLoading={false} />
  </>
)

export default IndexPage
