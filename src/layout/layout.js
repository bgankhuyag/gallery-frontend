import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Header from './header';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default Layout;
