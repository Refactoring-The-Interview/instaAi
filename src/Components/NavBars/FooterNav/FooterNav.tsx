import { Nav, Navbar } from "react-bootstrap";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { Paths } from "../../../Types/routerTypes";
import "./FooterNavS.scss";

export const FooterNav = () => {
    const navigate: NavigateFunction = useNavigate();
    return (
        <Navbar fixed="bottom" className="FooterNav">
            <Nav
                className="navItems"
                onSelect={(selectedKey) => {
                    if (selectedKey !== null) navigate(selectedKey);
                }}
            >
                <Nav.Item className="navItem">
                    <Nav.Link eventKey={Paths.HOME}>Home</Nav.Link>
                </Nav.Item>
                <Nav.Item className="navItem">
                    <Nav.Link eventKey={Paths.ADDPICTUREPAGE}>Add</Nav.Link>
                </Nav.Item>
                <Nav.Item className="navItem">
                    <Nav.Link eventKey="link-2">Favs</Nav.Link>
                </Nav.Item>
                <Nav.Item className="navItem">
                    <Nav.Link eventKey={Paths.PROFILE}>Profile</Nav.Link>
                </Nav.Item>
            </Nav>
        </Navbar>
    );
};
