import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Container, Row, Col } from "react-bootstrap";

export const Skills = () => {
    return (
        <section className="skills" id="skills">
            <div className="container">
                <Container className="skill-bx">
                <h2>Skills</h2>
                    <Row className="row align-items-start">
                    <Col lg={true} className="column">
                        <h4>Programming Languages</h4>
                        <div className="item">
                            <h3>Python</h3>
                            <div className="progress-container">
                                <span className="label">Comfortable</span>
                                <div className="progress-bar">
                                    <ProgressBar variant="custom" now={90}/>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <h3>C</h3>
                            <div className="progress-container">
                                <span className="label">Comfortable</span>
                                <div className="progress-bar">
                                    <ProgressBar variant="custom" now={90}/>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <h3>Java</h3>
                            <div className="progress-container">
                                <span className="label">Familiar</span>
                                <div className="progress-bar">
                                    <ProgressBar variant="custom" now={65}/>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <h3>R</h3>
                            <div className="progress-container">
                                <span className="label">Familiar</span>
                                <div className="progress-bar">
                                    <ProgressBar variant="custom" now={60}/>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <h3>JavaScript</h3>
                            <div className="progress-container">
                                <span className="label">Familiar</span>
                                <div className="progress-bar">
                                    <ProgressBar variant="custom" now={65}/>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <h3>HTML/CSS</h3>
                            <div className="progress-container">
                                <span className="label">Familiar</span>
                                <div className="progress-bar">
                                    <ProgressBar variant="custom" now={60}/>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={true} className="column">
                        <h4>Technologies/Operating Systems</h4>
                        <div className="item">
                            <h3>React</h3>
                            <div className="progress-container">
                                <span className="label">Familiar</span>
                                <div className="progress-bar">
                                    <ProgressBar variant="custom" now={65}/>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <h3>Git</h3>
                            <div className="progress-container">
                                <span className="label">Familiar</span>
                                <div className="progress-bar">
                                    <ProgressBar variant="custom" now={70}/>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <h3>Linux</h3>
                            <div className="progress-container">
                                <span className="label">Comfortable</span>
                                <div className="progress-bar">
                                    <ProgressBar variant="custom" now={80}/>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <h3>Windows</h3>
                            <div className="progress-container">
                                <span className="label">Comfortable</span>
                                <div className="progress-bar">
                                    <ProgressBar variant="custom" now={75}/>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <h3>GIS Analysis</h3>
                            <div className="progress-container">
                                <span className="label">Comfortable</span>
                                <div className="progress-bar">
                                    <ProgressBar variant="custom" now={80}/>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <h3>Cartography</h3>
                            <div className="progress-container">
                                <span className="label">Comfortable</span>
                                <div className="progress-bar">
                                    <ProgressBar variant="custom" now={75}/>
                                </div>
                            </div>
                        </div>
                    </Col>
                    </Row>
                </Container>
            </div>
        </section>
    )
}