import { Col, Row } from "react-bootstrap";
import "../styles/events.css";

export default function Contact() {
    return(
        <div className="container-fluid flex w-100">
            <Row className="text-center bg-dark">
                <Col sm className="text-white center-only-vertical">
                    <div class="map-responsive">
                            <iframe
                            className="mx-sm-auto center-only-vertical my-5 pb-5"
                            id="gmap_canvas"
                            title="gmap_canvas"
                            src="https://maps.google.com/maps?q=Anna%20University%20Regional%20Campus%20Coimbatore&t=&z=13&ie=UTF8&iwloc=&output=embed"
                            frameborder="0"
                            scrolling="no"
                            marginheight="0"
                            marginwidth="0"
                            allowFullScreen
                            ></iframe>
                            <br />
                    </div>
                </Col>
                <Col sm className="center-only-vertical text-center">
                    <h3 className="text-white">Contact Us:</h3>
                    <div className="row flex justify-content-center">
                        <a href="https://instagram.com/genio.2k22/" style={{ width:"fit-content", display:'flex',columnGap:'5px', textDecoration:'none' }}>
                            <img src="/assets/social/instagram.svg" alt="Instagram" style={{width:"30px", height:"30px"}} className="social-highlight"/>
                        </a>
                        <a href="https://facebook.com/genio2k22/" style={{ width:"fit-content", display:'flex',columnGap:'5px', textDecoration:'none' }}>
                            <img src="/assets/social/facebook.svg" alt="Facebook" style={{width:"30px", height:"30px"}} className="social-highlight"/>
                        </a>
                        <a href="https://twitter.com/genio2k22/" style={{ width:"fit-content", display:'flex',columnGap:'5px', textDecoration:'none' }}>
                            <img src="/assets/social/twitter.svg" alt="Twitter" style={{width:"30px", height:"30px"}} className="social-highlight"/>
                        </a>
                        <a href="#top" style={{ width:"fit-content", display:'flex',columnGap:'5px', textDecoration:'none' }}>
                            <img src="/assets/social/web.svg" alt="Web" style={{width:"30px", height:"30px"}} className="social-highlight"/>
                        </a>
                    </div>
                </Col>
            </Row>
            {/* <div className="row flex justify-content-center">
                <a href="https://instagram.com/genio.2k22/" style={{ width:"fit-content" }}>
                    <img src="/assets/social/instagram.svg" alt="Instagram" style={{width:"30px", height:"30px"}} className="social-highlight"/>
                </a>
                <a href="https://facebook.com/genio2k22/" style={{ width:"fit-content" }}>
                    <img src="/assets/social/facebook.svg" alt="Facebook" style={{width:"30px", height:"30px"}} className="social-highlight"/>
                </a>
                <a href="https://twitter.com/genio.2k22/" style={{ width:"fit-content" }}>
                    <img src="/assets/social/twitter.svg" alt="Twitter" style={{width:"30px", height:"30px"}} className="social-highlight"/>
                </a>
                <a href="#top" style={{ width:"fit-content" }}>
                    <img src="/assets/social/web.svg" alt="Web" style={{width:"30px", height:"30px"}} className="social-highlight"/>
                </a>
            </div> */}
        </div>
    )
}