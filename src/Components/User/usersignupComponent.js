import React from 'react';
import {Container} from 'reactstrap';
import { Button, FormGroup, Label,Row,Col,Media } from 'reactstrap';
import {Control,LocalForm,Errors} from 'react-redux-form';
import {Link,useHistory} from "react-router-dom";
import {connect} from 'react-redux';
import {postusersignup} from '../../shared/actionCreators'
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
                <h4 className="text-center">User Signup</h4>
                <Container style={{marginTop:50}}>
                <hr></hr>
                    <Row>
                        <Col sm="6">
                            <LocalForm onSubmit={(values)=>handlesubmit(values)}>
                                <div className='form-group'>
                                    <Label for="username">Username</Label>
                                    <Control.text model=".username" className='form-control' name="username" id="username"
                                     placeholder="Username"
                                     validators={{
                                        required,minLength:minLength(6),maxLength:maxLength(20)
                                     }}/>
                                    <Errors
                                     model='.username'
                                     show="touched"
                                     messages={{
                                         required:'\nusername is required !!',
                                         minLength:'\nusername should has minimum 6 characters !!',
                                         maxLength:'\nusername should has maximum 20 characters only !!'
                                     }}
                                     ></Errors>
                                </div>
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
                                        required,minLength:minLength(6),maxLength:maxLength(20)
                                     }}/>
                                     <Errors
                                     model='.password'
                                     show="touched"
                                     messages={{
                                         required:'\npassword is required !!',
                                         minLength:'\npassword should has minimum 6 characters !!',
                                         maxLength:'\npassword should has maximum 20 characters only !!'
                                     }}
                                     ></Errors>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="mobile">Phone Number</Label>
                                    <Control.text model=".mobile" className='form-control' name="mobile" id="mobile"
                                     placeholder="mobile"
                                     validators={{
                                        required,minLength:minLength(10),maxLength:maxLength(10),isNumber
                                     }}/>
                                     <Errors
                                     model='.mobile'
                                     show="touched"
                                     messages={{
                                         required:'\nmobile is required !!',
                                         minLength:'\nmobile should has minimum 6 characters !!',
                                         maxLength:'\nmobile should has maximum 20 characters only !!',
                                         isNumber:'\nEnter a valid phone Number !!'
                                     }}
                                     ></Errors>
                                </FormGroup>
                                    <Link to="/lawyer/signup" className="nav-link">
                                        <p style={{color:'white'}}>Are you a lawyer ?</p>
                                    </Link>
                                <div className="d-flex justify-content-center">
                                <Button color="secondary" size="md" active>Sign Up</Button>
                                </div>
                            </LocalForm>        
                        </Col>
                        <Col>
                            <div className="container">
                            <Media alt="LAWYER IMAGE" style={{width:'inherit',marginTop:30}} src="/assets/usersignup.svg"></Media>
                            </div>
                        </Col>
                    </Row>
                    <hr></hr>
                </Container>
            </div>
        );
}
export default connect(mapStateToProps,mapDispatchToProps)(Usersignup);
