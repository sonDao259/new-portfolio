import classes from './NavBar.module.css'
import {Link} from 'react-router-dom'

function NavBar() {
  return (
    <div className={classes.NavBar}>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/skills'>Skills</Link>
          </li>
          <li>
            <Link to='/projects'>Projects</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar