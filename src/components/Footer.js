import { Container, Row, Col} from "react-bootstrap";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import logo from "../assets/img/logo.svg"

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <Col sm={6}>
                        <img src={logo} alt="Footer Logo" id="logoImage"/>
                    </Col>
                    <Col sm={6} className="text-center text-sm-end"> {/* The icons will be centered in larger screens but will move to the end of the footer in the smaller screens */}
                        <div className="social-icon" id="socialIcons">
                            <a href="https://www.linkedin.com/in/omarmessad/" target="_blank"><img src={navIcon1} alt="" /></a>
                            <a href="https://www.facebook.com/omarmmessad/" target="_blank"><img src={navIcon2} alt="" /></a>
                            <a href="https://www.instagram.com/omar_m_messad/" target="_blank"><img src={navIcon3} alt="" /></a>
                        </div>
                        <p>CopyRight 2022. All Rights Reserved by Omar Messad</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};