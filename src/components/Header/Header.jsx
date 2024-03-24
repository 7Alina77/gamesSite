import './Header.scss';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.jpg';

function Header() {
  return (
    <section className='header'>
      <nav className='nav'>
        <Link to='/' className='logo-container'>
          <img src={logo} alt='logo' className='logo-img' />
        </Link>
        <ul className='auth'>
          <li className='auth-item'><Link to='/login' className='link'>Login</Link></li>
          {/* <li className='auth-item'><Link to='/login'>Sign up</Link></li> */}
        </ul>
      </nav>
    </section>
  );
}

export default Header;
