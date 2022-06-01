import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import * as ROUTES from './constants/routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarComp from './components/NavBarComp';
import Contact from './components/Contact';

const Home = lazy(() => import('./pages/home'));
const Events = lazy(() => import('./pages/events'));
const EventPage = lazy(() => import('./pages/eventPage'));

const content = [
  {
    eventId: 0,
    title: 'Paper Presentation',
    descText: 'Impress us with your innovative ideas',
    cardImgSrc: '/assets/card/paper-presentation/images.jpeg',
    contact: [{ 'name': 'Karthik S', phoneNumber: '9751776969' }, { 'name': '', phoneNumber: '' }]
  },
  {
    eventId: 1,
    title: 'Coding',
    descText: 'Show off your skills',
    bgSrc: '/assets/coding.jpeg',
    cardImgSrc: '/assets/card/coding.jpg',
    contact: [{ 'name': 'Vignesh', phoneNumber: '9080478472' }, { 'name': 'Arun Mani', phoneNumber: '' }]
  },
  {
    eventId: 2,
    title: 'Web Design',
    descText: "\“There are three responses to a piece of design – yes , no and wow . WOW! Is the one to aim for.\”",
    bgSrc: '/assets/coding.jpeg',
    cardImgSrc: '/assets/card/web.jpeg',
    contact: [{ 'name': 'Naveen MS', phoneNumber: '7904045699' }, { 'name': 'Kabilan', phoneNumber: '7639902510' }],
    rules: [
      "Participants are requested to bring their personal devices for this event.",
      "You will be assigned to a task and you have to design a web page based on the task given.",
      "The task will be posted on Genio’s GitHub page.",
      "As you are going to host your web page live, it is must for a developer/designer to know about Version Control Systems",
      "Learn Git & GitHub (https://youtu.be/RGOj5yH7evk).",
      "Evaluation is based on Mobile first response.",
      "Duration for this event is based on your convenience(Max. 1 Hr 30 mins)",
      "Finally you have to push your code on GitHub (Instructions will be given on the task) and if possible make it live with a Readme.md."
    ]
  },
  {
    eventId: 3,
    title: 'Debugging',
    descText: 'What\'s the problem here?',
    bgSrc: '/assets/debugging.jpeg',
    cardImgSrc: '/assets/card/debugging.jpeg',
    contact: [{ 'name': 'Arunambika', phoneNumber: '7899668979' }, { 'name': 'Eswaran', phoneNumber: '8807101772' }]
  },
  {
    eventId: 4,
    title: 'Reelstagram',
    descText: 'What\'s the problem here?',
    bgSrc: '/assets/coding.jpeg',
    cardImgSrc: '/assets/card/reels.jpeg',
    contact: [{ 'name': 'Rithick KV', phoneNumber: '9360273339' }, { 'name': 'Yogananth R', phoneNumber: '7395846642' }]
  },
  {
    eventId: 5,
    title: 'Creativa Logo',
    descText: 'What\'s the problem here?',
    bgSrc: '/assets/coding.jpeg',
    cardImgSrc: '',
    contact: [{ 'name': 'Bharathi Shavakkar', phoneNumber: '7676977989' }, { 'name': 'Arrush', phoneNumber: '6382034804' }]
  },
  {
    eventId: 6,
    title: 'Marvel Trivia',
    descText: 'Are you a Marvel fan? Prove it by winning the ultimate Marvel quiz',
    bgSrc: '/assets/marvel.jpeg',
    cardImgSrc: '/assets/card/marvel.jpeg',
    contact: [{ 'name': 'Rajesh', phoneNumber: '7708227327' }, { 'name': 'Prawin VG', phoneNumber: '9952664784' }]
  },
  {
    eventId: 7,
    title: 'BGMI Clash',
    descText: 'What\'s the problem here?',
    bgSrc: '/assets/coding.jpeg',
    cardImgSrc: '/assets/card/bgmi.jpeg',
    contact: [{ 'name': 'Navin Raj', phoneNumber: '9360270913' }, { 'name': 'Harish', phoneNumber: '8344446333' }]
  },
]

function App() {
  return (
    <Router>
      <NavBarComp />
      <Routes>
        <Route path={ROUTES.HOME} element={
          <>
            <Home />
            <Contact />
          </>} />
        <Route path={ROUTES.EVENTS} element={<Events />} />
        <Route path={ROUTES.EVENT_PAGE} element={<EventPage />} />
        <Route path={ROUTES.PAPER_PRESENTATION} element={<EventPage title={content[0].title} descText={content[0].descText} bgSrc={content[0].bgSrc} cardImgSrc={content[0].cardImgSrc} contact={content[0].contact} />} />
        <Route 
          path={ROUTES.CODING} 
          element={<EventPage title={content[1].title} 
            descText={content[1].descText} bgSrc={content[1].bgSrc} 
            cardImgSrc={content[1].cardImgSrc} contact={content[1].contact} 
          />} 
        />
        <Route 
          path={ROUTES.WEB_DESIGN} 
          element={
            <EventPage title={content[2].title} 
            descText={content[2].descText} 
            bgSrc={content[2].bgSrc} 
            cardImgSrc={content[2].cardImgSrc} 
            contact={content[2].contact} 
            rules={content[2].rules}
          />} 
        />
        <Route path={ROUTES.DEBUGGING} element={<EventPage title={content[3].title} descText={content[3].descText} bgSrc={content[3].bgSrc} cardImgSrc={content[3].cardImgSrc} contact={content[3].contact} />} />
        <Route path={ROUTES.REELSTAGRAM} element={<EventPage title={content[4].title} descText={content[4].descText} bgSrc={content[1].bgSrc} cardImgSrc={content[4].cardImgSrc} contact={content[4].contact} />} />
        <Route path={ROUTES.CREATIVA_LOGO} element={<EventPage title={content[5].title} descText={content[5].descText} bgSrc={content[1].bgSrc} cardImgSrc={content[5].cardImgSrc} contact={content[5].contact} />} />
        <Route path={ROUTES.MARVEL_TRIVIA} element={<EventPage title={content[6].title} descText={content[6].descText} bgSrc={content[1].bgSrc} cardImgSrc={content[6].cardImgSrc} contact={content[6].contact} />} />
        <Route path={ROUTES.BGMI_CLASH} element={<EventPage title={content[7].title} descText={content[7].descText} bgSrc={content[1].bgSrc} cardImgSrc={content[7].cardImgSrc} contact={content[7].contact} />} />
      </Routes>
    </Router>
  );
}

export default App;