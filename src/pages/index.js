import React from 'react'

import SEO from '../components/seo'

import { Sugar } from 'react-preloaders'
import { motion } from 'framer-motion'
import { container } from '../services/motion'

import Header from '../components/Header'
import Menu from '../components/Menu'
import HomeHero from '../components/HomeHero'
import Row from '../components/Row'
import InfoRow from '../components/InfoRow'

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
        <InfoRow
          title1="About"
          title2="Skills"
          content1="I'm a twenty-five years old Front-End Developer living in Barcelona, Spain. I like to code things from scratch, and enjoy bringing ideas to life in the browser. I value simple content structure, clean design patterns, and thoughtful interactions."
          content2={
            <ul className={classes.list}>
              <li>HTML</li>
              <li>CSS</li>
              <li>Sass</li>
              <li>Ionic</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>React</li>
              <li>Redux Toolkit</li>
              <li>Gatsby</li>
              <li>Git</li>
              <li>Jest</li>
              <li>Netlify</li>
              <li>UI Design</li>
              <li>Photoshop</li>
            </ul>
          }
          actionLabel="Get in touch"
        />
        <Row title="About Cooking" />
        <Row title="Lyrics Finder" />
        <Row title="Shows Explorer" />
        <Row title="Calorie Calculator" />
      </motion.main>
    </>
    <Sugar background="#0f0f0f" color="white" customLoading={false} />
  </>
)

export default IndexPage
