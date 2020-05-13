import React from 'react'

import InfoRow from '../../components/InfoRow'
import Icon from '../../components/icon'

import ionicLogo from '../../images/ionic.png'
import cssLogo from '../../images/css.png'
import reactLogo from '../../images/react.png'
import reduxToolkitLogo from '../../images/redux-toolkit.png'
import typescriptLogo from '../../images/typescript.png'
import antLogo from '../../images/ant-design.png'
import sassLogo from '../../images/sass.png'
import javascriptLogo from '../../images/javascript.png'
import gitLogo from '../../images/git.png'
import netlifyLogo from '../../images/netlify.png'
import gatsbyLogo from '../../images/gatsby.png'
import jestLogo from '../../images/jest.png'
import photoshopLogo from '../../images/photoshop.png'
import html5Logo from '../../images/html5.png'
import uiLogo from '../../images/ui.png'

import classes from './About.module.css'

export default React.forwardRef(({ scrollTo }, ref) => {
  return (
    <section ref={ref}>
      <InfoRow
        title1="About"
        title2="Skills"
        content1="I'm a twenty-five years old Front-End Developer living in Barcelona, Spain. I like to code things from scratch, and enjoy bringing ideas to life in the browser. I value simple content structure, clean design patterns, and thoughtful interactions."
        content2={
          <div className={classes.list}>
            <Icon name="HTML5" src={html5Logo} />
            <Icon name="CSS3" src={cssLogo} />
            <Icon name="Sass" src={sassLogo} />
            <Icon name="Ionic" src={ionicLogo} />
            <Icon name="Ant Design" src={antLogo} />
            <Icon name="UI" src={uiLogo} />
            <Icon name="JavaScript" src={javascriptLogo} />
            <Icon name="TypeScript" src={typescriptLogo} />
            <Icon name="React" src={reactLogo} />
            <Icon name="Redux Toolkit" src={reduxToolkitLogo} />
            <Icon name="Gatsby" src={gatsbyLogo} />
            <Icon name="Git" src={gitLogo} />
            <Icon name="Jest" src={jestLogo} />
            <Icon name="Netlify" src={netlifyLogo} />
            <Icon name="Photoshop" src={photoshopLogo} />
          </div>
        }
        showHyperlink={false}
        actionLabel="Get in touch"
        scrollTo={scrollTo}
      />
    </section>
  )
})
