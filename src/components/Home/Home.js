import classes from './Home.module.css'
import code from './../../images/code.svg'
import binaryWorld from './../../images/binary-world.svg'

import {motion} from 'framer-motion'

function Home() {
  return (
    <motion.div 
      className={classes.Home} 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className={classes.Container}>
        <h1 className={classes.Heading}>Hello World!</h1>
        <h1>Welcome!</h1>
      </div>
      <img className={classes.Code} src={code} alt='Code' />
      <img className={classes.BinaryWorld} src={binaryWorld} alt='Binary World' />
    </motion.div>
  )
}

export default Home