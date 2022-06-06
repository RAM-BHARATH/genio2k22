import { Card } from "react-bootstrap";
import logo from '../logo.svg';
import '../styles/events.css';

export default function paperPresentation({ title, descText, bgSrc, cardImgSrc, contact, time }) {
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
        "Augmented Reality",
        "Computer Networks",
        "Advanced Computation Techniques"
    ]
    const teamInfo = [
        "A team can have a maximum of 4 participants", 
        "No participants can be part of more than one team"
    ]
    const rules=[
        "Paper should be in IEEE format",
        "Abstract should not exceed 250 words and paper should not exceed 20 pages",
        "Kindly send your paper to genioaurcc@gmail.com. Reviews will be addressed through the same email-id",
        "Participants should bring 2 hard copies of their paper & softcopy of presentation in .ppt or .pptx format",
        "The paper submitted will have to be presented during the event",
        "Hard copies of the same are to be submitted before presentation to Judges",
        "The Teams will get 10 minutes to present their paper, followed by Question and Answer session",
        "The participants will have to present their papers in MS-Power Point supported (.ppt or .pptx) format only",
        "Violation of any rule can result in rejection of paper",
        "Plagiarism will not be entertained"
    ]
    return(
        <div className="container-fluid fill full-height center-vertical pt-5" style={{ backgroundImage:`url(/assets/bg.jpg)`, backgroundSize:'cover' }}>
            <div className="row col-lg-12 col-md-6 col-sm-12 flex justify-center align-center items-center">
                <Card style={{ minWidth:'200px', width:'80%', maxWidth: '280px', height:'360px', border:'0', padding:'0', margin:'0'}} bg='success' className='mx-auto my-5 rounded-3 col-lg-4 col-md-1 mx-md-auto mx-md-5 col-sm-1 mx-sm-5 mx-sm-auto hover-expand float-animation'>
                    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                    <Card.Img src={cardImgSrc} alt="Card image" style={{ height:'360px', width:'280px'}}/>
                    <Card.ImgOverlay className='img-responsive' src={logo}>
                    </Card.ImgOverlay>
                </Card> 
                <div className="container col-lg-6 rounded-3 glass-effect flex center-only-vertical text-white"> {/* style={{ height:'480px', overflowY:'scroll' }} */}
                    <div className="row p-4" style={{ overflowY:'scroll', maxHeight:'90vh' }}>
                        <h3 className="single-event-title">{title}</h3>
                        <p>{descText}</p>
                        {
                            !!topics ? (
                                <div>
                                    <ol>
                                        <h4>Topics include but not limited to:</h4>
                                        {topics.map(topic=>(
                                        <li>{topic}</li>
                                    ))}
                                    </ol>
                                </div>
                            ):(<></>)
                        }
                        {
                            !!teamInfo ? (
                                <div>
                                    <ol>
                                        <h4>Team Formation:</h4>
                                        {teamInfo.map(teamInfoSingle=>(
                                        <li>{teamInfoSingle}</li>
                                    ))}
                                    </ol>
                                </div>
                            ):(<></>)
                        }
                        {
                            !!rules ? (
                                <div>
                                    <ol>
                                        <h4>Submission and Presentation Guidelines:</h4>
                                        {rules.map(rule=>(
                                            <li>{rule}</li>
                                        ))}
                                    </ol>
                                </div>
                            ):(<></>)
                        }
                        <p>Time: {time}</p>
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
        </div>
    )
}