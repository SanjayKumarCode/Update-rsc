import React from "react";
import Secondfile from "./Second.module.css";
import { BiBarcodeReader } from "react-icons/bi";


const Second = () => {
  return (
    <>
      <div className={Secondfile.coantainersa}>
        <div>
          <a
            href="https://usecheck.com/"
            className={Secondfile.btnshinesa}
            target="_blank"
          >
            Display TO / Work Order
          </a>
        </div>

        <form>
          <div className={Secondfile.qrmain}>
            <div className={Secondfile.qrcode}>
              <BiBarcodeReader size={20} className={Secondfile.qrcode1} />
              <h1>SCAN HU/PICK NUMBER</h1>
            </div>
            <input type="text" placeholder="HD19122022_01" />
          </div>

          <div className={Secondfile.samaininputs}>
            <div>
              <label>HU Number</label>
              <br />
              <input type="hello" placeholder="HD19122022_01" />
            </div>
            <div>
              <label>Pick Order</label>
              <br />
              <input type="hello" />
            </div>
            <div>
              <label>Transform Order Number #</label>
              <br />
              <input placeholder="TO1360" type="hello" />
            </div>
            <div>
              <label>Transform Order Status</label>
              <br />
              <input placeholder="COMPLETED" type="hello" />
            </div>
            <div>
              <label>Sales Orders #</label>
              <br />
              <input placeholder="SO" type="hello" />
            </div>
          </div>

          <div className={Secondfile.samaininputs2}>
            <div>
              <label>Enter Delivery</label>
              <br />
              <input placeholder="US" type="hello" />
            </div>
            <div>
              <label>Ship To Country</label>
              <br />
              <input placeholder="Poland" type="hello" />
            </div>
            <div>
              <label>Transformation Site</label>
              <br />
              <input placeholder="Courcelles, Belgium" type="hello" />
            </div>
          </div>



          <div className={Secondfile.TotalNumbersn}>
  <h6 style={{color:"black", display:"flex", marginTop:"80px"}}> Total Number of Item (1)</h6>
</div>
     

            <div classname={Secondfile.containersn}>
    <div classname={Secondfile.py4}>
    
      <table className={Secondfile.tablebordershadow}>
        <thead className={Secondfile.theadprimary}>

          <tr>
      
          <th><input className={Secondfile.satobar} type="checkbox"/> </th>
            <th scope="col">Product Code</th>
      <th scope="col">Product Description</th>
      <th scope="col">Variant</th>
      <th scope="col">GSTIN</th>
      <th scope="col">Quantity</th>
      <th scope="col">UOM</th>
      <th scope="col"> Batch</th>
      <th scope="col">DOM</th>
      <th scope="col">SLED</th>
      <th scope="col">Comments</th>
      <th scope="col">Master Data Error</th>
      <th scope="col">Work Order #</th>
          </tr>
        </thead>
          <tbody className={Secondfile.line123}>
    <tr>
      <td ><input type="checkbox"/></td>
      <td style={{color: "black"}}>242436-12</td>
      <td style={{color: "black"}}>COUPLER AC ZOOM</td>
      <td style={{color: "black"}}>12</td>
      <td style={{color: "black"}}>10886705028634</td>
      <td style={{color: "black"}}>1</td>
      <td style={{color: "black"}}>EA</td>
      <td style={{color: "black"}}>BATCHHH</td>
      <td></td>
      <td></td>
      <td style={{color: "black"}}>MDM Check Success</td>
      <td style={{color: "black"}}>N/A</td>
      <td className={Secondfile.blueWO1789}>WO1789</td>
    </tr> 

    <tr>
        <td ><input type="checkbox"/></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr> 

    <tr>
        <td ><input type="checkbox"/></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr> 
    <tr>
        <td ><input type="checkbox"/></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr> 
    <tr>
        <td ><input type="checkbox"/></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr> 
  
    
  </tbody>
  
      </table>
    </div>
  </div>
          {/* </div> */}
        </form>
      </div>
    </>
  );
};

export default Second;