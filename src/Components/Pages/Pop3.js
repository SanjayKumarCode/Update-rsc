import React from 'react'
import './Pop3.css';

const Pop3 = () => {
  return (

        <>
    <div className='eee-sn'>
        <div className='aaa-sn'>
            <h1 style={{ color: "white", fontSize: "medium" }}>Select HU Number / Pick Order</h1>
            </div>
            <div className='qwe-sn'>
            <input type="radio" id="rd1" name="Number" value="HU Number" Style="height:20px; width:20px; vertical-align: middle;"/> HU Number
            <input type="radio" id="rd2" name="order" value="Pick Order" Style="height:20px; width:20px; vertical-align: middle;"/> Pick Order
            </div>
        
            </div>
        </>
  )
}

export default Pop3