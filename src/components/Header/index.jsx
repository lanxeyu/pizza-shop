import { Outlet } from 'react-router-dom';
import Banner from '../Banner';
import './style.css'
import './script.js'

function Header() {
  return (
    <>
      <Banner></Banner>
      <div className='header'>
        <div className='logo-div'>
          <img className='logo' id='logo' src='/images/pizza-logo.png'></img>
        </div>
      </div>
      <Outlet/>
    </>
  );
}

export default Header;