import { useState } from 'react'

import feedbackList from './data/FeedbackData'
import FeedbackForm from './components/Feedback/FeedbackForm'
import FeedbackList from './components/Feedback/FeedbackList'
import Header from './components/shared/Header'

function App() {
  const [feedback, setFeedback] = useState(feedbackList)

  const deleteFeedback = (id) => {
    const newList = feedback.filter((item) => item.id !== id)
    setFeedback(newList)
  }

  // Add New
  const addNewFeedback = (newfeedback) => {
    console.log(newfeedback)
    setFeedback((prev) => [newfeedback, ...prev])
  }
  return (
    <>
      <Header />
      <FeedbackForm onNewFeedback={addNewFeedback} />
      <FeedbackList feedback={feedback} deleteFeedbackItem={deleteFeedback} />
    </>
  )
}

export default App
