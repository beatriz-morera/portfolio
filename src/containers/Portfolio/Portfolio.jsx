import React from 'react'

import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { motion } from 'framer-motion'

import ionicLogo from '../../images/ionic.png'
import cssLogo from '../../images/css.png'
import reactLogo from '../../images/react.png'
import reduxToolkitLogo from '../../images/redux-toolkit.png'
import typescriptLogo from '../../images/typescript.png'
import antLogo from '../../images/ant-design.png'
import sassLogo from '../../images/sass.png'
import javascriptLogo from '../../images/javascript.png'
import gatsbyLogo from '../../images/gatsby.png'
import motionLogo from '../../images/framer-motion.png'

import Row from '../../components/Row'
import Icon from '../../components/icon'
import Image from '../../components/image'

import classes from './Portfolio.module.css'

export default React.forwardRef((_, ref) => {
  const data = useStaticQuery(graphql`
    query {
      showsExplorerImage: file(
        relativePath: { eq: "shows-explorer-hero.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      surveyImage: file(relativePath: { eq: "survey-hero.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      aboutCookingImage: file(relativePath: { eq: "about-cooking-hero.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      galleryImage: file(relativePath: { eq: "gallery-hero.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      todayTodosImage: file(relativePath: { eq: "today-todos-hero.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      calorieCalculatorImage: file(
        relativePath: { eq: "calorie-calculator-hero.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      lyricsFinderImage: file(relativePath: { eq: "lyrics-finder-hero.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
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
        subtitle="TV shows explorer Web App Mobile Only"
        list={[
          <Icon name="Ionic" src={ionicLogo} />,
          <Icon name="CSS3" src={cssLogo} />,
          <Icon name="React" src={reactLogo} />,
          <Icon name="TypeScript" src={typescriptLogo} />,
        ]}
        link="https://github.com/beatriz-morera/shows-explorer"
        content={
          <motion.div
            className={classes.background1}
            whileHover={{ scale: 0.9, transition: { duration: 0.4 } }}
          >
            <Image>
              <Img fluid={data.showsExplorerImage.childImageSharp.fluid} />
            </Image>
          </motion.div>
        }
      />
      <Row
        title="HEI Social Responsibility"
        subtitle="Survey Platform"
        list={[
          <Icon name="Ant Design" src={antLogo} />,
          <Icon name="Sass" src={sassLogo} />,
          <Icon name="React" src={reactLogo} />,
          <Icon name="JavaScript" src={javascriptLogo} />,
        ]}
        showLink={false}
        content={
          <motion.div
            className={classes.background5}
            whileHover={{ scale: 0.9, transition: { duration: 0.4 } }}
          >
            <Image>
              <Img fluid={data.surveyImage.childImageSharp.fluid} />
            </Image>
          </motion.div>
        }
      />
      <Row
        title="About Cooking"
        subtitle="Recipe PWA Mobile Only"
        list={[
          <Icon name="Ionic" src={ionicLogo} />,
          <Icon name="CSS3" src={cssLogo} />,
          <Icon name="React" src={reactLogo} />,
          <Icon name="TypeScript" src={typescriptLogo} />,
          <Icon name="Redux Toolkit" src={reduxToolkitLogo} />,
        ]}
        link="https://github.com/beatriz-morera/about-cooking"
        content={
          <motion.div
            className={classes.background3}
            whileHover={{ scale: 0.9, transition: { duration: 0.4 } }}
          >
            <Image>
              <Img fluid={data.aboutCookingImage.childImageSharp.fluid} />
            </Image>
          </motion.div>
        }
      />
      <Row
        title="The Hummingbird Art Gallery"
        subtitle="Gallery Website"
        list={[
          <Icon name="Gatsby" src={gatsbyLogo} />,
          <Icon name="CSS3" src={cssLogo} />,
          <Icon name="React" src={reactLogo} />,
          <Icon name="JavaScript" src={javascriptLogo} />,
          <Icon name="Framer Motion" src={motionLogo} />,
        ]}
        link="https://github.com/beatriz-morera/gallery"
        content={
          <motion.div
            className={classes.background7}
            whileHover={{ scale: 0.9, transition: { duration: 0.4 } }}
          >
            <Image>
              <Img fluid={data.galleryImage.childImageSharp.fluid} />
            </Image>
          </motion.div>
        }
      />
      <Row
        title="Today Todos"
        subtitle="Todo list PWA Mobile Only"
        link="https://github.com/beatriz-morera/todo-app"
        list={[
          <Icon name="Ionic" src={ionicLogo} />,
          <Icon name="CSS3" src={cssLogo} />,
          <Icon name="React" src={reactLogo} />,
          <Icon name="TypeScript" src={typescriptLogo} />,
          <Icon name="Redux Toolkit" src={reduxToolkitLogo} />,
        ]}
        content={
          <motion.div
            className={classes.background4}
            whileHover={{ scale: 0.9, transition: { duration: 0.4 } }}
          >
            <Image>
              <Img fluid={data.todayTodosImage.childImageSharp.fluid} />
            </Image>
          </motion.div>
        }
      />
      <Row
        title="Daily Calorie Intake Calculator"
        subtitle="Calorie needs calculator"
        list={[
          <Icon name="CSS3" src={cssLogo} />,
          <Icon name="React" src={reactLogo} />,
          <Icon name="JavaScript" src={javascriptLogo} />,
        ]}
        link="https://github.com/beatriz-morera/calorie-calculator"
        content={
          <motion.div
            className={classes.background6}
            whileHover={{ scale: 0.9, transition: { duration: 0.4 } }}
          >
            <Image>
              <Img fluid={data.calorieCalculatorImage.childImageSharp.fluid} />
            </Image>
          </motion.div>
        }
      />
      <Row
        title="Lyrics Finder"
        subtitle="Lyrics PWA Mobile Only"
        list={[
          <Icon name="Ionic" src={ionicLogo} />,
          <Icon name="CSS3" src={cssLogo} />,
          <Icon name="React" src={reactLogo} />,
          <Icon name="TypeScript" src={typescriptLogo} />,
        ]}
        link="https://github.com/beatriz-morera/lyrics-finder"
        content={
          <motion.div
            className={classes.background2}
            whileHover={{ scale: 0.9, transition: { duration: 0.4 } }}
          >
            <Image>
              <Img fluid={data.lyricsFinderImage.childImageSharp.fluid} />
            </Image>
          </motion.div>
        }
      />
    </section>
  )
})
