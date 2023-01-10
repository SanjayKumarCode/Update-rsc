import React, {useState} from 'react';
import input12 from './InputField.module.css'
import Popup1 from './ShowPopup/Popup1'
const InputField = () => {
    const [toogle, setToogle]=useState(false);
    const toogleHandler = () => {
        setToogle(!toogle);
    };

  return (
    <>
        <div className={input12.topmain}>
        <div className={input12.top}>
    
    <div className={input12.inFir}>
        <div className={input12.hedtop}><h6 className={input12.heading1}>WH:</h6></div>
        <div><input className={input12.whText}  type="text"  /></div>
    </div>

    <div className={input12.inFir}>
        <div className={input12.hedtop1}><h6 className={input12.heading2}>Product:</h6></div>
        <div><input className={input12.whText}  type="text"  /></div>
    </div>

    <div className={input12.inFir}>
        <div className={input12.hedtop1}><h6 className={input12.heading3}>GTIN:</h6></div>
        <div><input className={input12.whText}  type="text"  /></div>
    </div>

    <div className={input12.inFir}>
        <div className={input12.hedtop1}><h6 className={input12.heading4}>Variant:</h6></div>
        <div><input className={input12.whText}  type="text"  /></div>
    </div>

    <div className={input12.inFir}>
        <div className={input12.hedtop1}><h6 className={input12.heading5}>Lot:</h6></div>
        <div><input className={input12.whText}  type="text"  /></div>
    </div>

    <div className={input12.inFir}>
        <div className={input12.hedtop1}><h6 className={input12.heading6}>Form Loc.:</h6></div>
        <div><input className={input12.whText}  type="text"  /></div>
    </div>

    <div className={input12.inFir}>
        <div className={input12.hedtop1}><h6 className={input12.heading7}>Quantity:</h6></div>
        <div><input className={input12.whText}  type="text"  /></div>
    </div>

    <div className={input12.inFir}>
        <div className={input12.hedtop1}><h6 className={input12.heading8}>To Loc.:</h6></div>
        <div><input className={input12.whText}  type="text"  /></div>
    </div>
<div>
<button onClick={toogleHandler} className={input12.submit}>Submit Button </button> 
<div className="poptop">
    {toogle ? <Popup1 toogle={toogle} setToogle={setToogle}/>:null}   
</div>
</div> 
    </div>
   
        </div>
    </>
  )
}

export default InputField