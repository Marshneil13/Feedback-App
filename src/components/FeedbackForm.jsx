import React from 'react'
import RatingSelect from './RatingSelect';
import { useState } from 'react'
import Card from './shared/Card'
import Button from './shared/Button';

function FeedbackForm({handleAdd}) {
const [text, setText] = useState('');
const [rating, setRating] = useState(10);
const [btnDisabled, setBtnDisabled] = useState(true);
const [message, setMessage] = useState('');
const handleTextChange = (e) => {
    if(e.target.value===''){
        setBtnDisabled(true)
        setMessage(null)
    }else if(e.target.value !=='' && e.target.value.trim().length<10){
        setMessage('Text must be at least 10 characters')
        setBtnDisabled(true)
    }else{
        setBtnDisabled(false)
        setMessage(null)
    }
    setText(e.target.value);

}

  const handleSubmit = (e) => {
      e.preventDefault()
      if(text.trim().length > 10){
          const newFeedback = {
              text,
              rating
          }
          handleAdd(newFeedback);
          setText('')
      }
  }

  return (
    <Card>
        <form onSubmit={handleSubmit}>
        <h2>How would your rate our services?</h2>
        <RatingSelect select={(rating) => setRating(rating)}/>
    <div className="input-group">
        <input onChange={handleTextChange} 
        type="text" placeholder='Write a review' value={text}/>
        <Button type="submit" isDisabled={btnDisabled} version="secondary">Send</Button>
    </div>
    {message && <div className='message'>{message}</div>}
    </form>
    </Card>
  )
}

export default FeedbackForm