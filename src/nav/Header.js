import { NavLink } from 'react-router-dom';

function Header(props) {
  // const handleLogout = (e) => {
  //   // implement logout logic
  //   props.navigate('/login');
  // }

  return (
    <nav class="navbar">
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
      </ul>
    </nav>
  )
}

export default Header;