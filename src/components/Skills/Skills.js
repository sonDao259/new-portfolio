import classes from './Skills.module.css'
import PagesHeader from '../PagesHeader/PagesHeader'
import codeThinking from '../../images/codeThinking.svg'

import {motion} from 'framer-motion'

const listTitleStyle = {
  fontWeight: 900,
  marginBottom: '8px',
}

const frontendSkills = 
  <ul>
    <li style={listTitleStyle}>FRONT-END</li>
    <li>Html - Css - JavaScript</li>
    <li>React JS</li>
  </ul>

const otherSkills = 
  <ul>
    <li  style={listTitleStyle}>OTHER</li>
    <li>Git - Teamwork - Sociable</li>
  </ul>

const totalSkills = [frontendSkills, otherSkills]

function Skills() {
  return (
    <motion.div 
      className={classes.Skills}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <PagesHeader title={'My Skills'}/>
      <p>I love website interface design. It makes me feel so excited. 
          I have a good self-study ability 
          and am passionate about learning new technologies</p>
      <div className={classes.Container}>
        <img src={codeThinking} alt="Code Thinking" />
        {totalSkills.map((skills, index) => {
          return (
            <div className={classes.List} key = {index}>
              {skills}
            </div>
          )
        })}
      </div>
    </motion.div>
  )
}

export default Skills