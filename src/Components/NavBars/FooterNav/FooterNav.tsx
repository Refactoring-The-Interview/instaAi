import { Nav, Navbar } from 'react-bootstrap';
import './FooterNavS.scss';

export const FooterNav = () => {




  return (
    <Navbar fixed='bottom' className='FooterNav'>

        <Nav
          className='navItems'
          activeKey="/home"
          onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
          >
          <Nav.Item className='navItem'>
            <Nav.Link href="/home">
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className='navItem'>
            <Nav.Link eventKey="link-1">Add</Nav.Link>
          </Nav.Item>
          <Nav.Item className='navItem'>
            <Nav.Link eventKey="link-2">Favs</Nav.Link>
          </Nav.Item>
          <Nav.Item className='navItem'>
            <Nav.Link eventKey="disabled" disabled>
              Profile
            </Nav.Link>
          </Nav.Item>
        </Nav>

      </Navbar>
  );
 }