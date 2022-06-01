import EventCard from "../components/EventCard";
import '../styles/events.css';
// import '../App.css';

export default function Events() {
    return(
        <div className="container-fluid fill bg-dark full-height center-vertical" style={{ background:`url('/assets/bg.jpg')` }}>   
            <h4 className="mb-0 text-white center-vertical pt-sm-5">Tech</h4>
            <div className="row mx-auto flex items-center justify-center" style={{marginBottom:'0'}}>
                <a href="/events/paper-presentation" style={{ width:'fit-content', margin:'0 auto' }}>
                    <EventCard className="mt-0" title={'Paper Presentation'} imgSrc={'/assets/card/paper-presentation/images.jpeg'}/>
                </a>
                <a href="/events/coding" style={{ width:'fit-content', margin:'0 auto'  }}>
                    <EventCard className="mt-0" title={'Coding'} imgSrc={'/assets/card/coding.jpg'}/>
                </a>
                <a href="/events/web-design" style={{ width: 'fit-content', margin:'0 auto'  }}>
                    <EventCard className="mt-0" title={'Web Design'} imgSrc={'/assets/card/web.jpeg'}/>
                </a>
                <a href="/events/debugging"  style={{ width: 'fit-content', margin:'0 auto'  }}>
                    <EventCard className="mt-0" title={'Debugging'} imgSrc={'/assets/card/debugging.jpeg'}/>
                </a>
            </div>
            <h4 className="mb-0 p-0 text-white">Non-Tech</h4>
            <div className="row mx-auto mt-0">
                <a href="/events/reelstagram" style={{ width:'fit-content', margin:'0 auto'  }}>
                    <EventCard className="mt-0" title={'Reelstagram'} imgSrc={'/assets/card/reels.jpeg'}/>
                </a>
                <a href="/events/creativa-logo" style={{ width:'fit-content', margin:'0 auto'  }}>
                    <EventCard className="mt-0" title={'Creativa Logo'} imgSrc={'/assets/card/marvel.jpeg'}/>
                </a>
                <a href="/events/marvel-trivia" style={{ width:'fit-content', margin:'0 auto'  }}>
                    <EventCard className="mt-0" title={'Marvel Trivia'} imgSrc={'/assets/card/marvel.jpeg'}/>
                </a>
                <a href="/events/bgmi-clash" style={{ width:'fit-content', margin:'0 auto'  }}>
                    <EventCard className="mt-0" title={'BGMI Clash'} imgSrc={'/assets/card/bgmi.jpeg'}/>
                </a>
            </div>
        </div>
    )
}