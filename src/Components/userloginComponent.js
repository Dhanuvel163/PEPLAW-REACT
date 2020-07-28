import React,{Component} from 'react';
import {
    Container
  } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input, FormText,Row,Col,Media } from 'reactstrap';
import {Control,LocalForm,Errors} from 'react-redux-form';

const required=(val)=>(val)&&(val.length)
const isemail=(val)=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(val)

class Userlogin extends Component{
    constructor(props){
        super(props);
    }

    handlesubmit(values){
        this.props.postusersignin(values.email,values.password);
        setTimeout(()=>{
            this.props.fetchuserdata()
            window.location.href="/"
        },3000)
    }

    render(){
        return(
            <div className="container" style={{marginTop:50,marginBottom:50}}>
                <h4 className="text-center">User Login</h4>
                <Container style={{marginTop:50}}>
                <hr></hr>
                    <Row>
                        <Col sm="6">
                            <LocalForm onSubmit={(values)=>this.handlesubmit(values)}>
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
                                        required
                                     }}/>
                                     <Errors
                                     model='.password'
                                     show="touched"
                                     messages={{
                                         required:'password is required !!',
                                     }}
                                     ></Errors>
                                </FormGroup>
                                <a href="/lawyer/login" style={{color:'white'}}>
                                <p>Are you a Lawyer ?</p>
                                </a>
                                <Button style={{marginLeft:'35%'}} color="secondary" size="md" active>Sign in</Button>
                            </LocalForm>        
                        </Col>
                        <Col>
                            <div className="container">
                            <Media style={{width:'90%',marginLeft:'auto',marginTop:30}} src="https://cdn.hipwallpaper.com/i/62/72/IhUTmk.jpg"></Media>
                            </div>
                        </Col>
                    </Row>
                    <hr></hr>
                    <h5 style={{textAlign:'center'}}>OR</h5>
                    <a  style={{color:'white',display:'flex',justifyContent:'center'}}>
                        <Button href='/user/signup' color='warning'size="md">Click here to Signup</Button>
                    </a>
                </Container>
            </div>
        );
    }
}

export default Userlogin;