import React from 'react'
import pop from './Pop3.module.css';

const Pop3 = () => {
  return (

        <>
    <div className={pop.eeesn}>
        <div className={pop.aaasn}>
            <h1 style={{ color: "white", fontSize: "medium" }}>Select HU Number / Pick Order</h1>
            </div>
            <div className={pop.qwesn}>
            <input type="radio" id="rd1" name="Number" value="HU Number" Style="height:20px; width:20px; vertical-align: middle;"/> HU Number <br/>
            <input type="radio" id="rd2" name="order" value="Pick Order" Style="height:20px; width:20px; vertical-align: middle;"/> Pick Order
            </div>
        
            </div>
        </>
  )
}

export default Pop3