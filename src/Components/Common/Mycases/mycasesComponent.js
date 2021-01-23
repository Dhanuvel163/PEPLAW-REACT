import React,{useEffect,useRef} from 'react';
import {Card,CardHeader,CardBody,CardTitle,CardText } from 'reactstrap';
import {islawyerloggedin,isuserloggedin,isloggedin} from '../../../service/userservice'
import './mycases.scss'
import {fetchusercases} from '../../../shared/Actioncreators/actionCreators'
import {connect} from 'react-redux';
import {Spinner} from 'reactstrap'

function Cardprofile(props){
    const toggle = () => {
    (profile.current.style.display === 'none' || profile.current.style.display === '')
    ? profile.current.style.display = 'block' : profile.current.style.display = 'none'
    }
    let profile =useRef(null)
    return(
        <>
        {
            isloggedin() && islawyerloggedin()
            ?
            <Card inverse className="card-style four-box-shadow" color="danger" style={{marginTop:50}} >
                <CardHeader style={{textTransform:'uppercase'}}>
                    <div onMouseEnter={toggle} onMouseLeave={toggle}>
                        <svg  xmlns="http://www.w3.org/2000/svg" width="20" height="18" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                        <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                        </svg>                       
                        {props.casedata.User.name}
                        <div className="User-view four-box-shadow" ref={profile}>
                            <p>
                            <svg  xmlns="http://www.w3.org/2000/svg" width="20" height="18" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                            <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                            </svg>     
                            {props.casedata.User.name}
                            </p>                            <p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" fill="currentColor" className="bi bi-mailbox" viewBox="0 0 16 16">
                            <path d="M4 4a3 3 0 0 0-3 3v6h6V7a3 3 0 0 0-3-3zm0-1h8a4 4 0 0 1 4 4v6a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V7a4 4 0 0 1 4-4zm2.646 1A3.99 3.99 0 0 1 8 7v6h7V7a3 3 0 0 0-3-3H6.646z"/>
                            <path d="M11.793 8.5H9v-1h5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.354-.146l-.853-.854zM5 7c0 .552-.448 0-1 0s-1 .552-1 0a1 1 0 0 1 2 0z"/>
                            </svg>
                            {props.casedata.User.email}
                            </p>
                            <p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                            </svg>
                            {props.casedata.User.mobile}
                            </p>
                        </div>
                    </div>
                </CardHeader>
                <CardBody className="mycases">
                    <CardText>
                        <span className="text-warning" style={{fontWeight:'bold'}}> Disposition Code : </span>
                        {props.casedata.dispositioncode}
                    </CardText>
                    <CardText>
                        <span className="text-warning" style={{fontWeight:'bold'}}> Amended Charge : </span>
                        {props.casedata.amendedcharge}
                    </CardText>
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
            <Card inverse className="card-style four-box-shadow" color="danger" style={{marginTop:50}} >
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
