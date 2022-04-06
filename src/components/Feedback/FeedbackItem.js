import React from 'react'
import DeleteIcon from './../shared/icons/Delete'

import Card from './../shared/UI/Card'

const FeedbackItem = ({ item, deleteFeedbackItem }) => {
  return (
    <Card>
      <div className='rating'>{item.rating}</div>
      <button
        type='button'
        className='delete'
        onClick={() => deleteFeedbackItem(item.id)}
      >
        <DeleteIcon />
      </button>

      <div className='comment'>{item.text}</div>
    </Card>
  )
}

export default FeedbackItem
