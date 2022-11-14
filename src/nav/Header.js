import { NavLink, useNavigate } from 'react-router-dom';
import {signOut} from 'firebase/auth'
import {auth} from "../index"

function Header(props) {

  const nav = useNavigate();
  
  const handleLogout = (e) => {
    // implement logout logic
    signOut(auth)
    localStorage.clear()
    console.log('logout')
    nav('/')
  }

  return (
    <nav className="navbar">
      <ul>
        {/* <li>
          <NavLink to='/'>Home</NavLink>
        </li> */}
        <li>
          <NavLink to='/'>Login</NavLink>
        </li>
        <li>
          <NavLink to='/editor'>Editor</NavLink>
        </li>
        <li>
          <NavLink to='/test'>Test</NavLink>
        </li>
        <li>
          <button onClick={() => handleLogout()}>Logout</button>
        </li>
      </ul>
    </nav>
  )
}

export default Header;