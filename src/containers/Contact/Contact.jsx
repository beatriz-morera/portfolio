import React from 'react'

import {
  GithubFilled,
  LinkedinFilled,
  DribbbleOutlined,
} from '@ant-design/icons'

import InfoRow from '../../components/InfoRow'
import classes from './Contact.module.css'

export default React.forwardRef((_, ref) => {
  return (
    <section ref={ref}>
      <InfoRow
        title1="Contact"
        title2="Connect"
        content1={
          <p className={classes.contact}>
            Interested in discussing a project or partnership? Simply want to
            have a chat? You'll find me in Barcelona, Spain — call{' '}
            <a href="tel:+34655686927">+34 6 556 869 27</a> or email me at{' '}
            <a href="mailto:morerabeatriz@outlook.com">
              morerabeatriz@outlook.com
            </a>
            .
          </p>
        }
        content2={
          <div className={classes.socialContainer}>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/beatriz-morera-l%C3%B3pez-2a53441a3/"
              rel="noopener noreferrer"
            >
              <LinkedinFilled className={classes.icon} />
            </a>
            <a
              target="_blank"
              href="https://dribbble.com/beatriz-morera"
              rel="noopener noreferrer"
            >
              <DribbbleOutlined className={classes.icon} />
            </a>
            <a
              target="_blank"
              href="https://github.com/beatriz-morera"
              rel="noopener noreferrer"
            >
              <GithubFilled className={classes.icon} />
            </a>
          </div>
        }
        actionLabel="Email me"
        link="mailto:morerabeatriz@outlook.com"
      />
    </section>
  )
})
