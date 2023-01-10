import React from 'react';
import AL from "./Popup1.module.css";

const Alertpop = ({toogle,setToogle}) => {
    
    const toogleHandler= () => {
        setToogle(!toogle);
    } ;
  return (
    <>
    <div className={AL.tapmain}>
    <div className={AL.top}>
    <div className={AL.alertcont}>
        <div className={AL.alerttitle}>
            <h4 className={AL.title1}>Messages</h4>
        </div>
        <div className={AL.alertbody}>
            <h4>Inventory moved in PRMS</h4>
            <div>
                     {toogle ? (
       <button onClick={toogleHandler}  className={AL.btn1}>Okay
        </button>
     
       
    ) :null}
    </div>

        </div>
        
    </div>
    </div>

    </div>
    </>
  )
}

export default Alertpop;