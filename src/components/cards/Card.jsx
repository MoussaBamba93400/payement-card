import React from 'react'
import './card.css'
import bgCardFront from '../../images/bg-card-front.png'
import cardLogo from '../../images/card-logo.svg'

const CardFront = () => {
  return (
    <div className='card'>
      <img src={cardLogo} />
      <p className='iban'>0000 0000 0000 0000</p>

      <p className='card-owner'><span className='card-name'>JANE APPLESEED</span> <span>00/00</span></p>
    </div>
  )
}

const CardBack = () => {
    return (
        <div className='card-back'>    
        <p>000</p>
        </div>
    )
}

export {CardFront, CardBack}
