import classes from './Projects.module.css'
import PagesHeader from '../PagesHeader/PagesHeader'
import musicPlayer from '../../images/projects/music-player.png'
import recipes from '../../images/projects/recipes-app.png'
import shopee from '../../images/projects/shopee.png'
import theband from '../../images/projects/theband.png'
import todoApp from '../../images/projects/todo-app.png'

import { motion } from "framer-motion"

const content = (url, thumbnail, description) => {
  return (
    <motion.div 
      className={classes.contentContainer}
      whileHover={{scale: 1.1}}
    >
      <div className={classes.Thumbnail}>
        <img src={thumbnail} alt='Project image' />
      </div>
      <div className={classes.Text}>
        <p>{description}</p>
      </div>
      <div className={classes.Button}>
        <a href={url} target='_blank'>Check out</a>
      </div>
    </motion.div>
  )
}

function Projects() {
  return (
    <motion.div 
      className={classes.Projects}
      initial={{opacity: 0}}
      animate={{opacity: 1}}
    >
      <PagesHeader title={'Projects'}/>
      <div className={classes.ProjectItem}>
        <div className={classes.Paragraph}>
          <p>
            Visit my some projects
          </p>
        </div>
        <div className={classes.Content}>
          {content('https://capable-pastelito-28d8bf.netlify.app/', recipes, 'Recipe app')}
          {content('https://sondao259.github.io/music-player/', musicPlayer, 'Music player')}
          {content('https://grand-hamster-72ab05.netlify.app/', todoApp, 'Todo app')}
          {content('https://sondao259.github.io/the-band/', theband, 'W3 - The Band')}
          {content('https://sondao259.github.io/ShopeeClone/', shopee, 'Shopee Home')}
        </div>
      </div>
    </motion.div>
  )
}

export default Projects