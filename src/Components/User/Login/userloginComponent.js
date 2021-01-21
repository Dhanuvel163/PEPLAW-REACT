import React from 'react';
import {Container} from 'reactstrap';
import { Button, FormGroup, Label,Row,Col,Media } from 'reactstrap';
import {Control,LocalForm,Errors} from 'react-redux-form';
import {Link,useHistory} from "react-router-dom";
import {connect} from 'react-redux';
import {postusersignin} from '../../../shared/actionCreators'
import Formerror from '../../Partials/Formerror/Formerror';

const mapStateToProps=state=>{
    return {
    }
}
const mapDispatchToProps=dispatch=>({
    postusersignin:(email,password,history)=>dispatch(postusersignin(email,password,history)),
})
const required=(val)=>(val)&&(val.length)
const isemail=(val)=>/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(val)
function Userlogin(props){
    let history = useHistory()
    const handlesubmit=(values)=>{
        props.postusersignin(values.email,values.password,history);
    }
        return(
            <div className="container" style={{marginTop:50,marginBottom:50}}>
                <h4 className="text-center">User Login</h4>
                <Container style={{marginTop:50}}>
                <hr></hr>
                    <Row>
                        <Col xs="12" sm="6" className="d-flex align-items-center">
                            <LocalForm onSubmit={(values)=>handlesubmit(values)}>
                            <FormGroup>
                                    <Label for="exampleEmail">Email</Label>
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
                                </FormGroup>
                                <FormGroup>
                                    <Label for="examplePassword">Password</Label>
                                    <Control.password model=".password" className='form-control' name="password" id="examplePassword" 
                                    placeholder="password"
                                    validators={{
                                        required
                                     }}/>
                                     <Errors
                                     model='.password'
                                     show="touched"
                                     component={(props)=><Formerror props={props}/>}
                                     messages={{
                                         required:'password is required !!',
                                     }}
                                     ></Errors>
                                </FormGroup>
                                    <Link to="/lawyer/login" className="nav-link">
                                        <p style={{color:'white'}}>Are you a lawyer ?</p>
                                    </Link>
                                <div className="d-flex justify-content-center">
                                <Button color="secondary" size="md" active>Sign in</Button>
                                </div>
                            </LocalForm>        
                        </Col>
                        <Col>
                            <div className="container">
                            <Media alt="LAWYER IMAGE" style={{
                                width:'inherit',
                                marginTop:30}} 
                            src="/assets/userlogin.svg"></Media>
                            </div>
                        </Col>
                    </Row>
                    <hr></hr>
                    <h5 style={{textAlign:'center'}}>OR</h5>
                    <div  style={{color:'white',display:'flex',justifyContent:'center'}}>
                        <Link to="/user/signup" className="nav-link">
                        <Button color='warning'size="md">Click here to Signup</Button>
                        </Link>
                    </div>
                </Container>
            </div>
        );
}

export default connect(mapStateToProps,mapDispatchToProps)(Userlogin);
