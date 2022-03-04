import { createContext, useState } from "react";
import {v4 as uuidv4} from 'uuid'

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {id: 1,
    text: "This is item 1 from context",
    rating: 10,},

    {id: 2,
    text: "This is item 2 from context",
    rating: 10,},

    {id: 3,
    text: "This is item 3 from context",
    rating: 10,}
  ]);

  const [feedbackEdit, setFeedbackEdit] = useState({
      item: {},
      edit: false
  })

  // Add Feedback
  const addFeedback = (newFeedback) =>{
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  }

  // Delete Feedback
  const deleteFeedback = (id) => {
    if(window.confirm('Are you sure you want to delete?')){
      setFeedback(feedback.filter((item) => item.id !==id))
    }
  }

  // set item to be updated
  const editFeedback = (item) => {
      setFeedbackEdit({
          item,
          edit: true
      })
  }

  // update edited feedback
  const updateFeedback = (id, updateItem) => {
      setFeedback(
          feedback.map((item) => (item.id === id? {...item, ...updateItem}: item))
      )
  }

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
