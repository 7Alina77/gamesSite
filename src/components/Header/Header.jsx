import './Header.scss';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../images/logo.jpg';

function Header() {
  const location = useLocation();
  const path = location.pathname; 

  return (
    <section className='header'>
      <nav className='nav'>
        <Link to='/' className='logo-container'>
          <img src={logo} alt='logo' className='logo-img' />
        </Link>
        <ul className='auth'>
          {path === '/' 
          ?  <li className='auth-item'><Link to='/login' className='link'>Log in</Link></li>
          :  <li className='auth-item'><Link to='/' className='link'>Register</Link></li>
          }
        </ul>
      </nav>
    </section>
  );
}

export default Header;
