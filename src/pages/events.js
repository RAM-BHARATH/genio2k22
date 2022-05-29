import EventCard from "../components/EventCard";
import '../styles/events.css';
// import '../App.css';

export default function Events() {
    return(
        <div className="container-fluid fill bg-dark full-height center-vertical" style={{ background:`url('/assets/bg.jpg')` }}>
            
            <h3 className="mb-0 p-0">Tech</h3>
            <div className="row mx-auto flex items-center justify-center">
                <a href="/events/paper-presentation" style={{ width:'fit-content' }}>
                    <EventCard title={'Paper Presentation'} text={'Text 1'} imgSrc={'/assets/card/marvel.jpeg'}/>
                </a>
                <a href="/events/coding" style={{ width:'fit-content' }}>
                    <EventCard title={'Coding'} text={'Text 1'} imgSrc={'/assets/card/coding.jpg'}/>
                </a>
                <a href="/events/web-design" style={{ width: 'fit-content' }}>
                    <EventCard title={'Web Design'} text={'Text 1'} imgSrc={'/assets/card/web.jpeg'}/>
                </a>
                <a href="/events/debugging"  style={{ width: 'fit-content' }}>
                    <EventCard title={'Debugging'} text={'Text 1'} imgSrc={'/assets/card/debugging.jpeg'}/>
                </a>
            </div>
            <h3>Non-Tech</h3>
            <div className="row mx-auto">
                <a href="/events/reelstagram" style={{ width:'fit-content' }}>
                    <EventCard title={'Reelstagram'} text={'Text 1'} imgSrc={'/assets/card/reels.jpeg'}/>
                </a>
                <a href="/events/creativa-logo" style={{ width:'fit-content' }}>
                    <EventCard title={'Creativa Logo'} text={'Text 1'} imgSrc={'/assets/card/marvel.jpeg'}/>
                </a>
                <a href="/events/marvel-trivia" style={{ width:'fit-content' }}>
                    <EventCard title={'Marvel Trivia'} text={'Text 1'} imgSrc={'/assets/card/marvel.jpeg'}/>
                </a>
                <a href="/events/bgmi-clash" style={{ width:'fit-content' }}>
                    <EventCard title={'BGMI Clash'} text={'Text 1'} imgSrc={'/assets/card/bgmi.jpeg'}/>
                </a>
            </div>
        </div>
    )
}