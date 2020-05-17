import React, { useRef } from 'react'

import SEO from '../components/seo'

import { ParallaxProvider } from 'react-scroll-parallax'
import { motion } from 'framer-motion'
import { container } from '../services/motion'

import { useIsLandscape } from '../hooks/window'

import Header from '../components/Header'
import Menu from '../components/Menu'
import HomeHero from '../components/HomeHero'
import About from '../containers/About'
import Portfolio from '../containers/Portfolio'
import Contact from '../containers/Contact'
import Footer from '../components/Footer'

import rotateIcon from '../images/rotate-phone.png'
import classes from './index.module.css'

const scrollToRef = ref => window.scrollTo(0, ref.current.offsetTop - 110)

const IndexPage = () => {
  const display = useIsLandscape()

  const aboutRef = useRef(null)
  const portfolioRef = useRef(null)
  const contactRef = useRef(null)

  return (
    <ParallaxProvider>
      {display ? (
        <>
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
        </>
      ) : (
        <div className={classes.error}>
          <img src={rotateIcon} alt="rotate your device" />
          <p>This site is not available in landscape mode.</p>
          <span>Please rotate your device.</span>
        </div>
      )}
    </ParallaxProvider>
  )
}

export default IndexPage
