import React from 'react';
import {Control,LocalForm,Errors} from 'react-redux-form';
import {Link,useHistory} from "react-router-dom";
import {connect} from 'react-redux';
import {postlawyersignin} from '../../../shared/Actioncreators/actionCreators'
import Formerror from '../../Partials/Formerror/Formerror';
// import {Helmet} from 'react-helmet'

const mapStateToProps=state=>{
    return {
    }
}
const mapDispatchToProps=dispatch=>({
    postlawyersignin:(email,password,history)=>dispatch(postlawyersignin(email,password,history)),
})
const required=(val)=>(val)&&(val.length)
const isemail=(val)=>/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(val)
function Lawyerlogin(props){
    let history = useHistory()
    const handlesubmit=(values)=>{
        props.postlawyersignin(values.email,values.password,history);
    }
        return(
            <div className="container" style={{marginTop:50,marginBottom:50}}>
                {/* <Helmet>
                    <title>LAWYER LOGIN | PEPAW</title>
                    <meta name="description" content="lawyer login page"/>
                </Helmet> */}
                {true && (document.title='LAWYER LOGIN | PEPLAW')?null:null}
                <h4 className="text-center">Lawyer Login</h4>
                <div className="container" style={{marginTop:50}}>
                <hr></hr>
                    <div className="row">
                        <div className="col-12 col-sm-6 d-flex align-items-center">
                            <LocalForm onSubmit={(values)=>handlesubmit(values)}>
                            <div className="form-group">
                                    <label htmlFor="exampleEmail">Email</label>
                                    <Control.text model=".email" className='form-control' name="email" id="exampleEmail"
                                     placeholder="Email"
                                     validators={{required,isemail}}/>
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
                                    validators={{required}}/>
                                     <Errors
                                     model='.password'
                                     show="touched"
                                     component={(props)=><Formerror props={props}/>}
                                     messages={{
                                         required:'password is required !!',
                                     }}
                                     ></Errors>
                                </div>
                                    <Link to="/user/login" className="nav-link">
                                        <p style={{color:'white'}}>Are you a user ?</p>
                                    </Link>
                                <div className="d-flex justify-content-center">
                                <button className="btn btn-secondary">Sign in</button>
                                </div>
                            </LocalForm>        
                        </div>
                        <div className="col">
                            <div className="container">
                            <img className="media" style={{width:'inherit',marginTop:30}} alt="LAWYER LOGIN" src="/assets/loginlawyer.svg"/>
                            </div>
                        </div>
                    </div>
                    <hr></hr>
                    <h5 style={{textAlign:'center'}}>OR</h5>
                    <div  style={{color:'white',display:'flex',justifyContent:'center'}}>
                        <Link to="/lawyer/signup" className="nav-link">
                        <button className="btn btn-warning">Click here to Signup</button>
                        </Link>
                    </div>
                </div>
            </div>
        );

}
export default connect(mapStateToProps,mapDispatchToProps)(Lawyerlogin);
