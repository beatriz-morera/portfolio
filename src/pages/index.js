import React, { useRef } from 'react'

import SEO from '../components/seo'

import { ParallaxProvider } from 'react-scroll-parallax'
import { motion } from 'framer-motion'
import { container } from '../services/motion'

import Header from '../components/Header'
import Menu from '../components/Menu'
import HomeHero from '../components/HomeHero'
import About from '../containers/About'
import Portfolio from '../containers/Portfolio'
import Contact from '../containers/Contact'
import Footer from '../components/Footer'

import classes from './index.module.css'

const scrollToRef = ref => window.scrollTo(0, ref.current.offsetTop - 110)

const IndexPage = () => {
  const aboutRef = useRef(null)
  const portfolioRef = useRef(null)
  const contactRef = useRef(null)

  return (
    <ParallaxProvider>
      <SEO />
      <Header
        items={[
          ['About', () => scrollToRef(aboutRef)],
          ['Portfolio', () => scrollToRef(portfolioRef)],
          ['Contact', () => scrollToRef(contactRef)],
        ]}
      />
      <Menu
        links={[
          ['About.', () => scrollToRef(aboutRef)],
          ['Portfolio.', () => scrollToRef(portfolioRef)],
          ['Contact.', () => scrollToRef(contactRef)],
        ]}
      />
      <motion.main
        variants={container}
        initial="exit"
        animate="enter"
        className={classes.container}
      >
        <HomeHero />
        <About ref={aboutRef} scrollTo={() => scrollToRef(contactRef)} />
        <Portfolio ref={portfolioRef} />
        <Contact ref={contactRef} />
        <Footer />
      </motion.main>
    </ParallaxProvider>
  )
}

export default IndexPage
