import React,{Component} from 'react';
import {Container, Button, FormGroup, Label, Input, FormText,Row,Col,Media,Card,CardHeader,CardBody,CardTitle,CardText } from 'reactstrap';
import {Control,Errors,Form,actions} from 'react-redux-form';
import ReactLoading from 'react-loading';
import DataUsageRoundedIcon from '@material-ui/icons/DataUsageRounded';

import {islawyerloggedin,isuserloggedin,isloggedin} from '../service/userservice';

function Cardprofile(props){
    const acceptHandler=(id)=>{
        props.postaccept(id);
    }

    if(isloggedin() && islawyerloggedin()){
        return(
            <Card inverse color="danger" style={{marginTop:50}}>
                <CardHeader style={{textTransform:'uppercase'}}>
                <span className="text-warning" style={{fontWeight:'bold'}}> Disposition Code : </span>
                 {props.casedata.dispositioncode}
                </CardHeader>
                <CardBody>
                    <CardTitle>
                        <span className="text-warning" style={{fontWeight:'bold'}}> Amended Charge : </span>
                        {props.casedata.amendedcharge}
                    </CardTitle>
                    <CardText>
                        <span className="text-warning" style={{fontWeight:'bold'}}> Disposition date : </span>
                        {props.casedata.dispositiondate}
                    </CardText>
                    <CardText>
                        <span className="text-warning" style={{fontWeight:'bold'}}> Sentencetime : </span>
                        {props.casedata.sentencetime}
                    </CardText>
                    <CardText>
                        <span className="text-warning" style={{fontWeight:'bold'}}> Description : </span>
                        {props.casedata.description}
                    </CardText>
                    <Button onClick={()=>acceptHandler(props.casedata._id)} color="primary">ACCEPT</Button>
                </CardBody>
            </Card>
        )
    }
}

function Head(props){
    if(props.data.length>0){
        return(
            <h4 className="text-center"><DataUsageRoundedIcon style={{fontSize:40,marginRight:6}}/>All Cases!</h4>
            )
    }else{
        return(
            <h4 className="text-center"><DataUsageRoundedIcon style={{fontSize:40,marginRight:6}}/>No Results found!</h4>
        );
    }
}


class Allcases extends Component{
    constructor(props){
        super(props);
        this.state={}
        this.handlesubmit=this.handlesubmit.bind(this);
    }
    
    handlesubmit(values){
        // this.props.postprofiledata(values.username,values.mobile);
    }

    render(){
        if(this.props.allcases.isloading){
            return(
            <div style={{height:'100%',width:'100%'}} className="d-flex align-items-center justify-content-center">
                <ReactLoading></ReactLoading>
            </div>
            )
        }else if(this.props.allcases.allcases){
            const cases=this.props.allcases.allcases.map((data)=>{
                return(<Cardprofile postaccept={this.props.postaccept} casedata={data}></Cardprofile>);
            })
            return(
                <div className="container" style={{marginTop:50,marginBottom:50,height:'100%'}}>
                    <Head data={this.props.allcases.allcases}/>

                    <div style={{marginTop:50}}>
                        {cases}
                    </div>
                </div>
            );
        }else if(this.props.allcases.err){
            return(<div>{this.props.usercases.err}</div>)
        }
    }
}

export default Allcases;