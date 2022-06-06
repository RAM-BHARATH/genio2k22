import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import * as ROUTES from './constants/routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarComp from './components/NavBarComp';
import Contact from './components/Contact';

const Home = lazy(() => import('./pages/home'));
const Events = lazy(() => import('./pages/events'));
const EventPage = lazy(() => import('./pages/eventPage'));
const PaperPresentation = lazy(() => import('./pages/paperPresentation'));

const content = [
  {
    eventId: 0,
    title: 'Paper Presentation',
    descText: 'Impress us with your innovative ideas',
    cardImgSrc: '/assets/card/paper-presentation/images.jpeg',
    contact: [{ 'name': 'Karthik S', phoneNumber: '97517 76969' }, { 'name': 'Arun Mani', phoneNumber: '63817 36596' }],
    time:"10:35am - 11:35am"
  },
  {
    eventId: 1,
    title: 'Coding',
    descText: 'Show off your skills',
    bgSrc: '/assets/coding.jpeg',
    cardImgSrc: '/assets/card/coding.jpg',
    contact: [{ 'name': 'Vignesh', phoneNumber: '90804 78472' }, { 'name': 'Rinisha', phoneNumber: '99524 15564' }],
    rules: [
      "Two rounds will be conducted",
      "Top 10 scorers from the first round will compete in the 2nd round for the top 3 positions",
      "Each challenge has a pre-determined score",
      "A participant’s score depends on the number of test cases a participant’s code submission successfully passes",
      "If a participant submits more than one solution per challenge, then the participant’s score will reflect the highest score achieved. In a game challenge, the participant's score will reflect the last code submission",
      "Participants are ranked by score. If two or more participants achieve the same score, then the tie is broken by the total time taken to submit the last solution resulting in a higher score",
      "Criteria - Everyone must have a hackerrank account for participating in the contest"
    ],
    time:"10:40am - 12:30pm"
  },
  {
    eventId: 2,
    title: 'Web Design',
    descText: "\“There are three responses to a piece of design– yes, no and wow . WOW! Is the one to aim for.\”",
    bgSrc: '/assets/coding.jpeg',
    cardImgSrc: '/assets/card/web.jpeg',
    contact: [{ 'name': 'Naveen MS', phoneNumber: '79040 45699' }, { 'name': 'Kabilan', phoneNumber: '76399 02510' }],
    rules: [
      "Participants are requested to bring their personal devices for this event.",
      "You will be assigned to a task and you have to design a web page based on the task given.",
      "The task will be posted on Genio’s GitHub page.",
      "As you are going to host your web page live, it is must for a developer/designer to know about Version Control Systems",
      "Learn Git & GitHub (https://youtu.be/RGOj5yH7evk).",
      "Evaluation is based on Mobile first response.",
      "Duration for this event is based on your convenience(Max. 1 Hr 30 mins)",
      "Finally you have to push your code on GitHub (Instructions will be given on the task) and if possible make it live with a Readme.md."
    ],
    time:"12:00am - 1:15pm"
  },
  {
    eventId: 3,
    title: 'Debugging',
    descText: 'What\'s the problem here?',
    bgSrc: '/assets/debugging.jpeg',
    cardImgSrc: '/assets/card/debugging.jpeg',
    contact: [{ 'name': 'Arunambika', phoneNumber: '78996 68979' }, { 'name': 'Eswaran', phoneNumber: '88071 01772' }],
    rules:[
      "A team can be max of 3 members",
      "Mobile phones not allowed",
      "Programming languages C, JAVA, Python",
      "Based on the contestants preliminary will be taken individually",
      "Preliminary round consists of MCQs",
      "Team score will be calculated according to the individual scores and then the team will be qualified to the next round",
      "Main round consists of problems with medium level difficulty",
        "1st, 2nd and 3rd place will be selected according to the points scored",
        "If tied according to points then time will be considered to choose the places"
    ],
    time:"03:00pm - 04:00pm"
  },
  {
    eventId: 4,
    title: 'Reelstagram',
    descText: 'What\'s the problem here?',
    bgSrc: '/assets/coding.jpeg',
    cardImgSrc: '/assets/card/reels.jpeg',
    contact: [{ 'name': 'Rithick KV', phoneNumber: '93602 73339' }, { 'name': 'Diwahar S', phoneNumber: '80563 21275' }],
    rules:[
      "Topic will be given",
      "Reels should be done within the college premises",
      "Duration of reels is maximum upto 1 min",
      "1 hr(max.) will be given to complete the reels",
      "It must uploaded on Instagram in collaboration with our Instagram page 'genio2k22'"
    ],
    time:"10:00am - 1:00 pm"
  },
  {
    eventId: 5,
    title: 'Creativa Logo',
    descText: 'What\'s the problem here?',
    bgSrc: '/assets/logo-design.jpg',
    cardImgSrc: '/assets/card/logo-design.jpg',
    contact: [{ 'name': 'Bharathi Shavakkar', phoneNumber: '76769 77989' }, { 'name': 'Arrush', phoneNumber: '63820 34804' }],
    rules:[
      "Plagiarism is strictly not allowed",
      "Produce more than different variations of your logo(Recommended)",
      "Explain your inspiration and main focus of creating the logo in under 100 words",
      "Duration of the event: 45 mins."
    ],
    time:"2:20pm - 3:20pm"
  },
  {
    eventId: 6,
    title: 'Marvel Trivia',
    descText: 'Are you a Marvel fan? Prove it by winning the ultimate Marvel quiz',
    bgSrc: '/assets/marvel.jpeg',
    cardImgSrc: '/assets/card/marvel.jpeg',
    contact: [{ 'name': 'Rajesh', phoneNumber: '77082 27327' }, { 'name': 'Ranjanaadevi', phoneNumber: '97912 98241' }],
    rules:[
      "All participants are asked to install KAHOOT app on your mobile",
      "Questions will be displayed on the screen and you have to answer through the app",
      "A team may contain maximum of two members",
      "A team must use one mobile device during the event",
      "Correct and rapid answers are considered and evaluated"
    ],
    time:"3:00pm - 4:00pm"
  },
  {
    eventId: 7,
    title: 'BGMI Clash',
    descText: 'What\'s the problem here?',
    bgSrc: '/assets/coding.jpeg',
    cardImgSrc: '/assets/card/bgmi.jpeg',
    contact: [{ 'name': 'Navin Raj', phoneNumber: '93602 70913' }, { 'name': 'Harish', phoneNumber: '83444 46333' }],
    rules:[
      "Have to register the team name 1 hour  before the match starts",
      "Maximum 4 members per team",
      "Hacking techniques are not allowed",
      "All players must have installed the newest version of the game installed in order to participate in the event", 
      "Teams are responsible for their own technical issues (hardware/internet)",
      "Matches will not be rescheduled because of technical issues and matches will be played nevertheless"    
    ],
    time:"2:00pm - 2:30pm"
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
        <Route path={ROUTES.PAPER_PRESENTATION} element={<PaperPresentation title={content[0].title} descText={content[0].descText} bgSrc={content[0].bgSrc} cardImgSrc={content[0].cardImgSrc} contact={content[0].contact} time={content[0].time} />} />
        <Route 
          path={ROUTES.CODING} 
          element={<EventPage title={content[1].title} 
            descText={content[1].descText} bgSrc={content[1].bgSrc} 
            cardImgSrc={content[1].cardImgSrc} contact={content[1].contact} 
            rules={content[1].rules}
            time={content[1].time}
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
            time={content[2].time}
          />} 
        />
        <Route path={ROUTES.DEBUGGING} element={<EventPage title={content[3].title} descText={content[3].descText} bgSrc={content[3].bgSrc} cardImgSrc={content[3].cardImgSrc} contact={content[3].contact} rules={content[3].rules} time={content[3].time}/>} />
        <Route path={ROUTES.REELSTAGRAM} element={<EventPage title={content[4].title} descText={content[4].descText} bgSrc={content[1].bgSrc} cardImgSrc={content[4].cardImgSrc} contact={content[4].contact} rules={content[4].rules} time={content[4].time}/>} />
        <Route path={ROUTES.CREATIVA_LOGO} element={<EventPage title={content[5].title} descText={content[5].descText} bgSrc={content[1].bgSrc} cardImgSrc={content[5].cardImgSrc} contact={content[5].contact} rules={content[5].rules} time={content[5].time} />} />
        <Route path={ROUTES.MARVEL_TRIVIA} element={<EventPage title={content[6].title} descText={content[6].descText} bgSrc={content[1].bgSrc} cardImgSrc={content[6].cardImgSrc} contact={content[6].contact} rules={content[6].rules} time={content[6].time} />} />
        <Route path={ROUTES.BGMI_CLASH} element={<EventPage title={content[7].title} descText={content[7].descText} bgSrc={content[1].bgSrc} cardImgSrc={content[7].cardImgSrc} contact={content[7].contact} rules={content[7].rules} time={content[7].time}/>} />
      </Routes>
    </Router>
  );
}

export default App;