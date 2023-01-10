import React from 'react';
import AL from "./Alert.module.css";
const Alertpop = ({toogle,setToogle}) => {
    const toogleHandler= () => {
        setToogle(!toogle);
    } ;
    return (
      <>
      <div className={AL.alertcont}>
          <div className={AL.alerttitle}>
              <h4 className={AL.title1}>Messages</h4>
          </div>
          <div className={AL.alertbody}>
              <h4 className={AL.hea}>Inventory moved in PRMS</h4>
              <button className={AL.btn1}>Okay</button>
              {/* <div>
                     {toogle ? (
       <button onClick={toogleHandler}  className={AL.btn1}>Okay
        </button>  
    ) :null}
    </div> */}
          </div>
          
      </div>
      </>
    )
  }
  
  export default Alertpop;