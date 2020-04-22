import React from 'react'

import Row from '../../components/Row'
import classes from './Portfolio.module.css'

const Portfolio = () => {
  return (
    <section>
      <div className={classes.row}>
        <h5>Portfolio</h5>
        <h2>
          Latest <br /> work
        </h2>
      </div>
      <Row title="About Cooking" />
    </section>
  )
}

export default Portfolio
