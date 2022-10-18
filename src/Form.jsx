import starIcon from './assets/icon-star.svg'

const Form = ({ rating, setRating, setIsSubmitted }) => {
  const ratingCirlces = []
  for (let i = 1; i <= 5; i++) {
    ratingCirlces.push(
      <div
        key={i}
        className={`circle rating ${rating === i && 'selected'}`}
        onClick={(e) => setRating(i)}
      >
        {i}
      </div>
    )
  }

  return (
    <>
      <div className='circle'>
        <img src={starIcon} alt='star' />
      </div>
      <div className='text-div'>
        <h1>How did we do?</h1>
        <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
      </div>
      <div className='scale'>
        {ratingCirlces}
      </div>
      <button
        className='submit'
        disabled={Boolean(!rating)}
        onClick={() => setIsSubmitted(true)}
      >
        SUBMIT
      </button>
    </>
  )
}

export default Form