import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0); //Indicate which word is currently being displayed on the screen
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = [ "Software Engineer", "Fullstack Developer", "UI/UX Designer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random * 100);
    const period = 2000; //Indicating how much time to see if letters are being typed

    useEffect(() => { //Responsible for taking care of typing/deleting
        let ticker = setInterval(() => {
            tick();
        }, delta) 

        return () => { clearInterval(ticker)};

    }, [text]) //Will run everytime the text is updated

    const tick = () => { 
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if(isDeleting) { 
            setDelta(prevDelta => prevDelta / 2); //The animation when deleting is faster than when typing, that's why delta is cut in half
        }
        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        } else if(isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio!</span>
                        <h1>{`Hi I'm a `}<span className="wrap">{text}</span></h1>
                        <p>
                            As a recent graduate in software engineering, I'm driven by my passion for
                            coding and eagerness to learn. I bring enthusiasm and a strong foundation in
                            programming to the table, eager to contribute and grow in dynamic
                            environments. My goal is to leverage my skills to make meaningful contributions
                            while continuously expanding my knowledge in the field.
                        </p>
                        <button onClick={() => console.log("Connect")}>Let's Connect! <ArrowRightCircle size={25}/></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Image" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};