import { Card } from "react-bootstrap";
import logo from '../logo.svg';
import '../styles/events.css';

export default function paperPresentation({ title, descText, bgSrc, cardImgSrc, contact, rules }) {
    const topics = [
        "Artificial Intelligence ",
        "Machine Learning ",
        "Block Chain Technology  ",
        "Cyber Security and Privacy  ",
        "Image Processing ",
        "Cloud Security and Privacy ",
        "Cloud services and Applications Big Data Analytics ",
        "Big Data Applications ",
        "Data Mining and Predictive Analytics ",
        "Augmented Reality"
    ]
    return(
        <div className="container-fluid fill full-height center-vertical" style={{ backgroundImage:`url(/assets/bg.jpg)`, backgroundSize:'cover' }}>
            <div className="row col-lg-12 col-md-6 col-sm-12 flex justify-center align-center items-center">
                <Card style={{ minWidth:'200px', width:'80%', maxWidth: '280px', height:'360px', border:'0', padding:'0', margin:'0'}} bg='success' className='mx-auto my-5 rounded-3 col-lg-4 col-md-1 mx-md-auto mx-md-5 col-sm-1 mx-sm-5 mx-sm-auto hover-expand float-animation'>
                    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                    <Card.Img src={cardImgSrc} alt="Card image" style={{ height:'360px', width:'280px'}}/>
                    <Card.ImgOverlay className='img-responsive' src={logo}>
                    </Card.ImgOverlay>
                </Card> 
                <div className="container col-lg-6 rounded-3 glass-effect flex center-only-vertical text-white">
                    <h3 className="single-event-title">{title}</h3>
                    <p>{descText}</p>
                    {
                        !!topics ? (
                            <div>
                                <ol>
                                    <p>Topics include but not limited to:</p>
                                    {topics.map(topic=>(
                                    <li>{topic}</li>
                                ))}
                                </ol>
                            </div>
                        ):(<></>)
                    }
                    <p>Time: 3:30pm</p>
                    <div className="container-fluid p-0">
                        <p className="border-bottom">Event Organizers</p>
                        <div>
                            <div>{contact[0].name} -  {contact[0].phoneNumber}</div>
                            <div>{contact[1].name} - {contact[1].phoneNumber}</div> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}