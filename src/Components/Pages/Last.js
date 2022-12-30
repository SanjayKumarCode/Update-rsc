import React from 'react';
import './Last.css';
import { BiBarcodeReader } from 'react-icons/bi';
const Last = () => {
  return (
    < >
      <div className="coantainer_sa">
        <div>
         
        <h1 className='disp-sa'>Display to/Work Order</h1>
        </div>

        <div>
        <div className='second-sa'>
            <label htmlFor="" className='green-sa'><BiBarcodeReader/> SCAN HU/PICK NUMBER</label>
            <input type="text" className='sec-sa' />

        </div>
        <div>
        <div className="third-sa">
                <div>
                <label className='pkk-sa' htmlFor=""><b>HU NUMBER</b></label> <br />
                <input type="text" className='okk-sa' />
                </div>
                <div>
                <label className='pkk-sa' htmlFor=""><b>PICK ORDER</b></label> <br />
                <input type="text" className='okk-sa' />
                </div>
                <div>
                <label className='pkk-sa' htmlFor=""><b>Transform Order Number#</b> </label> <br />
                <input type="text" className='okk-sa' />
                </div>
                <div>
                <label className='pkk-sa' htmlFor=""><b> Transform Order Status </b> </label> <br />
                <input type="text" className='okk-sa' />
                </div>
                <div>
                <label className='pkk-sa' htmlFor=""><b>Sales Order# </b> </label> <br />
                <input type="text" className='okk-sa' />
                </div>

        </div>

<div>
<div className="four-sa">
                <div>
                <label className='pkk-sa' htmlFor=""><b>Enter Delivery</b> </label> <br />
                <input type="text" className='opp-sa' />

                </div>
                <div>
                <label className='pkk-sa' htmlFor=""><b>Ship To Country </b> </label> <br />
                <input type="text" className='opp-sa' />
                </div>
                <div>
                <label className='pkk-sa' htmlFor=""> <b> Transformation Site </b> </label> <br />
                <input type="text" className='opp-sa' />
                </div>



        </div>
        </div>


        <div><div className='five-sa'> 
            <b>Total No Of Items(0)</b>
        </div>

        <div className='six-sa'>
            <table>
            
                    <thead>
                            <tr>
                                <th className='th-sa'><input type="checkbox" style={{marginLeft : "-1350px"}}/> </th>
                                
                                
                            </tr>
                    </thead>
                    <tbody>
                            <div className='move-sa'><b>No Data</b></div>
                    </tbody>

            </table>

        </div>   
        </div>






        </div>
            
        </div>
      </div>




        

    </>
  );
};

export default Last;