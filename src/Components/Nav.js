import { NavLink } from 'react-router-dom'
import logo from '../add.png'

function Nav() {
  return (
    <nav>
      <div className='logo'>
        <img src={logo} alt='logo' /> Dashboard
      </div>
      <div className='nav-links'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/item'>New Item</NavLink>
      </div>
      <div className='copyright'>&copy; Lily</div>
    </nav>
  )
}

export default Nav
