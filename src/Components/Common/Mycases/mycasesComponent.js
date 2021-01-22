import React,{useEffect} from 'react';
import {Card,CardHeader,CardBody,CardTitle,CardText } from 'reactstrap';
import {islawyerloggedin,isuserloggedin,isloggedin} from '../../../service/userservice'
import './mycases.css'
import {fetchusercases} from '../../../shared/Actioncreators/actionCreators'
import {connect} from 'react-redux';
import {Spinner} from 'reactstrap'

function Cardprofile(props){
    return(
        <>
        {
            isloggedin() && islawyerloggedin()
            ?
            <Card inverse className="box" color="danger" style={{marginTop:50}} >
                <CardHeader style={{textTransform:'uppercase'}}>
                <span className="text-warning" style={{fontWeight:'bold'}}> Disposition Code : </span>
                 {props.casedata.dispositioncode}
                </CardHeader>
                <CardBody className="mycases">
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
                </CardBody>
            </Card>
            :
            isloggedin() && isuserloggedin()
            ?
            <Card inverse className="box" color="danger" style={{marginTop:50}} >
                <CardHeader style={{textTransform:'uppercase'}}>
                <span className="text-warning" style={{fontWeight:'bold'}}> Disposition Code : </span>
                 {props.casedata.dispositioncode}
                </CardHeader>
                <CardBody className="mycases">
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
                </CardBody>
            </Card>
            :
            null
        }
        </>
    )
}

function Head(props){
    return(
        <>
        {
            props.data.length > 0
            ?
            <h4 className="text-center">
                <svg style={{marginRight:6}} 
                xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-journal-text" viewBox="0 0 16 16">
                <path d="M5 10.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>
                <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"/>
                <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"/>
                </svg>
                Your Cases!</h4>
            :
            <h4 className="text-center">
                    <svg style={{marginRight:6}}
                    xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-journal-x" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M6.146 6.146a.5.5 0 0 1 .708 0L8 7.293l1.146-1.147a.5.5 0 1 1 .708.708L8.707 8l1.147 1.146a.5.5 0 0 1-.708.708L8 8.707 6.854 9.854a.5.5 0 0 1-.708-.708L7.293 8 6.146 6.854a.5.5 0 0 1 0-.708z"/>
                    <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"/>
                    <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"/>
                    </svg>
                No Results found!</h4>
        }
        </>
    )
}
const mapStateToProps=state=>{
    return {
        usercases:state.usercases
    }
}
const mapDispatchToProps=dispatch=>({
    fetchusercases:()=>dispatch(fetchusercases()),
})
let fetchedusercases = false
function Mycases(props){
    useEffect(()=>{
        if(!fetchedusercases){
            props.fetchusercases()
            fetchedusercases=true
        }
        return ()=>{
        }
    })
    return(
        (!props.usercases)
        ?
        <div className="d-flex justify-content-center align-items-center" style={{height:'100%',minHeight:500}}>            
        <div>Something went wrong !</div>
        </div>
        :
        props.usercases.err
        ?
        <div className="d-flex justify-content-center align-items-center" style={{height:'100%',minHeight:500}}>            
        <div>Something went wrong ! {props.usercases.err} !</div>
        </div>
        :
        props.usercases.isloading
        ?
        <div style={{height:'100%',minHeight:500}} className="d-flex align-items-center justify-content-center">
                    <Spinner color="#a01ba7" style={{ width: '4rem', height: '4rem',color:'#a01ba7' }} />
        </div>
        :
        props.usercases.usercasedata
        ?
        <div className="container cases" style={{marginTop:50,marginBottom:50,height:'100%'}}>
            <Head data={props.usercases.usercasedata}/>
            <div style={{marginTop:50}} className="row justify-content-lg-around">
                {
                    props.usercases.usercasedata.map((data)=>{
                        return(
                        <div key={data.dispositioncode}  className="col-sm-12 col-md-6 col-lg-3">
                            <Cardprofile casedata={data}></Cardprofile>
                        </div>
                        );
                    }) 
                }
            </div>
        </div>    
        :
        <div className="container cases" style={{marginTop:50,marginBottom:50,height:'100%'}}>
            <Head data={props.usercases.usercasedata}/>
            <div style={{marginTop:50}} className="row justify-content-lg-around">
            </div>
        </div>  
        )
}

export default connect(mapStateToProps,mapDispatchToProps)(Mycases);
