import React,{Component} from 'react';
import {
    Container
  } from 'reactstrap';
import { Button, Form, FormGroup,FormFeedback, Label, Input, FormText,Row,Col,Media } from 'reactstrap';
import {Control,LocalForm,Errors} from 'react-redux-form';
import Icon from '@material-ui/core/Icon';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
const required=(val)=>(val)&&(val.length)
const minLength=(len)=>(val)=>(val)&&(val.length>=len)
const maxLength=(len)=>(val)=>(val)&&(val.length<=len)
const isNumber=(val)=>!isNaN(Number(val))
const isemail=(val)=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(val)

class Addcase extends Component{
    constructor(props){
        super(props);
        this.handlesubmit=this.handlesubmit.bind(this);
    }

    handlesubmit(values){
        alert(JSON.stringify(values))
        this.props.postusercase(values['disposition-code'],values['disposition-date'],values['sentence-time'],values['amended-charge'],values['description']);
        // setTimeout(()=>{
        //     this.props.fetchuserdata()
        //     window.location.href="/"
        // },5000)

    }

    render(){
        return(
            <div className="container" style={{marginTop:50,marginBottom:50}}>
                <h4 className="text-center"><PlaylistAddIcon/> Add Case</h4>
                <Container style={{marginTop:50}}>
                <hr></hr>
                    <Row>
                        <Col sm="6">
                            <LocalForm onSubmit={(values)=>this.handlesubmit(values)}>
                                <div className='form-group'>
                                    <Label for="disposition-code">Disposition code</Label>
                                    <Control.text model=".disposition-code" className='form-control'
                                     placeholder="Disposition code"
                                     validators={{
                                        required
                                     }}/>
                                    <Errors
                                     model='.disposition-code'
                                     show="touched"
                                     messages={{
                                         required:'Disposition code is required !!',
                                     }}
                                     ></Errors>
                                </div>
                                <Row>
                                    <Col sm="6">
                                        <div className='form-group'>
                                        <Label for="disposition-date">Disposition Date</Label>
                                        <Control.text model=".disposition-date" className='form-control'
                                        placeholder="Disposition date"
                                        validators={{
                                            required
                                        }}/>
                                        <Errors
                                        model='.disposition-date'
                                        show="touched"
                                        messages={{
                                            required:'Disposition date is required !!',
                                        }}
                                        ></Errors>
                                        </div>
                                    </Col>
                                    <Col sm="6">
                                        <div className='form-group'>
                                        <Label for="sentence-time">Sentence Time</Label>
                                        <Control.text model=".sentence-time" className='form-control'
                                        placeholder="sentence-time"
                                        validators={{
                                            required
                                        }}/>
                                        <Errors
                                        model='.sentence-time'
                                        show="touched"
                                        messages={{
                                            required:'Sentence Time is required !!',
                                        }}
                                        ></Errors>
                                        </div>
                                    </Col>
                                </Row>
                                <div className='form-group'>
                                    <Label for="sentence-time">Amended Charge</Label>
                                    <Control.text model=".amended-charge" className='form-control'
                                     placeholder="Amended Charge"
                                     validators={{
                                        required
                                     }}/>
                                    <Errors
                                     model='.amennded-charge'
                                     show="touched"
                                     messages={{
                                         required:'Amended Charge is required !!',
                                     }}
                                     ></Errors>
                                </div>
                                <div className='form-group'>
                                    <Label for="sentence-time">Description</Label>
                                    <Control.textarea model=".description" className='form-control'
                                     placeholder="Description"
                                     />
                                </div>
                                <Button style={{marginLeft:'40%'}} color="secondary" size="md" active>Add</Button>
                            </LocalForm>        
                        </Col>
                        <Col>
                            <div className="container">
                            <Media style={{width:'90%',marginLeft:'auto',marginTop:30}} 
                            src="https://c4.wallpaperflare.com/wallpaper/492/496/909/costume-law-lawyer-businessman-wallpaper-preview.jpg">
                            </Media>
                            </div>
                        </Col>
                    </Row>
                    <hr></hr>
                </Container>
            </div>
        );
    }

}

export default Addcase;
