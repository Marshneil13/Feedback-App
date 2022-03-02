import {v4 as uuidv4} from 'uuid'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import {FeedbackProvider} from './context/FeedbackContext';//curly braces because FeedbackProvider is not a default export
import AboutPage from './pages/AboutPage';
import AboutIconLink from './components/AboutIconLink';

function App() {

  return (
    <FeedbackProvider>
    <Router>
      <Header />
      <Routes>
          <Route exact path='/' element={
            <>
              <FeedbackForm />
              <FeedbackStats/>
              <FeedbackList />
            </>
          } />
          <Route exact path='/about' element={<AboutPage />}/>
      </Routes>
      <AboutIconLink/>
    </Router>
    </FeedbackProvider>
  );
}

export default App;
