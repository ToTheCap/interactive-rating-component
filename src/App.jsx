import { useState } from 'react'
import Form from './Form'
import Submitted from './Submitted'


const App = () => {
  const [rating, setRating] = useState(0)
  const [isSubmitted, setIsSubmitted] = useState(false)

  console.log(rating);

  return (
    <div className='App'>
      {isSubmitted
        ? <Submitted rating={rating} />
        : <Form rating={rating} setRating={setRating} setIsSubmitted={setIsSubmitted} />
      }
    </div>
  )
}

export default App