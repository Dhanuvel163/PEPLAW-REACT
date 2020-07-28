import React,{Component} from 'react';
import {
    Container
  } from 'reactstrap';
import { Button, Form, FormGroup,FormFeedback, Label, Input, FormText,Row,Col,Media } from 'reactstrap';
import {Control,LocalForm,Errors} from 'react-redux-form';
import Icon from '@material-ui/core/Icon';

const required=(val)=>(val)&&(val.length)
const minLength=(len)=>(val)=>(val)&&(val.length>=len)
const maxLength=(len)=>(val)=>(val)&&(val.length<=len)
const isNumber=(val)=>!isNaN(Number(val))
const isemail=(val)=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(val)

class Usersignup extends Component{
    constructor(props){
        super(props);
        this.handlesubmit=this.handlesubmit.bind(this);
    }

    handlesubmit(values){
        this.props.postusersignup(values.username,values.email,values.password,values.mobile);
        setTimeout(()=>{
            this.props.fetchuserdata()
            window.location.href="/"
        },5000)

    }

    render(){
        return(
            <div className="container" style={{marginTop:50,marginBottom:50}}>
                <h4 className="text-center">User Signup</h4>
                <Container style={{marginTop:50}}>
                <hr></hr>
                    <Row>
                        <Col sm="6">
                            <LocalForm onSubmit={(values)=>this.handlesubmit(values)}>
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
                                         required:'username is required !!',
                                         minLength:'username should has minimum 6 characters !!',
                                         maxLength:'username should has maximum 20 characters only !!'
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
                                         required:'Email is required !!',
                                         isemail:'Enter a valid email !!'
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
                                         required:'password is required !!',
                                         minLength:'password should has minimum 6 characters !!',
                                         maxLength:'password should has maximum 20 characters only !!'
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
                                         required:'mobile is required !!',
                                         minLength:'mobile should has minimum 6 characters !!',
                                         maxLength:'mobile should has maximum 20 characters only !!',
                                         isNumber:'Enter a valid phone Number !!'
                                     }}
                                     ></Errors>
                                </FormGroup>
                                <a href="/lawyer/signup" style={{color:'white'}}>
                                <p>Are you a Lawyer ?</p>
                                </a>
                                <Button style={{marginLeft:'35%'}} color="secondary" size="md" active>Sign Up</Button>
                            </LocalForm>        
                        </Col>
                        <Col>
                            <div className="container">
                            <Media style={{width:'90%',marginLeft:'auto',marginTop:30}} src="https://akm-img-a-in.tosshub.com/sites/btmt/images/stories/lawyer-660_120718040725.jpg"></Media>
                            </div>
                        </Col>
                    </Row>
                    <hr></hr>
                </Container>
            </div>
        );
    }
}

export default Usersignup;