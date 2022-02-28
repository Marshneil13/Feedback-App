import {v4 as uuidv4} from 'uuid'
import { useState } from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import feedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import {FeedbackProvider} from './context/FeedbackContext';//curly braces because FeedbackProvider is not a default export
import AboutPage from './pages/AboutPage';
import AboutIconLink from './components/AboutIconLink';

function App() {
  const [feedback, setFeedback] = useState(feedbackData);
  const deleteFeedback = (id) => {
    if(window.confirm('Are you sure you want to delete?')){
      setFeedback(feedback.filter((item) => item.id !==id))
    }
  }

  const addFeedback = (newFeedback) =>{
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  }

  return (
    <FeedbackProvider>
    <Router>
      <Header />
      <Routes>
          <Route exact path='/' element={
            <>
              <FeedbackForm handleAdd={addFeedback}/>
              <FeedbackStats feedback={feedback}/>
              <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
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
