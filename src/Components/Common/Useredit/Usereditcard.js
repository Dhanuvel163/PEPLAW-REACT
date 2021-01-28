import {islawyerloggedin,isuserloggedin,isloggedin} from "../../../service/userservice";
import React from "react";
export default function Usereditcard(props) {
  return(
    <>
    {
      isloggedin() && islawyerloggedin()
      ?
      // <div className="card-style glass four-box-shadow" inverse>
      <div className="card bg-danger card-style four-box-shadow">
        <div className="card-header" style={{ textTransform: "uppercase" }}>
          <div className="d-flex justify-content-end">
            <div onClick={props.clickEdit} style={{cursor:'pointer'}}>
              <svg 
                xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-pen" viewBox="0 0 16 16">
                <path d="M13.498.795l.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z"/>
              </svg>
            </div>
          </div>
        </div>
        <div className="card-body profile">
            <div className="mb-3">
            <img  src={props.profiledata.profiledata.lawyer.picture} className="profile-img" alt={props.profiledata.profiledata.lawyer.name}/>
            <span style={{marginLeft:'15px'}}>
              {props.profiledata.profiledata.lawyer.name}
            </span>
            </div>
            <pre>
            <span>Mail         : </span>   {props.profiledata.profiledata.lawyer.email}
            </pre>
            <pre>
            <span>Mobile     : </span>   {props.profiledata.profiledata.lawyer.mobile}
            </pre>
            <pre>
            <span>Address  : </span>   {props.profiledata.profiledata.lawyer.address ? props.profiledata.profiledata.lawyer.address.addr1 : 'No Data !'}
            </pre>
            <div className="row">
                <div className="col-12 col-md-6">
                    <pre>
                    <span>State       : </span>   {props.profiledata.profiledata.lawyer.address ? props.profiledata.profiledata.lawyer.address.state ? props.profiledata.profiledata.lawyer.address.state : 'No Data !' : 'No Data !'}
                    </pre>
                    <pre>
                    <span>Country : </span>   {props.profiledata.profiledata.lawyer.country || 'No Data !'}
                    </pre>
                </div>
                <div className="col-12 col-md-6">
                    <pre>
                    <span>Pincode  : </span>   {props.profiledata.profiledata.lawyer.address ? props.profiledata.profiledata.lawyer.address.postalCode ? props.profiledata.profiledata.lawyer.address.postalCode : 'No Data !': 'No Data !'}
                    </pre> 
                    <pre>
                    <span>City         : </span>   {props.profiledata.profiledata.lawyer.city || 'No Data !'}
                    </pre>               
                </div>
            </div>
        </div>
      </div>
      :
      isloggedin() && isuserloggedin()
      ?
      <div className="card bg-danger card-style four-box-shadow">
        <div className="card-header" style={{ textTransform: "uppercase" }}>
          <div className="d-flex justify-content-end">
            <div onClick={props.clickEdit} style={{cursor:'pointer'}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-pen" viewBox="0 0 16 16">
                <path d="M13.498.795l.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z"/>
              </svg>
            </div>
          </div>
        </div>
        <div className="card-body profile">
            <div className="mb-3">
            <img  src={props.profiledata.profiledata.user.picture} className="profile-img" alt={props.profiledata.profiledata.user.name}/>
            <span style={{marginLeft:'15px'}}>
              {props.profiledata.profiledata.user.name}
            </span>
            </div>
            <pre>
            <span>Mail         : </span>   {props.profiledata.profiledata.user.email}
            </pre>
            <pre>
            <span>Mobile     : </span>   {props.profiledata.profiledata.user.mobile}
            </pre>
            <pre>
            <span>Address  : </span>   {props.profiledata.profiledata.user.address ? props.profiledata.profiledata.user.address.addr1 : 'No Data !'}
            </pre>
            <div className="row">
                <div className="col-12 col-md-6">
                    <pre>
                    <span>State       : </span>   {props.profiledata.profiledata.user.address ? props.profiledata.profiledata.user.address.state ? props.profiledata.profiledata.user.address.state : 'No Data !' : 'No Data !'}
                    </pre>
                    <pre>
                    <span>Country : </span>   {props.profiledata.profiledata.user.country || 'No Data !'}
                    </pre>
                </div>
                <div className="col-12 col-md-6">
                    <pre>
                    <span>Pincode  : </span>   {props.profiledata.profiledata.user.address ? props.profiledata.profiledata.user.address.postalCode ? props.profiledata.profiledata.user.address.postalCode : 'No Data !': 'No Data !'}
                    </pre> 
                    <pre>
                    <span>City         : </span>   {props.profiledata.profiledata.user.city || 'No Data !'}
                    </pre>               
                </div>
            </div>
        </div>
      </div>
      :
      null
    }
    </>
  )
}
