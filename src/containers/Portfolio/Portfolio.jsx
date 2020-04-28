import React from 'react'

import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Row from '../../components/Row'
import classes from './Portfolio.module.css'

export default React.forwardRef((_, ref) => {
  const data = useStaticQuery(graphql`
    query {
      showsExplorerImage: file(
        relativePath: { eq: "shows-explorer-hero.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      lyricsFinderImage: file(relativePath: { eq: "lyrics-finder-hero.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      aboutCookingImage: file(relativePath: { eq: "about-cooking-hero.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      todayTodosImage: file(relativePath: { eq: "today-todos-hero.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
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
          <div className={classes.background1}>
            <Img fluid={data.showsExplorerImage.childImageSharp.fluid} />
          </div>
        }
      />
      <Row
        title="Lyrics Finder"
        subtitle="Lyrics finder & saver"
        link="https://github.com/beatriz-morera/lyrics-finder"
        content={
          <div className={classes.background2}>
            <Img fluid={data.lyricsFinderImage.childImageSharp.fluid} />
          </div>
        }
      />
      <Row
        title="About Cooking"
        subtitle="Recipes finder & saver"
        link="https://github.com/beatriz-morera/about-cooking"
        content={
          <div className={classes.background3}>
            <Img fluid={data.aboutCookingImage.childImageSharp.fluid} />
          </div>
        }
      />
      <Row
        title="Today Todos"
        subtitle="Todo list"
        link="https://github.com/beatriz-morera/todo-app"
        content={
          <div className={classes.background4}>
            <Img fluid={data.todayTodosImage.childImageSharp.fluid} />
          </div>
        }
      />
    </section>
  )
})
