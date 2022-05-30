import "../styles/events.css";

export default function Contact() {
    return(
        <div className="container-fluid flex w-100 mb-5">
            <div className="row flex justify-content-center">
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
            </div>
        </div>
    )
}