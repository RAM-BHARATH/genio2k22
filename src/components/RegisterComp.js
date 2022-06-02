import { Col, Row } from "react-bootstrap";
import '../styles/events.css'

export default function RegisterComp() {
    return(
        <div className="container-fluid flex w-100 bg-dark"> {/* reg */}
            <Row>
                <Col sm className="text-white center-only-vertical flex justify-content-center items-center full-height">
                    <img src="/assets/ticket-with-price.svg" alt="Registration fee- 500"  className="flex center-vertical" style={{margin:'auto'}}/>
                </Col>
                <Col sm className="center-only-vertical flex jusitfy-content-center items-center text-white pb-sm-5">
                    <div>
                        <ul>
                            <li>
                                <h4>Can participate in both technical and non-technical events with this single registration</h4>
                            </li>
                            <li>
                                <h4>Exciting rewards for winners</h4>
                            </li>
                            <li>
                                <h4>Participation certificates will be provided, if unfortunately you couldn't win</h4>
                            </li>
                            <li>
                                <h4>Lunch will be provided</h4>
                            </li>
                        </ul>
                    </div>
                </Col>
            </Row>
        </div>
    )
}