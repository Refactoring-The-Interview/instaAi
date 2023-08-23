import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Navbar from 'react-bootstrap/Navbar';
import ProfileDefault from '../../Assets/RoboProfilePic.jpeg';
import './NavBarS.scss';

export const NavBar = () => {
  return (
    <Navbar className="Navbar"  fixed='top'>
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