import './App.css';
import bgMainMobile from './images/bg-main-mobile.png'
import bgMainDesktop from './images/bg-main-desktop.png'

import {CardFront,CardBack}from './components/cards/Card';
import { useMediaQuery } from 'react-responsive'
import { useState } from 'react';

function App() {
    const [InputNumber, setInputNumber] = useState(false);
    const [inputIban, setInputIban] = useState(false)
    const [Active, setActive] = useState(false);

    const [CardInfo, setCardInfo] = useState({
      name: "JANE APPLESEED",
      iban: "0000 0000 0000 0000",
    })

  const isMobile = useMediaQuery({query: '(max-width: 414px)'})
  const isDesktop = useMediaQuery({query: '(min-width: 1000px)'})


  function checkInput(e, regex, assigner) {
    if(!regex.test(e.target.value)) {
      assigner(true)
    } else {
      assigner(false)
    }
  }

  const callTwo = e => {
    checkInput(e, /[0-9]/, setInputNumber)
    setCardInfo({iban: e.target.value, name: CardInfo.name})
  }

  return (
    <div className="App">


    {isDesktop && <div className='desktop-container'>
      <div className='cards_container'>
         <img src={bgMainDesktop} width="85%" height="100%" alt="bg-main" />
         <CardBack />
         <CardFront name={CardInfo.name} iban={CardInfo.iban}/>
         </div>
         <div className="desktop-inputs">
         { Active ? ( <h1>Hello</h1> ) : 
         (
         <form>
          <div className='cardholder-name'>
          <label>CARDHOLDER NAME</label>
          <input type="text" placeholder="e.g Jane Appleseed" name='name' style={{textTransform:"capitalize"}} onChange={(e) => setCardInfo({name: e.target.value, iban: CardInfo.iban})} />
          </div>
          <div className='card-number'>
          <label>CARD NUMBER</label>
          <input maxLength={16} type="text" placeholder='e.g 1234 5678 9123 0000' name='name' style={{textTransform:"uppercase"}} onChange={(e) => callTwo(e) } />
          {InputNumber && <h1>Wrong format, numbers only</h1>}
          </div>
          <div>
          <label>EXP. DATE (MM/YY) CVC</label>
          <div className='cvc'>
          <input className='month-input' maxLength={2} name='name'type="text" placeholder='MM' style={{textTransform:"uppercase"}} onChange={ (e) => checkInput(e, /^[0-9]+$/, setInputIban) } />
          <input className='year-input' maxLength={2} name='name' type="text" placeholder="YY" style={{textTransform:"uppercase"}} onChange={ (e) => checkInput(e, /^[0-9]+$/, setInputIban) }  />
          <input maxLength={3} name='name' type="text" placeholder='e.g. 123' className='cvc-number' />
          </div>
          {inputIban && <h1>test</h1>}
          </div>
         </form> )
}
          <button onClick={() => InputNumber ? null: setActive(true) } type="submit">Confirm</button>
          </div>
      </div>}


{/* Mobile */}
     {isMobile && <div>
      <div className='cards_container'>
         <img src={bgMainMobile} width="100%" alt="bg-main" />
         <CardBack />
         <CardFront name={CardInfo.name} iban={CardInfo.iban}/>
         </div>
         { Active ? ( <h1>Hello</h1> ) : 
         (
         <form>
          <div className='cardholder-name'>
          <label>CARDHOLDER NAME</label>
          <input type="text" placeholder="e.g Jane Appleseed" name='name' style={{textTransform:"capitalize"}} onChange={(e) => setCardInfo({name: e.target.value, iban: CardInfo.iban})} />
          </div>
          <div className='card-number'>
          <label>CARD NUMBER</label>
          <input maxLength={16} type="text" placeholder='e.g 1234 5678 9123 0000' name='name' style={{textTransform:"uppercase"}} onChange={(e) => callTwo(e) } />
          {InputNumber && <h1>Wrong input !</h1>}
          </div>
          <div>
          <label>EXP. DATE (MM/YY) CVC</label>
          <div className='cvc'>
          <input maxLength={2} name='name'type="text" placeholder='MM' style={{textTransform:"uppercase"}} onChange={ (e) => checkInput(e, /[0-9]/) } />
          <input maxLength={2} name='name' type="text" placeholder="YY" style={{textTransform:"uppercase"}} onChange={ (e) => checkInput(e, /[0-9]/) }  />
          <input maxLength={3} name='name' type="text" placeholder='e.g. 123' className='cvc-number' />
          </div>
          </div>
      
         </form> )
}
          <button onClick={() => InputNumber? null: setActive(true) } type="submit">Confirm</button>
      </div>}



    </div>
  )
}

export default App;
