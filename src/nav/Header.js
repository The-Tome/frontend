import { NavLink } from 'react-router-dom';
import { codes } from '../codes';

function Header(props) {
  // const handleLogout = (e) => {
  //   // implement logout logic
  //   props.navigate('/login');
  // }

  return (
    <nav className="navbar">
      <ul>
        {/* <li>
          <NavLink to='/'>Home</NavLink>
        </li> */}
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
      </ul>
    </nav>
  )
}

export default Header;