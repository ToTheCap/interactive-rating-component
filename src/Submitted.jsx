import thankYouIcon from './assets/illustration-thank-you.svg'

const Submitted = ({ rating }) => {
  return (
    <div className='submitted'>
      <img src={thankYouIcon} alt='phone' className='thank-you-icon' />
      <p className='result'>You selected {rating} out of 5</p>
      <h1>Thank you!</h1>
      <p>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
    </div>
  )
}

export default Submitted;