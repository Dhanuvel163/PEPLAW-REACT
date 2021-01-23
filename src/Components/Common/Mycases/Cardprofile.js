import {Card,CardHeader,CardBody,CardText } from 'reactstrap';
import {islawyerloggedin,isuserloggedin,isloggedin} from '../../../service/userservice'
import React,{useRef,useState} from 'react';

import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';


export default function Cardprofile(props){
    const [activeTab, setActiveTab] = useState('1');
    const toggleTab = tab => {
        if(activeTab !== tab) setActiveTab(tab);
    }

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
                <CardHeader>
                    <div onMouseEnter={toggle} onMouseLeave={toggle}>
                        <svg  xmlns="http://www.w3.org/2000/svg" width="20" height="18" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                        <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                        </svg>            
                        <span style={{textTransform:'uppercase'}}>
                        {props.casedata.User.name}                        
                        </span>           
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

                    <div>
                    <Nav tabs>
                        <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '1' })}
                            onClick={() => { toggleTab('1'); }}
                        >
                            Detail
                        </NavLink>
                        </NavItem>
                        <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '2' })}
                            onClick={() => { toggleTab('2'); }}
                        >
                            Requests
                        </NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent activeTab={activeTab}>
                        <TabPane tabId="1">
                            <CardText style={{marginTop:15}}>
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
                        </TabPane>
                        <TabPane tabId="2" className="font-weight-bold">
                                <div style={{height:15}}></div>
                                {
                                    props.casedata.lawyerRequests.length === 0 ?
                                    <div className="text-center">No Requests Yet !</div>:
                                    props.casedata.lawyerRequests.map((lawyer)=>
                                        <RequestCardLawyerDetail key={lawyer.name} lawyer={lawyer}/>
                                    )
                                }
                        </TabPane>
                    </TabContent>
                    </div>
                </CardBody>
            </Card>
            :
            null
        }
        </>
    )
}


function RequestCardLawyerDetail({lawyer}){
    const toggle = () => {
    (profile.current.style.display === 'none' || profile.current.style.display === '')
    ? profile.current.style.display = 'block' : profile.current.style.display = 'none'
    }
    let profile =useRef(null)
    return(
        <>
            <div style={{marginTop:10}} onMouseEnter={toggle} onMouseLeave={toggle}>
                <svg  xmlns="http://www.w3.org/2000/svg" width="20" height="18" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                </svg>     
                {lawyer.name}

                    <div className="User-view four-box-shadow" ref={profile}>
                        <p>
                        <svg  xmlns="http://www.w3.org/2000/svg" width="20" height="18" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                        <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                        </svg>     
                        {lawyer.name}
                        </p>                            <p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" fill="currentColor" className="bi bi-mailbox" viewBox="0 0 16 16">
                        <path d="M4 4a3 3 0 0 0-3 3v6h6V7a3 3 0 0 0-3-3zm0-1h8a4 4 0 0 1 4 4v6a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V7a4 4 0 0 1 4-4zm2.646 1A3.99 3.99 0 0 1 8 7v6h7V7a3 3 0 0 0-3-3H6.646z"/>
                        <path d="M11.793 8.5H9v-1h5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.354-.146l-.853-.854zM5 7c0 .552-.448 0-1 0s-1 .552-1 0a1 1 0 0 1 2 0z"/>
                        </svg>
                        {lawyer.email}
                        </p>
                        <p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                        </svg>
                        {lawyer.mobile}
                        </p>
                    </div>
            <span className="btn btn-sm btn-primary" style={{float:'right'}}>
                Accept
            </span>
            </div>
        </>
    )
}