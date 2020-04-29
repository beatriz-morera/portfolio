import React from 'react'

import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { motion } from 'framer-motion'
import { Parallax } from 'react-scroll-parallax'

import Row from '../../components/Row'
import classes from './Portfolio.module.css'

export default React.forwardRef((_, ref) => {
  const data = useStaticQuery(graphql`
    query {
      showsExplorerImage: file(
        relativePath: { eq: "shows-explorer-hero.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 3000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      lyricsFinderImage: file(relativePath: { eq: "lyrics-finder-hero.png" }) {
        childImageSharp {
          fluid(maxWidth: 3000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      aboutCookingImage: file(relativePath: { eq: "about-cooking-hero.png" }) {
        childImageSharp {
          fluid(maxWidth: 3000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      todayTodosImage: file(relativePath: { eq: "today-todos-hero.png" }) {
        childImageSharp {
          fluid(maxWidth: 3000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <section className={classes.portfolio} ref={ref}>
      <div className={classes.row}>
        <h5>Portfolio</h5>
        <h2>
          Latest <br /> work
        </h2>
      </div>
      <Row
        title="Shows Explorer"
        subtitle="TV shows finder & saver"
        link="https://github.com/beatriz-morera/shows-explorer"
        content={
          <motion.div
            className={classes.background1}
            whileHover={{ scale: [1, 0.9] }}
          >
            <motion.div whileHover={{ scale: [1, 1.2] }}>
              <Parallax y={[30, -30]}>
                <Img fluid={data.showsExplorerImage.childImageSharp.fluid} />
              </Parallax>
            </motion.div>
          </motion.div>
        }
      />
      <Row
        title="Lyrics Finder"
        subtitle="Lyrics finder & saver"
        link="https://github.com/beatriz-morera/lyrics-finder"
        content={
          <motion.div
            className={classes.background2}
            whileHover={{ scale: [1, 0.9] }}
          >
            <motion.div whileHover={{ scale: [1, 1.2] }}>
              <Parallax y={[30, -30]}>
                <Img fluid={data.lyricsFinderImage.childImageSharp.fluid} />
              </Parallax>
            </motion.div>
          </motion.div>
        }
      />
      <Row
        title="About Cooking"
        subtitle="Recipes finder & saver"
        link="https://github.com/beatriz-morera/about-cooking"
        content={
          <motion.div
            className={classes.background3}
            whileHover={{ scale: [1, 0.9] }}
          >
            <motion.div whileHover={{ scale: [1, 1.2] }}>
              <Parallax y={[30, -30]}>
                <Img fluid={data.aboutCookingImage.childImageSharp.fluid} />
              </Parallax>
            </motion.div>
          </motion.div>
        }
      />
      <Row
        title="Today Todos"
        subtitle="Todo list"
        link="https://github.com/beatriz-morera/todo-app"
        content={
          <motion.div
            className={classes.background4}
            whileHover={{ scale: [1, 0.9] }}
          >
            <motion.div whileHover={{ scale: [1, 1.2] }}>
              <Parallax y={[30, -30]}>
                <Img fluid={data.todayTodosImage.childImageSharp.fluid} />
              </Parallax>
            </motion.div>
          </motion.div>
        }
      />
    </section>
  )
})
