import React from 'react'
import Card from './shared/Card'
import {useState, useContext, useEffect} from 'react'
import Button from './shared/Button'
import RatingSelect from './RatingSelect' 
import FeedbackContext from '../context/FeedbackContext'



function FeedbackForm() {
    const [text, setText] = useState('')
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')
    const [rating, setRating] = useState(0)

    const {addFeedback, feedbackEdit} = useContext(FeedbackContext)

    useEffect(() => {
        if (feedbackEdit.edit === true) {
            setBtnDisabled(false)
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
        } else {
            setText('')
            setRating(0)
        }
    },[feedbackEdit])

    const handleTextChange = (e) => {
        if (text=== '') {
            setBtnDisabled(true)
            setMessage(null)
        } else if (text !== '' && text.trim().length <= 10) {
            setBtnDisabled(true)
            setMessage('Feedback must be at least 10 characters')
        } else {
            setBtnDisabled(false)
            setMessage(null)
        }

        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(text.trim().length > 10) {
           const newFeedback = {
                text,
                rating
           }
           addFeedback(newFeedback)
              setText('')
        }
    }

  return (
   <Card>
       <form onSubmit={handleSubmit}>
           <h2>How would you rate your service with us?</h2>
              <RatingSelect select={(rating)=> setRating(rating)}/>
              <div className='input-group'>
                  <input onChange={handleTextChange} value={text} type='text' placeholder='Write a review'/>
                  <Button 
                    type='submit'
                    isDisabled={btnDisabled}>Send</Button>
              </div>
              {message && <div className='message'>{message}</div>}
       </form>
   </Card>
  )
}

export default FeedbackForm