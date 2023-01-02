import React from "react";
import lastfile from "./Last.module.css";
import { BiBarcodeReader } from "react-icons/bi";


const Last = () => {
  
  return (
    <>
      <div className={lastfile.coantainersa}>
        <div>
          <a
            href="https://usecheck.com/"
            className={lastfile.btnshinesa}
            target="_blank"
          >
            Display TO / Work Order
          </a>
        </div>

        <form>
          <div className={lastfile.qrmain}>
            <div  className={lastfile.qrcode}>
              <BiBarcodeReader size={20} className={lastfile.qrcode1} />
              <h1>SCAN HU/PICK NUMBER</h1>
            </div>
            <input type="text" placeholder="1T000100657" />
          </div>

          <div className={lastfile.samaininputs}>
            <div>
              <label style={{color:"black"}}>HU Number</label>
              <br />
              <input type="hello" />
            </div>
            <div>
              <label style={{color:"black"}}>Pick Order</label>
              <br />
              <input type="hello" />
            </div>
            <div>
              <label style={{color:"black"}}>Transform Order Number #</label>
              <br />
              <input type="hello" />
            </div>
            <div>
              <label style={{color:"black"}}>Transform Order Status</label>
              <br />
              <input type="hello" />
            </div>
            <div>
              <label style={{color:"black"}}>Sales Order #</label>
              <br />
              <input type="hello" />
            </div>
          </div>

          <div className={lastfile.samaininputs2}>
            <div>
              <label style={{color:"black"}}>Enter Delivery</label>
              <br />
              <input type="hello" />
            </div>
            <div>
              <label style={{color:"black"}}>Ship To Country</label>
              <br />
              <input type="hello" />
            </div>
            <div>
              <label style={{color:"black"}}>Transformation Site</label>
              <br />
              <input type="hello" />
            </div>
          </div>

          <div className={lastfile.TotalNumbersa}>
  <h6 className={lastfile.totalNumbar}> Total Number of Item (0)</h6>
</div>
 
          <div className={lastfile.saemtybox}>
      
            <div className={lastfile.satobar}>
              <input type="checkbox" />
            </div>
            <div className={lastfile.saboxcontent}>
              <p>No data</p>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Last;