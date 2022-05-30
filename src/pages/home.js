import '../styles/events.css';
import { Card, Figure } from 'react-bootstrap';
import Contact from '../components/Contact';
export default function Home() {
    return(
        // <div className="container-fluid p-0" style={{ minHeight:'100vh' }}>
        //     <div className="container-fluid center-vertical" style={{ height:'100vh' }}>
        //         {/* <img src="/assets/logos/genio2k22-high-res.png" alt="Title" style={{ maxWidth:'80vw' }}/> */}
        //         <div className="row flex flex-wrap" >
        //             <div className="col-md-12 col-md-offset-5">
        //                 Hello
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div className="container-fluid fill full-height center-vertical p-0 m-0" id="top">
            <div className="row flex flex-wrap center-vertical text-center full-height home-bg p-0 w-100 m-0" style={{ background:`url(/assets/bg/home-bg-2.jpg)`, backgroundSize:'cover' }}>
                {/* <h3>DEPARTMENT OF COMPUTER SCIENCE AND ENGINEERING</h3>
                <h3>AND</h3>
                <h3>PROFESSIONAL ASSOCIATION OF COMPUTER ENGINEERS</h3>
                <h3>PROUDLY PRESENTS</h3> */}
                <img src="/assets/logos/genio2k22-high-res.png" alt="Title" style={{ maxWidth:'50vw' }}/>
                <h3 className='text-white'>June 9, 2022</h3>
            </div>
            <div className="row flex flex-wrap center-vertical text-center full-height p-0 m-0">
                <h3>Our Sponsors</h3>
                <div className='row p-0 m-0'>
                        {/* <img src="/assets/sponsors/sp1.jpg" alt="" className='col-lg-6'/>
                        <img src="/assets/sponsors/sp2.jpg" alt="" className='col-lg-6'/> */}
                        <Card style={{ minWidth:'200px', maxWidth: '360px',border:'0'}} className='mx-auto my-5 rounded-3 col-md-1 mx-md-auto mx-md-5 col-sm-1 mx-sm-5 mx-sm-auto hover-effect'>
                            <Card.Img src={`/assets/sponsors/sp1.jpg`} alt="Card image" style={{ height:'100px', width:'100%', padding:'0', margin:'0' }} className={'imgResponsive'}/>
                            <Card.ImgOverlay style={{ padding:'0', margin:'0'}}>
                            </Card.ImgOverlay>
                        </Card>
                        <Card style={{ minWidth:'200px', maxWidth: '360px',border:'0'}} className='mx-auto my-5 rounded-3 col-md-1 mx-md-auto mx-md-5 col-sm-1 mx-sm-5 mx-sm-auto hover-effect'>
                            <Card.Img src={`/assets/sponsors/sp2.jpg`} alt="Card image" style={{ height:'100px', width:'100%', padding:'0', margin:'0' }} className={'imgResponsive'}/>
                            <Card.ImgOverlay style={{ padding:'0', margin:'0'}}>
                            </Card.ImgOverlay>
                        </Card>
                </div>
            </div>
            {/* <Contact className="container-fluid" /> */}
        </div>
    //     <>
            
    // <div id="outer">
    //     <header className="header order-last" id="tm-header">
    //         <nav className="navbar">
    //             <div className="collapse navbar-collapse single-page-nav">
    //                 <ul className="navbar-nav">
    //                     <li className="nav-item">
    //                         <a className="nav-link" href="#section-1"><span className="icn"><i className="fas fa-2x fa-air-freshener"></i></span> Home</a>
    //                     </li>
    //                     <li className="nav-item">
    //                         <a className="nav-link" href="#section-2"><span className="icn"><i className="fab fa-2x fa-battle-net"></i></span> About us</a>
    //                     </li>
    //                     <li className="nav-item">
    //                         <a className="nav-link" href="#section-3"><span className="icn"><i className="far fa-2x fa-images"></i></span> Our Events</a>
    //                     </li>
    //                     <li className="nav-item">
    //                         <a className="nav-link" href="#section-4"><span className="icn"><i className="far fa-2x fa-comments"></i></span> Contact</a>
    //                     </li>
    //                 </ul>
    //             </div>
    //         </nav>
    //     </header>
        
    //     <button className="navbar-button collapsed" type="button">
    //         <span className="menu_icon">
    //             <span className="icon-bar"></span>
    //             <span className="icon-bar"></span>
    //             <span className="icon-bar"></span>
    //         </span>
    //     </button>
        
    //     <main id="content-box" className="order-first">
    //         <div className="banner-section section parallax-window" data-parallax="scroll" data-image-src="img/section-1-bg.avif" id="section-1">
    //             <div className="container">
    //                 <div className="item">
    //                     <div className="logo"><img src="img/text.jpg" alt="logo" /></div>
    //                     <div className="bg-blue-transparent simple"><p style="font-family: 'Lobster', cursive;">Department of CSE , Cordially invites you to the <br /></p>
    //                         <p style="font-family: 'Dancing Script', cursive; ">2<sup>nd</sup> National Level Symposium</p>
    //                         <div className="container-fluid" id="Timer">
    //                             <div className="countdown-container">
    //                                 <div className="countdown-el days-c">
    //                                     <p className="big-text" id="days">0</p>
    //                                     <span>days</span>
    //                                 </div>
    //                                 <div className="countdown-el hours-c">
    //                                     <p className="big-text" id="hours">0</p>
    //                                     <span>hours</span>
    //                                 </div>
    //                                 <div className="countdown-el mins-c">
    //                                     <p className="big-text" id="mins">0</p>
    //                                     <span>mins</span>
    //                                 </div>
    //                                 <div className="countdown-el seconds-c">
    //                                     <p className="big-text" id="seconds">0</p>
    //                                     <span>seconds</span>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                     </div>   
    //                 </div>
    //             </div>
    //         </div>
        
    //         <section className="about-section section" id="section-2">
    //             <div className="container">
    //                 <div className="row">
    //                     <div className="item col-md-4">
    //                         <div className="tm-about-item-inner">
    //                             <div className="icn"><i className="fas fa-2x fa-icons"></i></div>
    //                             <h3>01. LEARN MORE</h3>
    //                             <p>An Intercollege National Level technical flamboyance,
    //                                 GENIO-2K22 is devised and effectuated by the Professional Association of Computer Engineers,
    //                                 Anna University Regional Campus, Coimbatore.</p>
    //                             </div>                        
    //                         </div>
    //                     <div className="item col-md-4 one">
    //                         <div className="tm-about-item-inner">
    //                             <div className="icn"><i className="fas fa-2x fa-tools"></i></div>
    //                             <h3>02. Create It</h3>
    //                             <p> With <span style="color:yellow"> 8+ events</span>, for the engineers to be,
    //                             the symposium is one of the best platform
    //                             for all the engineers to show case their talents.</p>
    //                             <p>Mark Your Calendars on <br />
    //                             <ion-icon style="color:yellow" name="calendar-number-outline"></ion-icon> <span style="color:yellow">June 9</span> </p> 
    //                         </div>
    //                     </div>
    //                     <div className="item col-md-4 two">
    //                         <div className="tm-about-item-inner">
    //                             <div className="icn"><i className="fab fa-2x fa-phoenix-framework"></i></div>
    //                             <h3>03. SPONSORS</h3>
    //                             <span>
    //                                 <img src="img/sp1.jpg" alt="" />
    //                                 <img style="width:350px" src="img/sp2.jpg" alt="" />
    //                             </span>
    //                         </div>
    //                     </div>
    //                 </div>
    //                 <div className="title">
    //                     <h2>About US</h2>
    //                 </div>
    //             </div>
    //         </section>

    //         <section className="gallery-section section parallax-window" data-parallax="scroll" data-image-src="img/section-3-bg.jpeg" id="section-3">
    //             <div className="container">
    //                 <div className="title text-right">
    //                     <h2 style="color: rgba(75, 16, 65, 0.842);font-size:45px ; font-weight: bold">Our Events</h2>
    //                 </div> 
    //                 <div className="mx-auto gallery-slider">
    //                     <figure className="effect-julia item">
    //                         <img src="img/tech.jpeg" alt="Image" />
    //                         <figcaption>
    //                             <div>
    //                                 <p>Technical & Non-Tecnical</p>
    //                             </div>
    //                             <a href="#">View more</a>
    //                         </figcaption>
    //                     </figure>
    //                     <figure className="effect-julia item">
    //                         <img src="img/pp.webp" alt="Image" />
    //                         <figcaption>
    //                             <div>
    //                                 <p>Technical: <br /> Paper presentation </p>
    //                             </div>
    //                             <a href="#">View more</a>
    //                         </figcaption>
    //                     </figure>
    //                     <figure className="effect-julia item">
    //                         <img src="img/coding.avif" alt="Image" />
    //                         <figcaption>
    //                             <div>
    //                                 <p>Technical: <br /> Coding</p>
    //                             </div>
    //                             <a href="#">View more</a>
    //                         </figcaption>
    //                     </figure>
    //                     <figure className="effect-julia item">
    //                         <img src="img/web.jpeg" alt="Image" />
    //                         <figcaption>
    //                             <div>
    //                                 <p>Technical: <br /> Web Design</p>
    //                             </div>
    //                             <a href="#">View more</a>
    //                         </figcaption>
    //                     </figure>
    //                     <figure className="effect-julia item">
    //                         <img src="img/debugging.jpeg" alt="Image" />
    //                         <figcaption>
    //                             <div>
    //                                 <p>Technical: <br /> What's Wrong? (Debugging)</p>
    //                             </div>
    //                             <a href="#">View more</a>
    //                         </figcaption>
    //                     </figure>
    //                     <figure className="effect-julia item">
    //                         <img src="img/reels.jpeg" alt="Image" />
    //                         <figcaption>
    //                             <div>
    //                                 <p>Non-Technical: <br /> Reelstagram</p>
    //                             </div>
    //                             <a href="#">View more</a>
    //                         </figcaption>
    //                     </figure>
    //                     <figure className="effect-julia item">
    //                         <img src="img/logo.webp" alt="Image" />
    //                         <figcaption>
    //                             <div>
    //                                 <p>Non-Technical: <br /> Creative Logo Design</p>
    //                             </div>
    //                             <a href="#">View more</a>
    //                         </figcaption>
    //                     </figure>
    //                     <figure className="effect-julia item">
    //                         <img src="img/marvel.jpeg" alt="Image" />
    //                         <figcaption>
    //                             <div>
    //                                 <p>Non-Technical: <br /> Marvel Trivia</p>
    //                             </div>
    //                             <a href="#">View more</a>
    //                         </figcaption>
    //                     </figure>
    //                     <figure className="effect-julia item">
    //                         <img src="img/bgmi.jpeg" alt="Image" />
    //                         <figcaption>
    //                             <div>
    //                                 <p>Non-Technical: <br /> BGMI Clash</p>
    //                             </div>
    //                             <a href="#">View more</a>
    //                         </figcaption>
    //                     </figure>
    //                 </div>
    //             </div>
    //         </section>

    //         <section className="contact-section section" id="section-4">
    //             <div className="container">
    //                 <div className="title">
    //                     <h3>Contact Us</h3>
    //                 </div>
    //                 <div className="row">
    //                     <div className="col-lg-5 col-md-6 mb-4 contact-form">
    //                         <div className="form tm-contact-item-inner">
    //                             <form action="#" method="POST">
    //                                 <div className="form-group">
    //                                     <input name="name" type="text" className="form-control" placeholder="Name" />
    //                                 </div>
    //                                 <div className="form-group">
    //                                     <input name="email" type="text" className="form-control" placeholder="Email" />
    //                                 </div>
    //                                 <div className="form-group">
    //                                     <textarea name="message" className="textarea form-control" placeholder="Message"></textarea>
    //                                 </div>
    //                                 <div className="form-group text-right">
    //                                     <input type="submit" className="btn btn-primary" value="Send it" />
    //                                 </div>
    //                             </form>
    //                         </div>
    //                     </div>
    //                     <div className="col-lg-4 col-md-6 mb-4 contact-details">
    //                         <div className="tm-contact-item-inner-2">
    //                             <p>SPOT RESISTRATION ONLY. Registration Procedures and Payment are explained in Events Page. For further information Contact Us.</p>
    //                             <ul className="font-weight-light">
    //                                 <li>
    //                                     <span className="icn"><i className="fas fa-mobile-alt"></i></span>
    //                                     <span className="lbl">Tel:</span> <a href="#">63825 53934 | 99526 64784 </a>
    //                                 </li>
    //                                 <li>
    //                                     <span className="icn"><i className="fas fa-at"></i></span>
    //                                     <span className="lbl">Email:</span> <a href="mailto:genioaurcc@gmail.com">genioaurcc@gmail.com</a>
    //                                 </li>
    //                                 <li>
    //                                     <span className="icn"><ion-icon name="logo-twitter"></ion-icon></span>
    //                                     <span className="lbl">URL:</span> <a href="https://twitter.com/Genio2k22">https://twitter.com/Genio2k22</a>
    //                                 </li>
    //                                 <li>
    //                                     <span className="icn"><ion-icon name="logo-instagram"></ion-icon></span>
    //                                     <span className="lbl">Insta:</span> <a href="https://instagram.com/genio.2k22">genio.2k22</a>
    //                                 </li>
    //                                 <li>
    //                                     <span className="icn"><ion-icon name="logo-facebook"></ion-icon></span>
    //                                     <span className="lbl">FB:</span> <a href="https://facebook.com/Genio2k22">Genio2K22</a>
    //                                 </li>
    //                             </ul>
    //                         </div>                        
    //                     </div>
    //                     <div className="col-lg-3 col-md-12 map">
    //                         {/* <!-- Map --> */}
    //                         <div className="map-outer tm-mb-40">
    //                             <div className="gmap-canvas">
    //                                 <iframe width="100%" height="400" id="gmap-canvas"
    //                                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.9491172651287!2d76.88388301532656!3d11.04244189214134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85910327ab1e3%3A0x9f7a2b4ef20fe07!2sAnna%20University%20Regional%20Campus%2C%20Coimbatore!5e0!3m2!1sen!2sin!4v1653732177820!5m2!1sen!2sin" 
    //                                 frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" title="Map"></iframe>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>                
    //             </div>
    //             <footer className="footer container container-2">
    //                 <div className="row"> 
    //                     <p className="col-sm-7">copyright  &copy;2021 Developer Tech</p>
    //                     <p className="col-sm-5 text-right design">Design by MS & RAM V.</p>
    //                 </div>
    //             </footer>
    //         </section>
    //     </main>
    // </div>
    //     </>
    )
}