import React from 'react'
import './card.css'
import cardLogo from '../../images/card-logo.svg'

const CardFront = ({name, iban}) => {
  let Iban = iban.match(/.{1,4}/g) ?? []
  console.log(Iban)
  return (
    <div className='card'>
      <img src={cardLogo} alt="logo"/>
      <p className='iban'>{Iban}</p>

      <p className='card-owner'><span className='card-name'>{name.toUpperCase()}</span> <span>00/00</span></p>
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
