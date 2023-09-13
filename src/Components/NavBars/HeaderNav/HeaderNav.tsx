import { useContext } from "react";
import { Container, Image, Navbar } from "react-bootstrap";
import { MyUserContext } from "../../Context/MyUserContext";
import "./HeaderNavS.scss";

export const HeaderNav = () => {
    const { user } = useContext(MyUserContext);
    return (
        <Navbar className="Navbar" fixed="top">
            <Container>
                <Navbar.Brand href="#home" className="NavAppName">
                    InstaAi
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Image
                        className="ProfileImage"
                        src={user.image}
                        roundedCircle
                    />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
