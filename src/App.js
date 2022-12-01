import './App.css';
import bgMainMobile from './images/bg-main-mobile.png'
import {CardFront,CardBack}from './components/cards/Card';
import { useMediaQuery } from 'react-responsive'
import { useState } from 'react';

function App() {
    const [Input, setInput] = useState(false)

    function checkInput(e, regex) {
      if(!regex.test(e.target.value)) {
        setInput(true)
      } else {
        setInput(false)
      }
      
    }


  const isMobile = useMediaQuery({query: '(max-width: 414px)'})
  return (
    <div className="App">
     {isMobile && <div>
      <div className='cards_container'>
         <img src={bgMainMobile} width="100%" alt="bg-main" />
         <CardBack />
         <CardFront />
         </div>
         <form>
          <div className='cardholder-name'>
          <label>CARDHOLDER NAME</label>
          <input type="text" placeholder="e.g Jane Appleseed" name='name' style={{textTransform:"capitalize"}}  />
          </div>
          <div className='card-number'>
          <label>CARD NUMBER</label>
          <input type="number" placeholder='e.g 1234 5678 9123 0000' name='name' style={{textTransform:"uppercase"}}/>
          </div>
          <div>
          <label>EXP. DATE (MM/YY) CVC</label>
          <div className='cvc'>
          <input maxLength={2} name='name'type="text" placeholder='MM' style={{textTransform:"uppercase"}} onChange={ (e) => checkInput(e, /[0-9]/) } />
          <input maxLength={2} name='name' type="text" placeholder="YY" style={{textTransform:"uppercase"}} onChange={ (e) => checkInput(e, /[0-9]/) } />
          <input name='name' className='cvc-number'/>
          </div>
          </div>
          {Input && <h1>Wrong input !</h1>}
         </form>
      </div>}
    </div>
  );
}

export default App;
