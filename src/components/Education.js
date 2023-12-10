import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import uvic from '../img/uvic-logo-wt-transparent.png';

export const Education = () => {
    return (
        <section className="education" id="education">
            <div className="education-container">
                <Container className="education-bx">
                    <h2>Education</h2>
                    <Row>
                        <img className='University-logo' src={uvic} alt='UVIC logo'/>
                        <p>Pursuing a Bachelor of Science in Computer Science and Geography Combined</p>
                    </Row>
                    <Row>
                        <h4>Notable Classes</h4>
                        <Col sm={6} xs={12} className="column">
                            <div className="item">
                                <p><span style={{ color: '#9EBC9E' }}>SENG 321</span> - Requirements Engineering</p>
                                <p><span style={{ color: '#9EBC9E' }}>CSC 360</span> - Operating Systems</p>
                                <p><span style={{ color: '#9EBC9E' }}>CSC 226</span> - Computer Algorithms ll</p>

                            </div>
                        </Col>
                        <Col sm={6} xs={12} className="column">
                            <div className="item">
                                <p><span style={{ color: '#9EBC9E' }}>GEOG 328</span> - GIS Analysis</p>
                                <p><span style={{ color: '#9EBC9E' }}>MATH 211</span> - Matrix Algebra</p>
                                <p><span style={{ color: '#9EBC9E' }}>MATH 202</span> - Calculus lll/lV</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    )
}