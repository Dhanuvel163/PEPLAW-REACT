import React,{PureComponent} from 'react';
import {isloggedin,isuserloggedin,islawyerloggedin} from '../../../service/userservice';
import {Collapse,Navbar,NavbarToggler,Nav,NavItem,UncontrolledDropdown,DropdownToggle,DropdownMenu,DropdownItem} from 'reactstrap';
import {Link} from "react-router-dom";
import './header.css'
function Logout(props){
    const lout = () =>{
            localStorage.removeItem('token')
            setTimeout(()=>{props.fetchuserdata()},200)       
    }
    return(
        isloggedin()
        ?
            <NavItem onClick={lout} style={{marginRight:10}}>
                <Link to="/" className="nav-link">
                    <svg style={{marginRight:3}}
                     xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-lock-fill" viewBox="0 0 16 16">
                    <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
                    </svg>
                    Logout
                </Link>
            </NavItem>    
        :
        <div></div>
    )
}

function Mycases(){
    return(
        isloggedin()
        ?
        <NavItem>
            <Link to="/user/mycases" className="nav-link">
                <svg style={{marginRight:6}} 
                xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-journal-text" viewBox="0 0 16 16">
                <path d="M5 10.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>
                <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"/>
                <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"/>
                </svg>
                My Cases
            </Link>
        </NavItem>
        :
        <div></div>
    )
}

function USERDATA(props){
    return(
        isloggedin()
        ?
        <NavItem>
            <Link to="/user/edit" className="nav-link">
                <svg 
                xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                </svg> {props.user.user}
            </Link>
        </NavItem>
        :
        <div></div>
    )
}

function ADDCASEDATA(props){
    return(
        isloggedin() && isuserloggedin()
        ?
        <NavItem>
            <Link to="/user/case" className="nav-link">
                <svg style={{marginRight:6}}
                xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-journal-plus" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M8 5.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V10a.5.5 0 0 1-1 0V8.5H6a.5.5 0 0 1 0-1h1.5V6a.5.5 0 0 1 .5-.5z"/>
                <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"/>
                <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"/>
                </svg> 
                Add Case
            </Link>
        </NavItem>
        :
        isloggedin() && islawyerloggedin()
        ?
        <NavItem>
            <Link to="/search/case" className="nav-link">
                <svg style={{marginRight:6}}
                xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-layout-text-sidebar" viewBox="0 0 16 16">
                <path d="M3.5 3a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zm0 3a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM3 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5z"/>
                <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm12-1v14h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1h-2zm-1 0H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h9V1z"/>
                </svg>
                See Cases
            </Link>
        </NavItem>
        :
        <div></div>
    )
}

class Header extends PureComponent{
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
            <div className="fixed-top one-edge-shadow">
                <Navbar color="dark" dark expand="md">
                    <div className="navbar-brand">
                        <Link to="/" style={{color:'white'}} className="nav-link">
                        <img src="/assets/lawlogo192.webp" alt="logo'" height="30" style={{marginRight:10,borderRadius:'50%'}}/>
                        <b >PEP-LAW</b>
                        </Link>
                    </div>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                    {
                        isloggedin() ?
                        <Nav className="ml-auto" navbar>
                            <ADDCASEDATA />
                            <USERDATA user={this.props.userdata}/>
                            <Mycases/>
                            <Logout fetchuserdata={this.props.fetchuserdata}></Logout>
                        </Nav>
                        :
                        <Nav className="ml-auto" navbar>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                <svg style={{marginRight:4}}
                                xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-key-fill" viewBox="0 0 16 16">
                                <path d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2zM2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                                </svg>
                                Login
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <Link  to="/lawyer/login" className="dropdown-item">
                                        Lawyer Login
                                    </Link>
                                    <DropdownItem divider />
                                    <Link  to="/user/login" className="dropdown-item">
                                        User Login
                                    </Link>
                                </DropdownMenu>
                            </UncontrolledDropdown>

                            <UncontrolledDropdown nav inNavbar >
                                <DropdownToggle nav caret>
                                    <svg style={{marginRight:4}}
                                    xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-plus-fill" viewBox="0 0 16 16">
                                    <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                    <path fillRule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
                                    </svg>
                                    Signup
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <Link  to="/lawyer/signup" className="dropdown-item">
                                        Lawyer Signup
                                    </Link>
                                    <DropdownItem divider />
                                    <Link  to="/user/signup" className="dropdown-item">
                                        User Signup
                                    </Link>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    }
                    </Collapse>
                </Navbar>
       </div>
        );
    }
}

export default Header;