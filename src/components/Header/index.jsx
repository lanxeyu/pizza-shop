import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet } from 'react-router-dom';
import Banner from '../Banner';
import './style.css'

function Header() {
  return (
    <>
        <Banner></Banner>
      <div className='header'>
          <Navbar expand="lg" className="bg-body-tertiary">
              <Container>
                  <Navbar.Brand><h1>Pluto&apos;s Pizza</h1></Navbar.Brand>
              </Container>
          </Navbar>
      </div>
          <Outlet/>
    </>
  );
}

export default Header;