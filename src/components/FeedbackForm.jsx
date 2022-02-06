import React from 'react'
import { useState } from 'react'
import Card from './shared/Card'
import Button from './shared/Button';

function FeedbackForm() {
const [text, setText] = useState('');
const [btnDisabled, setBtnDisabled] = useState(true);
const [message, setMessage] = useState('');
const handleTextChange = (e) => {
    if(text===''){
        setBtnDisabled(true)
        setMessage(null)
    }else if(text !=='' && text.trim().length<10){
        setBtnDisabled(true)
        setMessage('Text must be at least 10 characters')
    }else{
        setBtnDisabled(false)
        setMessage(null)
    }
    setText(e.target.value);
}

  return (
    <Card>
        <form action="">
        <h2>How would your rate our services?</h2>
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