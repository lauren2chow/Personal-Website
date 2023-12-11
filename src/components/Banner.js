import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Software Developer", "GIS Analyist"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
  
    return () => {
      clearInterval(ticker);
    };
  }, [text, delta]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col lg={7}>
            <TrackVisibility>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>Hi! I'm Lauren,</h1>
                <h2>{`I am a `} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Software Developer", "GIS Analyist", "Web Designer" ]'><span className="wrap">{text}</span></span></h2>
                    <p>A 3rd-year undergraduate student at the University of Victoria, majoring in computer science and geography. Blending precision from computer science with a comprehensive understanding of geography, I find joy in bringing ideas to life.</p>
                    <button onClick={() => window.location.href = 'mailto:lauren2chow@gmail.com'}>
                      Let’s Connect <ArrowRightCircle size={25} />
                    </button>
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}