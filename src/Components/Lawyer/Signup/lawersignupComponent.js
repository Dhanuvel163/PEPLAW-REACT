import React from 'react';
import {Container, Button, FormGroup, Label,Row,Col,Media } from 'reactstrap';
import {Control,Errors,Form} from 'react-redux-form';
import {Link,useHistory
} from "react-router-dom";
import {postlawyersignup} from '../../../shared/actionCreators'
import {connect} from 'react-redux';
import {actions} from 'react-redux-form';
import Formerror from '../../Partials/Formerror/Formerror';

const mapStateToProps=state=>{
    return {
    }
}
const mapDispatchToProps=dispatch=>({
    postlawyersignup:(name,email,password,mobile,history)=>dispatch(postlawyersignup(name,email,password,mobile,history)),
    lawyersignupformreset:()=>dispatch(actions.reset('lawyersignupform'))
})
const required=(val)=>(val)&&(val.length)
const minLength=(len)=>(val)=>(val)&&(val.length>=len)
const maxLength=(len)=>(val)=>(val)&&(val.length<=len)
const isNumber=(val)=>!isNaN(Number(val))
const isemail=(val)=>/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(val)

function Lawyersignup(props){
    let history = useHistory()
    const handlesubmit=(values)=>{
            props.postlawyersignup(values.username,values.email,values.password,values.mobile,history);
            props.lawyersignupformreset();
    }
    return(
            <div className="container" style={{marginTop:50,marginBottom:50}}>
                <h4 className="text-center">Lawyer Signup</h4>
                <Container style={{marginTop:50}}>
                <hr></hr>
                    <Row>
                        <Col sm="6">
                        <Form model='lawyersignupform' onSubmit={(values)=>handlesubmit(values)}>
                                <div className='form-group'>
                                    <Label for="username">Username</Label>
                                    <Control.text model=".username" className='form-control' name="username" id="username"
                                     placeholder="Username"
                                     validators={{required,minLength:minLength(6),maxLength:maxLength(20)}}/>
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
                                <FormGroup>
                                    <Label for="exampleEmail">Email</Label>
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
                                </FormGroup>
                                <FormGroup>
                                    <Label for="examplePassword">Password</Label>
                                    <Control.password model=".password" className='form-control' name="password" id="examplePassword" 
                                    placeholder="password"
                                    validators={{required,minLength:minLength(6),maxLength:maxLength(20)}}/>
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
                                </FormGroup>
                                <FormGroup>
                                    <Label for="mobile">Phone Number</Label>
                                    <Control.text model=".mobile" className='form-control' name="mobile" id="mobile"
                                     placeholder="mobile"
                                     validators={{required,minLength:minLength(10),maxLength:maxLength(10),isNumber}}/>
                                     <Errors
                                     model='.mobile'
                                     show="touched"
                                     component={(props)=><Formerror props={props}/>}
                                     messages={{
                                         required:'\nMobile Number is required !!',
                                         minLength:'\nMobile Number should has 10 characters !!',
                                         maxLength:'\nMobile Number should has 10 characters !!',
                                         isNumber:'\nEnter a valid phone Number !!'
                                     }}
                                     ></Errors>
                                </FormGroup>
                                    <Link to="/user/signup" className="nav-link">
                                        <p style={{color:'white'}}>Are you a user ?</p>
                                    </Link>
                                <div className="d-flex justify-content-center">
                                <Button color="secondary" size="md" active>Sign Up</Button>
                                </div>
                            </Form>         
                        </Col>
                        <Col>
                            <div className="container">
                            <Media alt="LAWYER IMAGE" style={{width:'inherit',marginTop:30}} src="/assets/lawyersignup.svg"></Media>
                            </div>
                        </Col>
                    </Row>
                    <hr></hr>
                </Container>
            </div>
        );
}

export default connect(mapStateToProps,mapDispatchToProps)(Lawyersignup);
