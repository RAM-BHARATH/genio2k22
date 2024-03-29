import { Button, Card } from 'react-bootstrap'
export default function EventCard({ title, text,imgSrc }) {
    return(
        <Card style={{ width:'200px', height:'300px', border:'0'}} className='mx-auto my-5 rounded-3 col-md-1 mx-md-auto mx-md-5 col-sm-1 mx-sm-5 mx-sm-auto hover-effect'>
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Img src={imgSrc} alt="Card image" style={{ height:'300px', width:'100%', padding:'0', margin:'0' }} className={'imgResponsive'}/>
            <Card.ImgOverlay style={{ padding:'0', margin:'0'}}>
                <Card.Body style={{ textAlign:'center' }} className="flex justify-center items-center">
                    <Card.Title className='text-white'>{title}</Card.Title>
                    {/* <Card.Text>
                        {text}
                    </Card.Text> */}
                    {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
            </Card.ImgOverlay>
        </Card> 
    )
}