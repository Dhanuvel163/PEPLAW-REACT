import React,{memo} from 'react';
import {
    NavLink
  } from 'reactstrap';
function Footer(){
        return(
            <div className='bg-dark one-edge-shadow' style={{marginBottom:8,opacity:0.8}}>
                <NavLink style={{color:'white',fontWeight:'bold',textAlign:'center'}}>ContactUs</NavLink>
                <NavLink style={{color:'white',fontWeight:'bold',textAlign:'center'}}>Email : dhanuram99@gmail.com</NavLink>
            </div>
        );
}

export default memo(Footer);