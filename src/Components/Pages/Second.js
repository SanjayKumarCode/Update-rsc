import React from 'react';
import './Second.css';
import { BiBarcodeReader } from 'react-icons/bi';
const Second = () => {
  return (
    <div >
   
     <div className='Container-sn'> 
     <div className='second-sn'> 
      <h1 className='disp-sn'>Display to/Work Order</h1>
        <label htmlFor="" className='pkk-sn'><BiBarcodeReader/> SCAN HU/PICK NUMBER</label>
        <input type="text" className='sec-sn' />

        </div>

        <div className="third-sn">
                <div>
                <label className='nis-sn' htmlFor=""><b>HU NUMBER</b></label> <br />
                <input type="text" className='okk-sn' />
                </div>
                <div>
                <label className='nis-sn' htmlFor=""><b>PICK ORDER</b></label> <br />
                <input type="text" className='okk-sn' />
                </div>
                <div>
                <label className='nis-sn' htmlFor=""><b>Transform Order Number#</b> </label> <br />
                <input type="text" className='okk-sn' />
                </div>
                <div>
                <label className='nis-sn' htmlFor=""><b> Transform Order Status </b> </label> <br />
                <input type="text" className='okk-sn' />
                </div>
                <div>
                <label className='nis-sn' htmlFor=""><b>Sales Order# </b> </label> <br />
                <input type="text" className='okk-sn' />
                </div>

        </div>

        <div className="four-sn">
                <div>
                <label className='nis-sn' htmlFor=""><b>Enter Delivery</b> </label> <br />
                <input type="text" className='opp-sn' />

                </div>
                <div>
                <label className='nis-sn' htmlFor=""><b>Ship To Country </b> </label> <br />
                <input type="text" className='opp-sn' />
                </div>
                <div>
                <label className='nis-sn' htmlFor=""> <b> Transformation Site </b> </label> <br />
                <input type="text" className='opp-sn' />
                </div>



        </div>
        <div className='five-sn'> 
            <b>Total No Of Items(1)</b>
        </div>

       

       {/* table */}

       <div classname="container-snn">
    <div classname="py-4">
    
      <table className="table border shadow">
        <thead className="thead-primary-sn">
          <tr>

          <th className='ytm-sn'><input type="checkbox"/> </th>
          
            <th scope="col">Product Code</th>
      <th className='ytm-sn' scope="col">Product Description</th>
      <th className='ytm-sn' scope="col">Variant</th>
      <th className='ytm-sn' scope="col">GSTIN</th>
      <th className='ytm-sn' scope="col">Quantity</th>
      <th className='ytm-sn' scope="col">UOM</th>
      <th className='ytm-sn' scope="col"> Batch</th>
      <th className='ytm-sn' scope="col">DOM</th>
      <th className='ytm-sn' scope="col">SLED</th>
      <th className='ytm-sn' scope="col">Comments</th>
      <th className='ytm-sn' scope="col">Master Data Error</th>
      <th className='ytm-sn' scope="col">Work Order #</th>
          </tr>
        </thead>
          <tbody>
    <tr>
      <td className='ytr-sn'><input type="checkbox"/></td>
      <td className='ytr-sn'>242436-12</td>
      <td className='ytr-sn'>COUPLER AC ZOOM</td>
      <td className='ytr-sn'>12</td>
      <td className='ytr-sn'>10886705028634</td>
      <td className='ytr-sn'>1</td>
      <td className='ytr-sn'>EA</td>
      <td className='ytr-sn'>BATCHHH</td>
      <td className='ytr-sn'></td>
      <td className='ytr-sn'></td>
      <td className='ytr-sn'>MDM Check Success</td>
      <td className='ytr-sn'>N/A</td>
      <td className='blue-WO1789'>WO1789</td>
    </tr> 
    
  </tbody>
  
      </table>
    </div>
  </div>

    </div>
    </div>
  );
};

export default Second;