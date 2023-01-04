import React from 'react'
import cardfile from "./Card.module.css";

import { TbDatabaseImport } from "react-icons/tb";
import { FaGreaterThan } from "react-icons/fa";
const Card = () => {
  return (
    <>

<div className={cardfile.top11}>
                <div className={cardfile.main}>
 
                </div>
                
                <div className={cardfile.top1}>
                        <div className={cardfile.data_Content}>

                        <div className={cardfile.data}> <h5>Data Cockpit</h5></div>
                            <div className={cardfile.content}>
                            <ul className={cardfile.unList}  >
                                                        
                            <li className={cardfile.list1}>Master Data <FaGreaterThan/></li>
                                <li className={cardfile.list1}>Product Master Upload </li>
                                <li className={cardfile.list1}>Component Master</li>
                                <li className={cardfile.list1}>Component Assignment</li>
                                <li className={cardfile.list1}>Component Configuration List</li>
                                <li className={cardfile.list1}>Component Repository Bulk Upload</li>
                                <li className={cardfile.list1}>CR Assignment TEST APP</li>

                            </ul>
                            </div>
                            <div className={cardfile.content1}>
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCINHQFm1bPMewGLDAD0wI28iZCSD9GZp2uw&usqp=CAU" alt="/"  />
                            </div>
                        </div>
                </div>

    </div>
































{/* <div className={cardfile.top1}>

     <div className={cardfile.cardgroup}>
  <div className="card"><TbDatabaseImport size={100} className={cardfile.card_icon} />

    <img className="card-img-top" src="https://miro.medium.com/max/775/0*rZecOAy_WVr16810" alt="Card image cap" />


    <div className={cardfile.cardbody}> 
      <h5 className={cardfile.cardtitle}>Data Cookipit</h5>
      <p className="card-text">
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </p>
      <p className="card-text">
        <small className="text-muted">Last updated 3 mins ago</small>
      </p>
    </div>
  </div>
</div>

</div> */}









    </>
  )
}

export default Card



