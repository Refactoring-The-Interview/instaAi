import { Nav, Navbar } from "react-bootstrap";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { ReactSVG } from "react-svg";
import home from "../../../Assets/Svgs/003-home3.svg";
import userIcon from "../../../Assets/Svgs/114-user.svg";
import heart from "../../../Assets/Svgs/219-heart.svg";
import plus from "../../../Assets/Svgs/267-plus.svg";
import film from "../../../Assets/Svgs/film.svg";
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
                    <Nav.Link eventKey={Paths.HOME}>
                        <ReactSVG src={home} className="svg" />
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item className="navItem">
                    <Nav.Link eventKey={Paths.ADDPICTUREPAGE}>
                        <ReactSVG src={plus} className="svg" />
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item className="navItem">
                    <Nav.Link eventKey={Paths.FEED}>
                        <ReactSVG src={film} className="svg" />
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item className="navItem">
                    <Nav.Link eventKey="link-2">
                        <ReactSVG src={heart} className="svg" />
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item className="navItem">
                    <Nav.Link eventKey={Paths.PROFILE}>
                        <ReactSVG src={userIcon} className="svg" />
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        </Navbar>
    );
};
