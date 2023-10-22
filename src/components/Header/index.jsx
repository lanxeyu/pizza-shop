import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet } from 'react-router-dom';

function Header() {
  return (
    <>
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand>Pluto&apos;s Pizza</Navbar.Brand>
            </Container>
        </Navbar>
        <Outlet/>
    </>
  );
}

export default Header;