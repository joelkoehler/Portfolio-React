import 'bootstrap/dist/css/bootstrap.min.css';
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';
import 'react-tabs/style/react-tabs.css';
import Keyboard from './Keyboard';


export default function Music() {


    return (

        <div className='col-center'>
            <div className='content-wrapper col-top'>





                <div className="typer">
                    <h1 className="type">
                        
                        <p>My Music</p>
                        {/* <img className="wave-icon" src="wave.png" alt="soundwave"></img> */}
                    </h1>
                </div>

                <div className="description row-left">
                    <p>
                        I'm involved with several projects in the PDX area (guitar, bass, drums, and vocals) and also produce for local artists. Check out my projects below:
                    </p>
                </div>

                <div className="player">
                    <Keyboard />
                </div>

                <div className='banner type-small'>// Bands</div>
                <div className="projects">
                    <ListGroup variant="flush ">

                        <ListGroup.Item className="list-item">

                            <a className='btn41-43 btn-41 no-dec' href="https://linktr.ee/stillgolden">
                        
                                <div className='col-center'>
                                    <div className='row-center'>
                                        <a className='project-button'>Listen</a>
                                    </div>
                                </div>
                        
                                <p className='list-text'>Still Golden</p>
                                <p>Pop Punk/Post-Emo band</p>
                            </a>


                        </ListGroup.Item>
                        
                        <ListGroup.Item className="list-item">
                            <a className='btn41-43 btn-41 no-dec' href="https://soundcloud.com/5ktn">

                                <div className='col-center'>
                                    <div className='row-center'>
                                        <a className='project-button'>Listen</a>
                                    </div>
                                </div>

                                <p className='list-text '>Shutters</p>
                                <p>Midwest Emo solo project</p>
                            </a>


                        </ListGroup.Item>

                        <ListGroup.Item className="list-item">
                            <a className='btn41-43 btn-41 no-dec' href="https://linktr.ee/filethirteenofficial">
                                <div className='row-center'>
                                    <a className='project-button'>Listen</a>
                                </div>
                                <p className='list-text'>File Thirteen</p>
                                <p>Satire Indie Rock</p>
                            </a>
                        </ListGroup.Item>

                        <ListGroup.Item className="list-item">
                            <a className='btn41-43 btn-41 no-dec'>
                                <div className='row-center'>
                                    <a className='project-button'>No releases yet</a>
                                </div>
                                <p className='list-text'>DTR</p>
                                <p>Indie/Electronic duo</p>
                            </a>
                        </ListGroup.Item>
                    </ListGroup>
                </div>

                // <div className='type-small banner'>// News</div>
                // <div className="skills ul">
                //     <ListGroup variant="flush">
                //         <ListGroup.Item className="list-item">
                //             <p className='list-text'> Recording for With Hesitance's debut EP is nearing completion, to release in 2023.</p>
                //             <p>January 2023</p> <p><Badge bg="danger">RECORDING</Badge></p>
                //         </ListGroup.Item>
                //         <ListGroup.Item className="list-item">
                //             <p className='list-text'>File Thirteen has ended haitus and is currently working on two EPs.</p>
                //             <p>November 2022</p> <p><Badge bg="danger">RECORDING</Badge> <Badge bg="secondary">WRITING</Badge></p>
                //         </ListGroup.Item>
                //         <ListGroup.Item className="list-item">
                //             <p className='list-text'>DTR formed, currently in the writing phase.</p>
                //             <p>November 2022</p> <p><Badge bg="secondary">WRITING</Badge></p>
                //         </ListGroup.Item>
                //         <ListGroup.Item className="list-item">
                //             <p className='list-text'>Recording underway for the first Shutters EP.</p>
                //             <p>October 2022</p> <p><Badge bg="danger">RECORDING</Badge></p>
                //         </ListGroup.Item>
                //         <ListGroup.Item className="list-item">
                //             <p className='list-text'>File Thirteen single 'Go' live on all platforms.</p>
                //             <p>January 2021</p> <p><Badge bg="success">RELEASE</Badge> </p>
                //         </ListGroup.Item>
                //         <ListGroup.Item className="list-item">
                //             <p className='list-text'> Shutters single 'A Warm Cell' released on Soundcloud.</p>
                //             <p>October 2020</p> <p><Badge bg="success">RELEASE</Badge></p>
                //         </ListGroup.Item>
                //     </ListGroup>
                // </div>


            </div>
        </div>
    )
}
