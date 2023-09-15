import { useContext } from "react";
import { Container, Image, Navbar } from "react-bootstrap";
import { Paths } from "../../../Types/routerTypes";
import { MyUserContext } from "../../Context/MyUserContext";
import "./HeaderNavS.scss";

export const HeaderNav = () => {
    const { user } = useContext(MyUserContext);
    return (
        <Navbar className="Navbar" fixed="top">
            <Container>
                <Navbar.Brand href={Paths.HOME} className="NavAppName">
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
