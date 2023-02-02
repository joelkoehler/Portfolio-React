
import 'bootstrap/dist/css/bootstrap.min.css';
import Terminal from './Terminal';
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';
import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

export default function Landing() {

    const [key, setKey] = useState('web');

    return (
        <div className='col-center'>
            <div className='content-wrapper col-top'>





                <div className="typer">
                    <h1 className="type"> {'>'} Joel Koehler<span className='blink'>_</span></h1>
                </div>

                <div className="description row-left">
                    <p>
                        I am a Software Engineer with a B.S. in Computer Science and a passion
                        for mobile & web technologies. Here are my stats:
                    </p>
                </div>

                <div className="terminal">
                    <Terminal />
                </div>

                <div className='banner type-small'>// Code</div>

                <div className="projects">
                    <ListGroup variant="flush ">
                        <ListGroup.Item className="list-item">
                            <a className='btn41-43 btn-41 no-dec' href="https://github.com/joelkoehler/Dartboard-React">
                                
                                <div className='col-center'>
                                    <div className='row-center'>
                                        <a className='project-button'>Click to view on Github</a>
                                    </div>
                                </div>

                                <p className='list-text '>Dartboard (React)</p>
                                <p>A React version of Dartboard iOS with added features and an updated design.</p>
                                {/* <Badge bg="info">React.js</Badge> */}
                            </a>


                        </ListGroup.Item>
                        <ListGroup.Item className="list-item">

                            <a className='btn41-43 btn-41 no-dec' href="https://github.com/joelkoehler/Dartboard-iOS">
                                <div className='row-center'>
                                    <a className='project-button'>Click to view on Github</a>
                                </div>
                                <p className='list-text'>Dartboard iOS (Swift)</p>
                                <p>An iOS app intended to spark adventure by "throwing a dart" at a map.</p>
                                {/* <Badge bg="danger">Swift</Badge> */}
                            </a>


                        </ListGroup.Item>
                        <ListGroup.Item className="list-item">
                            <a className='btn41-43 btn-41 no-dec' href="https://github.com/joelkoehler/Fonetic-Live-Transcription">
                                <div className='row-center'>
                                    <a className='project-button'>Click to view on Github</a>
                                </div>
                                <p className='list-text'>Fonetic (Flutter)</p>
                                <p>A cross-platform live transcription app built in Flutter.</p>
                                {/* <Badge bg="primary">Flutter / Dart</Badge> */}
                            </a>
                        </ListGroup.Item>
                        <ListGroup.Item className="list-item">
                            <a className='btn41-43 btn-41 no-dec' href="https://github.com/joelkoehler/smash-terminal">
                                <div className='row-center'>
                                    <a className='project-button'>Click to view on Github</a>
                                </div>
                                <p className='list-text'>Smash Terminal (C)</p>
                                <p>A shell emulator based on bash and built from scratch using the C language.</p>
                                {/* <Badge bg="warning">C</Badge> */}
                            </a>
                        </ListGroup.Item>
                    </ListGroup>
                </div>

                <div className='row-center back'>
                    <div className="bn53 row-center">Github</div>
                </div>

                <div className='type-small banner'>// Skills</div>
                <div className="skills">
                    <Tabs variant='pills'>
                        <TabList className="tab-list">
                            <Tab>General</Tab>
                            <Tab>Web</Tab>
                            <Tab>Mobile</Tab>
                            <Tab>UI</Tab>
                            <Tab>Firmware</Tab>
                            <Tab>Enterprise</Tab>
                            <Tab>Testing</Tab>
                            <Tab>Design</Tab>
                        </TabList>

                        <TabPanel>
                            <ul>
                                <li>Top 3 languages: Javascript/Typescript, Java, Python</li>
                                <li>Familiar with Dotnet/VB.NET/C#</li>
                                <li>Databases: mongoDB, MySQL</li>
                                <li >C/C++</li>
                                <li>Audio: understanding of basic theory, experience with MIDI, JUCE framework for VST plugin development</li>
                            </ul>
                        </TabPanel>
                        <TabPanel>
                            <ul>
                                <li>HTML, CSS, JSON, protobuf, JS/Typescript</li>
                                <li>Node/Express, PHP, Django</li>
                                <li>React, Angular</li>
                                <li>Industry experience creating and interfacing with RESTful APIs</li>
                                <li>MySQL, NoSQL (mongoDB)</li>
                                <li>Postman</li>
                            </ul>
                        </TabPanel>
                        <TabPanel>
                            <ul>
                                <li>iOS/Swift/Xcode</li>
                                <li>Flutter/Dart for cross-platform apps</li>
                                <li>Strong Java background</li>
                            </ul>
                        </TabPanel>
                        <TabPanel>
                            <ul>
                                <li>QML, QT Creator</li>
                                <li>Adobe XD for mockups</li>
                                <li>Java Swing/Netbeans, Dotnet/Windows Forms</li>
                            </ul>
                        </TabPanel>
                        <TabPanel>
                            <ul>
                                <li>C, C++</li>
                                <li>UI development (QML and C++)</li>
                                <li>Multi debugger tool</li>
                                <li>Experience developing for large codebases in HP's print division</li>
                                <li>Embedded REST APIs and web server development</li>
                            </ul>
                        </TabPanel>
                        <TabPanel>
                            <ul>
                                <li>Jira/Trello</li>
                                <li>Scrum/Agile</li>
                                <li>Github, Gerrit</li>
                                <li>Familiar with Jenkins CI, Circle CI, Docker</li>
                            </ul>
                        </TabPanel>
                        <TabPanel>
                            <ul>
                                <li>Experience writing system tests (pytest)</li>
                                <li>Experience writing unit tests (gtest/gmock, JUnit)</li>
                                <li>Test-Driven Development</li>
                            </ul>
                        </TabPanel>
                        <TabPanel>
                            <ul>
                                <li>Wealth of experience with Object-oriented design</li>
                                <li>Functional programming(React, some Scheme and Prolog)</li>
                                <li>Industry experience writing context-free grammars & interpretors for proprietary languages</li>
                                <li>UML</li>
                            </ul>
                        </TabPanel>
                    </Tabs>
                </div>

                <div className='type-small banner'>// Work</div>
                <div className="skills ul">
                    <ListGroup variant="flush">
                        <ListGroup.Item className="list-item">
                            <p className='list-text'>Embedded Software Engineer | HP</p>
                            <p>2021 — <Badge bg="secondary">Present</Badge></p>
                            <p>
                                I support HP firmware development for a variety of printer models. I have the privilege to work alongside a team that spans multiple continents and cultures, and have gained experience with a complex codebase that contains both vital legacy code and new advancements in embedded firmware. Notable projects include:
                                {/* embedded web server development (Typescript/Angular), implementing embedded REST APIs (protobuf, json, C++), working on QML-based printer UI, mentoring two summer interns, creating a context-free grammar for a proprietary programming language, migrating legacy code from C to C++, and writing unit tests for driver components. */}
                            </p>
                            <ul>
                                <li>Embedded web server development (Typescript/Angular)</li>
                                <li>Implementing embedded REST APIs (protobuf, json, C++)</li>
                                <li>Working on QML-based printer UI</li>
                                <li>Mentoring two summer interns</li>
                                <li>Creating a context-free grammar for a proprietary programming language</li>
                                <li>Migrating legacy code from C to C++</li>
                                <li>Writing unit tests for driver components</li>
                            </ul>
                        </ListGroup.Item>
                        <ListGroup.Item className="list-item">
                            <p className='list-text'>Firmware Engineer Intern | HP </p>
                            <p>2020 — 2021</p>
                            <p>Used Google Test & Google Mock to write unit tests for HP's print engine (C/C++) at the driver level. Created a tutorial on unit testing that is now used as a guideline for testing other components for HP's firmware section. Developed printer UI (QML/C++).</p>
                        </ListGroup.Item>
                        <ListGroup.Item className="list-item">
                            <p className='list-text'>Computer Science Tutor & TA | Boise State University</p>
                            <p>2020</p>
                            <p>I taught and mentored students (1-on-1 and in groups up to 10) in MySQL & Java Database integration. Managed my online and in-person office hours, graded assignments and created automated grading scripts. Responsible for guiding students' progress towards their academic and professional development.</p>
                        </ListGroup.Item>
                    </ListGroup>
                </div>


            </div>
        </div>

    )
}