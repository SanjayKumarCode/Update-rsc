import React from "react";
import "./Second.css";
import { BiBarcodeReader } from "react-icons/bi";


const Second = () => {
  return (
    <>
      <div className="coantainer_sa">
        <div>
          <a
            href="https://usecheck.com/"
            className="btn-shine_sa"
            target="_blank"
          >
            Display TO / Work Order
          </a>
        </div>

        <form>
          <div className="qr-main">
            <div className="qr_code">
              <BiBarcodeReader size={20} className="qr_code1" />
              <h1>SCAN HU/PICK NUMBER</h1>
            </div>
            <input type="text" placeholder="HD19122022_01" />
          </div>

          <div className="sa-main-inputs">
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

          <div className="sa-main-inputs-2">
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



          <div className="Total_Number_sn">
  <h6 style={{color:"black", display:"flex", marginTop:"80px"}}> Total Number of Item (1)</h6>
</div>
     
          {/* <div className="sa-emty-box"> */}
            {/* <div className="sa-tobar">
              <input className="check_box1" type="checkbox" />
            </div> */}
            {/* <div className="sa-box-content">
              <p>No data</p>
            </div> */}

  




            <div classname="container-sn">
    <div classname="py-4">
    
      <table className="table border shadow">
        <thead className="thead-primary">

          <tr>
      
          <th><input className="sa-tobar" type="checkbox"/> </th>
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
          <tbody className="line123">
    <tr>
      <td ><input type="checkbox"/></td>
      <td>242436-12</td>
      <td>COUPLER AC ZOOM</td>
      <td>12</td>
      <td>10886705028634</td>
      <td>1</td>
      <td>EA</td>
      <td>BATCHHH</td>
      <td></td>
      <td></td>
      <td>MDM Check Success</td>
      <td>N/A</td>
      <td className='blue-WO1789'>WO1789</td>
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