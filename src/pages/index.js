import React from "react"
import Typical from "react-typical"
import { Sugar } from "react-preloaders"
import { motion } from "framer-motion"
import SEO from "../components/seo"

import Header from "../components/Header"
import { container, item, rightEnter, bottomEnter } from "../services/motion"
import classes from "./Home.module.css"

const IndexPage = () => (
  <>
    <SEO title="Beatriz ML" />
    <Header />
    <motion.main
      variants={container}
      initial="exit"
      animate="enter"
      className={classes.container}
    >
      <section className={classes.introduction}>
        <div className={classes.introductionRow}>
          <motion.div className={classes.greetings} variants={rightEnter}>
            <p>HELLO!</p>
            <Typical steps={["", 4000, "I'm Beatriz", 10000]} wrapper="h1" />
          </motion.div>
          <div className={classes.intro}>
            <motion.div
              className={classes.titleContainer}
              variants={rightEnter}
            >
              <h1 className={classes.preposition}>a</h1>
              <h1 className={classes.title}>Front-end</h1>
            </motion.div>
            <motion.h1 className={classes.subtitle} variants={bottomEnter}>
              Developer
            </motion.h1>
          </div>
        </div>
        <motion.div
          className={classes.divider}
          variants={bottomEnter}
        ></motion.div>
      </section>
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
    <Sugar background="#0f0f0f" color="white" customLoading={false} />
  </>
)

export default IndexPage
