import EventCard from "../components/EventCard";
import '../styles/events.css';
// import '../App.css';

export default function Events() {
    return(
        <div className="container-fluid fill bg-dark full-height center-vertical">
            <div className="row flex flex-wrap">
                <a href="/events/paper-presentation" style={{ width:'fit-content' }}>
                    <EventCard title={'Paper Presentation'} text={'Text 1'} imgSrc={'/assets/card/marvel.jpeg'}/>
                </a>
                <a href="/events/coding" style={{ width:'fit-content' }}>
                    <EventCard title={'Coding'} text={'Text 1'} imgSrc={'/assets/card/marvel.jpeg'}/>
                </a>
                <a href="/events/web-design" style={{ width: 'fit-content' }}>
                    <EventCard title={'Web Design'} text={'Text 1'} imgSrc={'/assets/card/marvel.jpeg'}/>
                </a>
                <a href="/events/debugging"  style={{ width: 'fit-content' }}>
                    <EventCard title={'Debugging'} text={'Text 1'} imgSrc={'/assets/card/marvel.jpeg'}/>
                </a>
            </div>
            <div className="row">
                <a href="/events/reelstagram" style={{ width:'fit-content' }}>
                    <EventCard title={'Reelstagram'} text={'Text 1'} imgSrc={'/assets/card/marvel.jpeg'}/>
                </a>
                <a href="/events/creativa-logo" style={{ width:'fit-content' }}>
                    <EventCard title={'Creativa Logo'} text={'Text 1'} imgSrc={'/assets/card/marvel.jpeg'}/>
                </a>
                <a href="/events/marvel-trivia" style={{ width:'fit-content' }}>
                    <EventCard title={'Marvel Trivia'} text={'Text 1'} imgSrc={'/assets/card/marvel.jpeg'}/>
                </a>
                <a href="/events/bgmi-clash" style={{ width:'fit-content' }}>
                    <EventCard title={'BGMI Clash'} text={'Text 1'} imgSrc={'/assets/card/marvel.jpeg'}/>
                </a>
            </div>
        </div>
    )
}