import React from 'react';
import {Control,LocalForm,Errors} from 'react-redux-form';
import {Link,useHistory} from "react-router-dom";
import {connect} from 'react-redux';
import {postusersignup} from '../../../shared/Actioncreators/actionCreators';
import Formerror from '../../Partials/Formerror/Formerror';
// import {Helmet} from 'react-helmet'
const mapStateToProps=state=>{
    return {
    }
}
const mapDispatchToProps=dispatch=>({
    postusersignup:(name,email,password,mobile,history)=>dispatch(postusersignup(name,email,password,mobile,history)),
})
const required=(val)=>(val)&&(val.length)
const minLength=(len)=>(val)=>(val)&&(val.length>=len)
const maxLength=(len)=>(val)=>(val)&&(val.length<=len)
const isNumber=(val)=>!isNaN(Number(val))
const isemail=(val)=>/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(val)

function Usersignup(props){
    let history = useHistory()
    const handlesubmit=(values)=>{
        props.postusersignup(values.username,values.email,values.password,values.mobile,history);
    }
        return(
            <div className="container" style={{marginTop:50,marginBottom:50}}>
                {/* <Helmet>
                    <title>USER SIGNUP | PEPLAW</title>
                    <meta name="description" content="user signup page" />
                </Helmet> */}
                {true && (document.title='USER SIGNUP | PEPLAW')?null:null}
                <h4 className="text-center">User Signup</h4>
                <div className="container" style={{marginTop:50}}>
                <hr></hr>
                    <div className="row">
                        <div className="col-12 col-sm-6">
                            <LocalForm onSubmit={(values)=>handlesubmit(values)}>
                                <div className='form-group'>
                                    <label htmlFor="username">Username</label>
                                    <Control.text model=".username" className='form-control' name="username" id="username"
                                     placeholder="Username"
                                     validators={{
                                        required,minLength:minLength(6),maxLength:maxLength(20)
                                     }}/>
                                    <Errors
                                     model='.username'
                                     show="touched"
                                     component={(props)=><Formerror props={props}/>}
                                     messages={{
                                         required:'\nusername is required !!',
                                         minLength:'\nusername should has minimum 6 characters !!',
                                         maxLength:'\nusername should has maximum 20 characters only !!'
                                     }}
                                     ></Errors>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleEmail">Email</label>
                                    <Control.text model=".email" className='form-control' name="email" id="exampleEmail"
                                     placeholder="Email"
                                     validators={{
                                        required,isemail
                                     }}/>
                                     <Errors
                                     model='.email'
                                     show="touched"
                                     component={(props)=><Formerror props={props}/>}
                                     messages={{
                                         required:'\nEmail is required !!',
                                         isemail:'\nEnter a valid email !!'
                                     }}
                                     ></Errors>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="examplePassword">Password</label>
                                    <Control.password model=".password" className='form-control' name="password" id="examplePassword" 
                                    placeholder="password"
                                    validators={{
                                        required,minLength:minLength(6),maxLength:maxLength(20)
                                     }}/>
                                     <Errors
                                     model='.password'
                                     show="touched"
                                     component={(props)=><Formerror props={props}/>}
                                     messages={{
                                         required:'\npassword is required !!',
                                         minLength:'\npassword should has minimum 6 characters !!',
                                         maxLength:'\npassword should has maximum 20 characters only !!'
                                     }}
                                     ></Errors>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="mobile">Phone Number</label>
                                    <Control.text model=".mobile" className='form-control' name="mobile" id="mobile"
                                     placeholder="mobile"
                                     validators={{
                                        required,minLength:minLength(10),maxLength:maxLength(10),isNumber
                                     }}/>
                                     <Errors
                                     model='.mobile'
                                     show="touched"
                                     component={(props)=><Formerror props={props}/>}
                                     messages={{
                                         required:'\nmobile is required !!',
                                         minLength:'\nmobile should has minimum 6 characters !!',
                                         maxLength:'\nmobile should has maximum 20 characters only !!',
                                         isNumber:'\nEnter a valid phone Number !!'
                                     }}
                                     ></Errors>
                                </div>
                                    <Link to="/lawyer/signup" className="nav-link">
                                        <p style={{color:'white'}}>Are you a lawyer ?</p>
                                    </Link>
                                <div className="d-flex justify-content-center">
                                <button className="btn btn-secondary">Sign Up</button>
                                </div>
                            </LocalForm>        
                        </div>
                        <div className="col">
                            <div className="container">
                            <img className="media" alt="USER SIGNUP" style={{width:'inherit',marginTop:30}} src="/assets/usersignup.svg"></img>
                            </div>
                        </div>
                    </div>
                    <hr></hr>
                </div>
            </div>
        );
}
export default connect(mapStateToProps,mapDispatchToProps)(Usersignup);
