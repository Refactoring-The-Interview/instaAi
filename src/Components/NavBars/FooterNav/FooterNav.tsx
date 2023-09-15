import { Nav, Navbar } from "react-bootstrap";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { ReactSVG } from "react-svg";
import home from "../../../Assets/Svgs/003-home3.svg";
import userIcon from "../../../Assets/Svgs/114-user.svg";
import heart from "../../../Assets/Svgs/219-heart.svg";
import plus from "../../../Assets/Svgs/267-plus.svg";
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
                        <ReactSVG src={home} />
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item className="navItem">
                    <Nav.Link eventKey={Paths.ADDPICTUREPAGE}>
                        <ReactSVG src={plus} />
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item className="navItem">
                    <Nav.Link eventKey="link-2">
                        <ReactSVG src={heart} />
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item className="navItem">
                    <Nav.Link eventKey={Paths.PROFILE}>
                        <ReactSVG src={userIcon} />
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        </Navbar>
    );
};
