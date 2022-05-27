import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import * as ROUTES from './constants/routes';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = lazy(() => import('./pages/home'));
const Events = lazy(() => import('./pages/events'));
const EventPage = lazy(() => import('./pages/eventPage'));

const content = [
  {
    eventId:0,
    title:'Paper Presentation',
    descText:'Impress us with your innovative ideas'
  },
  {
    eventId:1,
    title:'Coding',
    descText:'Show off your skills',
    bgSrc:'/assets'
  },
  {
    eventId: 2,
    title: 'Web Design',
    descText: 'Amaze us with your creativity'
  },
  {
    eventId:3,
    title:'Debugging',
    descText:'What\'s the problem here?'
  },
  {
    eventId:4,
    title:'Reelstagram',
    descText:'What\'s the problem here?'
  },
  {
    eventId:5,
    title:'Debugging',
    descText:'What\'s the problem here?'
  },
  {
    eventId:6,
    title:'Debugging',
    descText:'What\'s the problem here?'
  },
  {
    eventId:7,
    title:'Debugging',
    descText:'What\'s the problem here?'
  },
]

function App() {
  return (
    <Router>
      <ul>
        <a href="/events/"><li>Events</li></a>
        <a href="/events/coding"><li>Coding</li></a>
        <a href="/events/debugging"><li>Debugging</li></a>
      </ul>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.EVENTS} element={<Events />}/>
        <Route path={ROUTES.EVENT_PAGE} element={<EventPage />} />
        <Route path={ROUTES.CODING} element={<EventPage title={content[0].title} descText={content[0].descText}/>} />
        <Route path={ROUTES.DEBUGGING} element={<EventPage title={'Debugging'}/>} />
      </Routes>
    </Router>
  );
}

export default App;