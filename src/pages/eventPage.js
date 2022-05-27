import { Card } from "react-bootstrap";
import logo from '../logo.svg';
import '../styles/events.css';

export default function EventPage({ title, descText }) {
    return(
        // <div className="container-fluid custom-bg full-height">
        //     <div className="row px-0">
        //         <div className="center-vertical">
        //             <Card style={{ minWidth:'200px', width: '300px', height:'400px'}} bg='success' className=''>
        //                 {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        //                 <Card.Img src={logo} alt="Card image" style={{ height:'200px', opacity: '0.7' }}/>
        //                 <Card.ImgOverlay className='img-responsive' src={logo}>
        //                     <Card.Body>
        //                         <Card.Title>Card Title</Card.Title>
        //                         <Card.Text>
        //                             Card Text 
        //                         </Card.Text>
        //                         {/* <Button variant="primary">Go somewhere</Button> */}
        //                     </Card.Body>
        //                 </Card.ImgOverlay>
        //             </Card> 
        //         </div>
        //         <div className="center-vertical about-event">
        //         <Card style={{ width:'95%',maxWidth:'700px', height:'400px'}} className=''>
        //                 {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        //                 {/* <Card.Img src={logo} alt="Card image" style={{ height:'200px', opacity: '0.7' }}/> */}
        //                 <Card.ImgOverlay className='img-responsive' src={logo}>
        //                     <Card.Body>
        //                         <Card.Title>Card Title</Card.Title>
        //                         <Card.Text>
        //                             Card Text 
        //                         </Card.Text>
        //                         {/* <Button variant="primary">Go somewhere</Button> */}
        //                     </Card.Body>
        //                 </Card.ImgOverlay>
        //             </Card> 
        //         </div>
        //     </div>
        // </div>

        <div className="container-fluid fill full-height center-vertical" style={{ backgroundImage:`url(/assets/coding.jpeg)`, backgroundSize:'cover' }}>
            <div className="row col-lg-12 col-md-6 col-sm-12 flex justify-center align-center items-center">
                <Card style={{ minWidth:'200px', width:'80%', maxWidth: '280px', height:'360px'}} bg='success' className='mx-auto my-5 rounded-3 col-lg-4 col-md-1 mx-md-auto mx-md-5 col-sm-1 mx-sm-5 mx-sm-auto hover-expand float-animation'>
                    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                    <Card.Img src={logo} alt="Card image" style={{ height:'200px', opacity: '0.7' }}/>
                    <Card.ImgOverlay className='img-responsive' src={logo}>
                        {/* <Card.Body>
                            <Card.Title>Title</Card.Title>
                            <Card.Text>
                                Text
                            </Card.Text>
                        </Card.Body> */}
                    </Card.ImgOverlay>
                </Card> 
                <div className="container col-lg-6 rounded-3 glass-effect flex center-only-vertical text-white">
                    <h3 className="single-event-title">{title}</h3>
                    <p>{descText}</p>
                    <p>Time: 3:30pm</p>
                    <div className="container-fluid p-0">
                        <p className="border-bottom">Event Organizers</p>
                        <div>
                            <div>Contact 1: Number</div>
                            <div>Contact 2: Number</div>
                        </div>
                    </div>
                </div>
                {/* <Card style={{ minWidth:'200px', width:'80%', maxWidth: '360px'}} bg='success' className='mx-auto my-5 rounded-3 col-md-1 mx-md-auto mx-md-5 col-sm-1 mx-sm-5 mx-sm-auto h-fit'>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Img src={logo} alt="Card image" style={{ height:'200px', opacity: '0.7' }}/>
                    <Card.ImgOverlay className='img-responsive' src={logo}>
                        <Card.Body>
                            <Card.Title>Title</Card.Title>
                            <Card.Text>
                                Text
                            </Card.Text>
                            <Card.Text>
                                Text
                            </Card.Text>
                            <Card.Text>
                                Text
                            </Card.Text>
                            <Card.Text>
                                Text
                            </Card.Text>
                            <Card.Text>
                                Text
                            </Card.Text>
                            <Card.Text>
                                Text
                            </Card.Text>
                            <Card.Text>
                                Text
                            </Card.Text>
                            <Card.Text>
                                Text
                            </Card.Text>
                        </Card.Body>
                    </Card.ImgOverlay>
                </Card> */}
            </div>
        </div>
    )
}