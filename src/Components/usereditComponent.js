import React,{Component} from 'react';
import {Container, Button, FormGroup, Label, Input, FormText,Row,Col,Media,Card,CardHeader,CardBody,CardTitle,CardText } from 'reactstrap';
import {Control,Errors,Form,actions} from 'react-redux-form';
import ReactLoading from 'react-loading';
import EditIcon from '@material-ui/icons/Edit';
import FolderSharedIcon from '@material-ui/icons/FolderShared';
import {islawyerloggedin,isuserloggedin,isloggedin} from '../service/userservice'
const required=(val)=>(val)&&(val.length)
const minLength=(len)=>(val)=>(val)&&(val.length>=len)
const maxLength=(len)=>(val)=>(val)&&(val.length<=len)
const isNumber=(val)=>!isNaN(Number(val))
const isemail=(val)=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(val)

function Cardprofile(props){
    if(isloggedin() && islawyerloggedin()){
        return(
            <Card inverse color="danger">
                <CardHeader style={{textTransform:'uppercase'}}>
                    {props.profiledata.profiledata.lawyer.name}
                </CardHeader>
                <CardBody>
                    <CardTitle>Mail : {props.profiledata.profiledata.lawyer.email}</CardTitle>
                    <CardText>Mobile : {props.profiledata.profiledata.lawyer.mobile}</CardText>
                </CardBody>
            </Card>
        )
    }else if(isloggedin() && isuserloggedin()){
        return(
            <Card inverse color="danger">
                <CardHeader style={{textTransform:'uppercase'}}>
                    {props.profiledata.profiledata.user.name}
                </CardHeader>
                <CardBody>
                    <CardTitle>Mail : {props.profiledata.profiledata.user.email}</CardTitle>
                    <CardText>Mobile : {props.profiledata.profiledata.user.mobile}</CardText>
                </CardBody>
            </Card>
        );
    }
}


class Useredit extends Component{
    constructor(props){
        super(props);
        this.state={}
        this.handlesubmit=this.handlesubmit.bind(this);
    }
    
    handlesubmit(values){
        this.props.postprofiledata(values.username,values.mobile);
    }

    render(){
        if(this.props.profiledata.isloading){
            return(
            <div style={{height:'100%',width:'100%'}} className="d-flex align-items-center justify-content-center">
                <ReactLoading></ReactLoading>
            </div>
            )
        }else if(this.props.profiledata.profiledata){
            return(
                <div className="container" style={{marginTop:50,marginBottom:50,height:'100%'}}>
                    <h4 className="text-center"><FolderSharedIcon style={{fontSize:40,marginRight:6}}/>Edit Profile!</h4>
                    <div className="d-flex align-center justify-content-center" style={{marginTop:50}}>
                        <Cardprofile profiledata={this.props.profiledata}></Cardprofile>
                    </div>

                    <Container style={{marginTop:50}}>
                    <hr></hr>
                        <Row style={{marginTop:50,marginBottom:50}}>
                            <Col sm="6">
                            <h4 className="text-center"><EditIcon/>Edit Here!
                            </h4>
                            <Form model='lawyersignupform' onSubmit={(values)=>this.handlesubmit(values)}>
                                    <div className='form-group'>
                                        <Label for="username">Username</Label>
                                        <Control.text model=".username"  className='form-control' name="username" id="username"
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
                                             required:'Mobile Number is required !!',
                                             minLength:'Mobile Number should has 10 characters !!',
                                             maxLength:'Mobile Number should has 10 characters !!',
                                             isNumber:'Enter a valid phone Number !!'
                                         }}
                                         ></Errors>
                                    </FormGroup>
                                    <Button type="submit" style={{marginLeft:'35%'}} color="secondary" size="md" active>Edit</Button>
                                </Form>         
                            </Col>
                            <Col>
                                <div className="container">
                                <Media style={{width:'90%',marginLeft:'auto',marginTop:30}} 
                                src="https://lh3.googleusercontent.com/proxy/z3hG8JAkwiC0mTmRPihg-ZsM_VSYZkUHzKPJa0kpwBJZjTbtBRkwO9TtGRz9Z4IKTrXxAjTOzC1-WOrg9hzxEfcJedWF82Jw-_EBi7nePXu1NvCnFtIgNw">
                                </Media>
                                </div>
                            </Col>
                        </Row>
                        <hr></hr>
                    </Container>
                </div>
            );
        }else if(this.props.profiledata.err){
            return(<div>{this.props.profiledata.err}</div>)
        }
        
    }
}

export default Useredit;