import React,{Component} from 'react';
import {
    NavItem,
    NavLink,
    NavbarText
  } from 'reactstrap';

class Footer extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className='bg-dark'>
                <NavLink style={{color:'white',fontWeight:'bold',textAlign:'center'}}>ContactUs</NavLink>
                <NavLink style={{color:'white',fontWeight:'bold',textAlign:'center'}}>Email : dhanuram99@gmail.com</NavLink>
            </div>
        );
    }
}

export default Footer;