import PagesHeader from '../PagesHeader/PagesHeader'
import classes from './About.module.css'
import {motion} from 'framer-motion'

import me from '../../images/me.png'

function About() {
  return (
    <motion.div 
      className={classes.About}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <PagesHeader title={'About'}/>
      <div className={classes.Container}>
        <div className={classes.Text}>
          <h2>My name is Dao Hoang Son</h2>
          <p>
            I am a Front-end programmer
          </p>
        </div>
        <div className={classes.Photo}>
          <img className={classes.Me} src={me} alt="Me" />
        </div>
      </div>
    </motion.div>
  )
}

export default About