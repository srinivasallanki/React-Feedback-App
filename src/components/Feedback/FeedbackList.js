import React from 'react'
import FeedbackItem from './FeedbackItem'

const FeedbackList = ({ feedback, deleteFeedbackItem }) => {
  const renderList = feedback.map((item) => {
    return (
      <FeedbackItem
        key={item.id}
        item={item}
        deleteFeedbackItem={deleteFeedbackItem}
      />
    )
  })
  return (
    <>
      <div className='box-container mt-50'>{renderList}</div>
    </>
  )
}

export default FeedbackList
