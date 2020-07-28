import React,{Component,useState} from 'react';
import {Link,Route,Router,useHistory} from 'react-router-dom';
import {isloggedin,isuserloggedin,islawyerloggedin} from '../service/userservice';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
  } from 'reactstrap';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LockIcon from '@material-ui/icons/Lock';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import GavelIcon from '@material-ui/icons/Gavel';
import CameraIcon from '@material-ui/icons/Camera';
import PaymentIcon from '@material-ui/icons/Payment';
function Logout(props){
    if(isloggedin()){
        return(
        <div 
        onClick={()=>{
            localStorage.removeItem('token')
            setTimeout(()=>{props.fetchuserdata()},200)
        }} 
        style={{marginRight:10}}>
            <NavItem>
                <NavLink href="/"><LockIcon/>Logout</NavLink>
            </NavItem>    
        </div>);
    }else{
        return(<div></div>);
    }
}

function Mycases(props){
    if(isloggedin()){
        return(
            <div> 
                <NavItem>
                    <NavLink href="/user/mycases"><PaymentIcon style={{marginRight:7}}/>My Cases</NavLink>
                </NavItem>
            </div>);
    }else{
        return(<div></div>);
    }
}

function USERDATA(props){
    if(isloggedin()){
        return(
            <div> 
                <NavItem>
                    <NavLink href="/user/edit"><AccountCircleIcon/> {props.user.user}</NavLink>
                </NavItem>
            </div>);
    }else{
        return(<div></div>);
    }
}

function ADDCASEDATA(props){
    if(isloggedin() && isuserloggedin()){
        return(
            <div> 
                <NavItem>
                    <NavLink href="/user/case"><CameraIcon style={{marginRight:7}}/>ADD CASE</NavLink>
                </NavItem>
            </div>);
    }else if(isloggedin() && islawyerloggedin()){
        return(
            <div> 
                <NavItem>
                    <NavLink href="/search/case"><CameraIcon style={{marginRight:7}}/>SEE CASES</NavLink>
                </NavItem>
            </div>);
    }else{
        return(<div></div>);
    }
}

class Header extends Component{
constructor(props){
    super(props);
    this.toggle=this.toggle.bind(this);
    this.state={
        isOpen:false,   
    }
}
toggle(){
    this.setState({isOpen:!this.state.isOpen});
}

    render(){
        return(
            <div className="fixed-top">
                <Navbar color="dark" dark expand="md">
                    <NavbarBrand href="/">
                        <GavelIcon style={{marginRight:5}}/>
                        <b>PEP-LAW</b>
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                            <VpnKeyIcon style={{marginRight:4,fontSize:20}}/>Login
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem href="/lawyer/login">
                                        Lawyer Login
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem href="/user/login">
                                        User Login
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>

                        <UncontrolledDropdown nav inNavbar >
                            <DropdownToggle nav caret>
                                <GroupAddIcon style={{marginRight:4,fontSize:20}}/>
                                Signup
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem href="/lawyer/signup">
                                        Lawyer Signup
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem href="/user/signup">
                                        User Signup                                
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>

                    <Nav className="ml-auto" navbar>
                        <ADDCASEDATA />
                        <USERDATA user={this.props.userdata}/>
                        <Mycases/>
                        <Logout fetchuserdata={this.props.fetchuserdata}></Logout>
                    </Nav>
                    </Collapse>
                </Navbar>
       </div>
        );
    }
}

export default Header;