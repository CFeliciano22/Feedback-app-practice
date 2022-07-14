import React from 'react'

function FeedbackStats({feedback}) {
// calculate the average rating
    const average = feedback.reduce((total, item) => total + item.rating, 0)/feedback.length


  return (
    <div className='feedback-stats'>
        <h4>{feedback.length} Reviews</h4>
        <h4>Average Rating: {average}</h4>
    </div>
  )
}

export default FeedbackStats