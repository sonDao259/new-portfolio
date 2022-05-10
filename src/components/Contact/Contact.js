import {FaPhone, FaInstagramSquare, FaGithub, FaArrowUp} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'
import classes from './Contact.module.css'

function Contact() {

  const handleClick = e => {
    e.preventDefault()
    document.body.scrollTop = 0 
    document.documentElement.scrollTop = 0
  }

  return (
    <div id='contact' className={classes.Contact}>
      <div className={classes.Arrow}>
        <a href='' onClick={handleClick}>
          <FaArrowUp color='#fff' size='30px'/>
        </a>
      </div>
      <div className={classes.ContactIcons}>
        <a href='tel:+84943209560'>
          <FaPhone color='#fff' size='30px' />
        </a>
        <a href='https://github.com/sonDao259' target='_blank'>
          <FaGithub color='#fff' size='30px' />
        </a>
        <a href='mailto:daohoangson560@gmail.com' target='_blank'>
          <MdEmail color='#fff' size='30px' />
        </a>
      </div>
    </div>
  )
}

export default Contact