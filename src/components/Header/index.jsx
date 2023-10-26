import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet } from 'react-router-dom';
import Banner from '../Banner';

function Header() {
  return (
    <>
      <Banner></Banner>
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand><h1>Pluto&apos;s Pizza</h1></Navbar.Brand>
            </Container>
        </Navbar>
        <Outlet/>
    </>
  );
}

export default Header;