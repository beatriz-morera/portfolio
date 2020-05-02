import React from 'react'

import InfoRow from '../../components/InfoRow'
import classes from './About.module.css'

export default React.forwardRef(({ scrollTo }, ref) => {
  return (
    <section ref={ref}>
      <InfoRow
        title1="About"
        title2="Skills"
        content1="I'm a twenty-five years old Front-End Developer living in Barcelona, Spain. I like to code things from scratch, and enjoy bringing ideas to life in the browser. I value simple content structure, clean design patterns, and thoughtful interactions."
        content2={
          <ul className={classes.list}>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Sass</li>
            <li>Ionic</li>
            <li>Ant Design</li>
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
        showHyperlink={false}
        actionLabel="Get in touch"
        scrollTo={scrollTo}
      />
    </section>
  )
})
