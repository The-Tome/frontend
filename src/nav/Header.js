import { NavLink, useNavigate } from 'react-router-dom';
import {signOut} from 'firebase/auth'
import {auth} from "../index"
import { codes } from '../codes';

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
        <li>
          <NavLink to='/home'>Home</NavLink>
        </li>
        {
            codes.map((code, key) => (
              <li key={key}>
                <NavLink to={`/${code}`}>Test {code}</NavLink>
              </li>
            ))
        }
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