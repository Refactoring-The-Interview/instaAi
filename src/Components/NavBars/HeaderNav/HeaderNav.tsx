import { Container, Image, Navbar } from 'react-bootstrap';
import ProfileDefault from '../../../Assets/RoboProfilePic.jpeg';
import './HeaderNavS.scss';

export const HeaderNav = () => {
  return (
    <Navbar className="Navbar" fixed='top'>
      <Container>
        <Navbar.Brand href="#home" className='NavAppName'>InstaAi</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Image className='ProfileImage' src={ProfileDefault} roundedCircle />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}